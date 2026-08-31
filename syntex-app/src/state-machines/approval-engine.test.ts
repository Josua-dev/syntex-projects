import { ApprovalEngine } from './approval-engine';

// Simple in‑memory test of the approval workflow
const engine = new ApprovalEngine();

const userId = 'demo-user';
const ownerId = 'owner-123';

const createResult = engine.create(userId, ownerId);
if (createResult.error) {
  console.error('Create failed:', createResult.error);
} else {
  const approvalId = createResult.id;
  console.assert(approvalId.length > 0, 'Approval ID should be generated');

  // Test submit (needs reviewer role)
  const submitResult = engine.submit('reviewer-1', approvalId);
  console.assert(submitResult.success, 'Submit should succeed for reviewer');

  // Test level 1 approval
  const level1Result = engine.approveLevel1('reviewer-1', approvalId);
  console.assert(level1Result.success, 'Level 1 approve should succeed for reviewer');

  // Test level 2 approval
  const level2Result = engine.approveLevel2('reviewer-2', approvalId);
  console.assert(level2Result.success, 'Level 2 approve should succeed for reviewer');

  // Test final approve (admin only)
  const finalResult = engine.approve('admin-1', approvalId);
  console.assert(finalResult.success, 'Final approve should succeed for admin');

  // Test reject
  const rejectResult = engine.reject('admin-2', approvalId);
  console.assert(rejectResult.success, 'Reject should succeed for admin');

  console.log('All approval engine tests passed');
}