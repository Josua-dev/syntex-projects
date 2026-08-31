import crypto from 'crypto';

// Simple role map – in a real app this would be fetched from an auth service
const roleMap: Record<string, string[]> = {
  owner: ['admin', 'owner'],
  approver: ['reviewer', 'approver'],
  admin: ['admin'],
};

function hasRole(userId: string, requiredRoles: string[]): boolean {
  // In this stub we treat any non‑empty userId as authorized for demo purposes
  // Replace with real role validation when auth is integrated
  return !!userId && requiredRoles.length > 0;
}

export type { ApprovalState, ApprovalContext, ApprovalEvent } from './approval-state';

export class ApprovalEngine {
  private approvals = new Map<string, ApprovalContext>();

  /** Create a new approval context */
  create(userId: string, ownerId: string): { id: string; error?: string } {
    if (!hasRole(userId, ['admin', 'owner'])) {
      return { error: 'Insufficient permissions to create approvals' };
    }
    const id = crypto.randomUUID();
    this.approvals.set(id, { state: 'DRAFT', ownerId, approvers: {} });
    return { id };
  }

  /** Submit an approval for review */
  submit(userId: string, id: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['approver', 'admin'])) {
      return { error: 'Only reviewers can submit approvals' };
    }
    const transition = { type: 'SUBMIT', from: approval.state, to: 'SUBMITTED' as any };
    const result = this.transition(approval.state, transition);
    if (!result.success) return { success: false, error: result.error };
    approval.state = result.newState;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Approve at Level 1 */
  approveLevel1(userId: string, id: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['approver', 'admin'])) {
      return { error: 'Only reviewers can approve at Level 1' };
    }
    const transition = { type: 'APPROVE_LEVEL1', from: approval.state, to: 'LEVEL1_REVIEW' as any };
    const result = this.transition(approval.state, transition);
    if (!result.success) return { success: false, error: result.error };
    approval.state = result.newState;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Approve at Level 2 */
  approveLevel2(userId: string, id: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['approver', 'admin'])) {
      return { error: 'Only reviewers can approve at Level 2' };
    }
    const transition = { type: 'APPROVE_LEVEL2', from: approval.state, to: 'LEVEL2_REVIEW' as any };
    const result = this.transition(approval.state, transition);
    if (!result.success) return { success: false, error: result.error };
    approval.state = result.newState;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Final approve */
  approve(userId: string, id: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['admin'])) {
      return { error: 'Only admins can final approve' };
    }
    const transition = { type: 'APPROVE', from: approval.state, to: 'APPROVED' as any };
    const result = this.transition(approval.state, transition);
    if (!result.success) return { success: false, error: result.error };
    approval.state = result.newState;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Reject the approval */
  reject(userId: string, id: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['admin'])) {
      return { error: 'Only admins can reject' };
    }
    const transition = { type: 'REJECT', from: approval.state, to: 'REJECTED' as any };
    const result = this.transition(approval.state, transition);
    if (!result.success) return { success: false, error: result.error };
    approval.state = result.newState;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Submit a reassignment */
  reassign(userId: string, id: string, newOwnerId: string): { success: boolean; error?: string } {
    const approval = this.approvals.get(id);
    if (!approval) return { success: false, error: 'Approval not found' };
    if (!hasRole(userId, ['admin'])) {
      return { error: 'Only admins can reassign' };
    }
    approval.ownerId = newOwnerId;
    this.approvals.set(id, approval);
    return { success: true };
  }

  /** Retrieve an approval */
  get(id: string): ApprovalContext | undefined {
    return this.approvals.get(id);
  }

  /** Private transition helper */
  private transition(
    currentState: ApprovalState,
    event: { type: string; from: ApprovalState; to: ApprovalState }
  ): { success: boolean; newState?: ApprovalState; error?: string } {
    switch (currentState) {
      case 'DRAFT':
        if (event.type === 'SUBMIT') return { success: true, newState: 'SUBMITTED' };
        break;
      case 'SUBMITTED':
        if (event.type === 'APPROVE_LEVEL1') return { success: true, newState: 'LEVEL1_REVIEW' };
        break;
      case 'LEVEL1_REVIEW':
        if (event.type === 'APPROVE_LEVEL2') return { success: true, newState: 'LEVEL2_REVIEW' };
        if (event.type === 'APPROVE') return { success: true, newState: 'APPROVED' };
        if (event.type === 'REJECT') return { success: true, newState: 'REJECTED' };
        break;
      case 'LEVEL2_REVIEW':
        if (event.type === 'APPROVE') return { success: true, newState: 'APPROVED' };
        if (event.type === 'REJECT') return { success: true, newState: 'REJECTED' };
        break;
      default:
        break;
    }
    return { success: false, error: 'Invalid transition' };
  }
}