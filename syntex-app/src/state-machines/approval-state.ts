export type ApprovalState = 'DRAFT' | 'SUBMITTED' | 'LEVEL1_REVIEW' | 'LEVEL2_REVIEW' | 'APPROVED' | 'REJECTED';

export interface ApprovalContext {
  state: ApprovalState;
  approvalId?: string;
  ownerId?: string;
  approvers?: Record<string, 'pending' | 'approved' | 'rejected'>;
}

export type ApprovalEvent =
  | { type: 'SUBMIT'; from: 'DRAFT'; to: 'SUBMITTED' }
  | { type: 'APPROVE_LEVEL1'; from: 'SUBMITTED'; to: 'LEVEL1_REVIEW' }
  | { type: 'APPROVE_LEVEL2'; from: 'LEVEL1_REVIEW'; to: 'LEVEL2_REVIEW' }
  | { type: 'APPROVE'; from: 'LEVEL2_REVIEW'; to: 'APPROVED' }
  | { type: 'REJECT'; from: 'LEVEL2_REVIEW'; to: 'REJECTED' }
  | { type: 'ESCALATE'; from: 'LEVEL1_REVIEW'; to: 'LEVEL2_REVIEW' }
  | { type: 'REASSIGN'; from: any; to: any }
  | { type: 'ANY'; from: any; to: any }

export function getNextState(
  currentState: ApprovalState,
  event: ApprovalEvent
): ApprovalState | null {
  switch (currentState) {
    case 'DRAFT':
      if (event.type === 'SUBMIT') return 'SUBMITTED';
      break;
    case 'SUBMITTED':
      if (event.type === 'APPROVE_LEVEL1') return 'LEVEL1_REVIEW';
      break;
    case 'LEVEL1_REVIEW':
      if (event.type === 'APPROVE_LEVEL2') return 'LEVEL2_REVIEW';
      if (event.type === 'APPROVE') return 'APPROVED';
      if (event.type === 'REJECT') return 'REJECTED';
      break;
    case 'LEVEL2_REVIEW':
      if (event.type === 'APPROVE') return 'APPROVED';
      if (event.type === 'REJECT') return 'REJECTED';
      break;
    default:
      break;
  }
  return null;
}

export function transitionApproval(
  state: ApprovalState,
  event: ApprovalEvent,
  context: ApprovalContext
): { newState: ApprovalState; success: boolean; error?: string } {
  const next = getNextState(state, event);
  if (!next) {
    return { newState: state, success: false, error: 'Invalid transition' };
  }
  // TODO: Add role-based checks here
  return { newState: next, success: true };
}