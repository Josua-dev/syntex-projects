import { createMocks } from 'node-mocks-http';
import { handler } from '@/pages/api/approval';
import { ApprovalEngine } from '@/state-machines/approval-engine';

// Mock the engine since it holds state between tests
jest.mock('@/state-machines/approval-engine', () => {
  const mockEngine = {
    create: jest.fn(),
    submit: jest.fn(),
    approveLevel1: jest.fn(),
    approveLevel2: jest.fn(),
    approve: jest.fn(),
    reject: jest.fn(),
    reassign: jest.fn(),
    get: jest.fn(),
  };
  return { ApprovalEngine: jest.fn(() => mockEngine) };
});

const mockEngineInstance = new ApprovalEngine();
jest.mock('@/state-machines/approval-engine', () => ({
  ApprovalEngine: jest.fn(() => mockEngineInstance),
}));

describe('Approval API handler', () => {
  const mockCreate = mockEngineInstance.create;
  const mockSubmit = mockEngineInstance.submit;
  const mockApproveLevel1 = mockEngineInstance.approveLevel1;
  const mockApproveLevel2 = mockEngineInstance.approveLevel2;
  const mockApprove = mockEngineInstance.approve;
  const mockReject = mockEngineInstance.reject;
  const mockReassign = mockEngineInstance.reassign;
  const mockGet = mockEngineInstance.get;

  const createMockEngine = () => {
    const mockEngine = new ApprovalEngine();
    // Reset mocks before each test
    mockCreate.mockReset();
    mockSubmit.mockReset();
    mockApproveLevel1.mockReset();
    mockApproveLevel2.mockReset();
    mockApprove.mockReset();
    mockReject.mockReset();
    mockReassign.mockReset();
    mockGet.mockReset();
    return mockEngine;
  };

  const runHandler = async (action, approvalId, data, userId) => {
    const mocks = createMocks({
      method: 'POST',
      body: { action, approvalId, data, userId },
    });
    const { res } = mocks;
    await handler(mocks.req, res);
    return res;
  };

  it('creates a new approval when user has permission', async () => {
    mockCreate.mockReturnValue({ id: 'approval-123' });

    const res = await runHandler('CREATE', undefined, { ownerId: 'owner-1' }, 'admin');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.approvalId).toBe('approval-123');
  });

  it('fails to create an approval when user lacks permission', async () => {
    const res = await runHandler('CREATE', undefined, { ownerId: 'owner-1' }, 'unauthorized');
    expect(res._getStatusCode()).toBe(403);
    const json = JSON.parse(res._getData());
    expect(json.error).toBe('Insufficient permissions to create approvals');
  });

  it('submits an approval when called by a reviewer', async () => {
    mockSubmit.mockReturnValue({ success: true });

    const res = await runHandler('SUBMIT', 'approval-123', {}, 'reviewer-1');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });

  it('rejects submission when called by non‑reviewer', async () => {
    const res = await runHandler('SUBMIT', 'approval-123', {}, 'unauthorized');
    expect(res._getStatusCode()).toBe(403);
    const json = JSON.parse(res._getData());
    expect(json.error).toBe('Only reviewers can submit approvals');
  });

  it('advances to Level 1 review for a reviewer', async () => {
    mockApproveLevel1.mockReturnValue({ success: true });

    const res = await runHandler('APPROVE_LEVEL1', 'approval-123', {}, 'reviewer-1');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });

  it('fails to advance to Level 1 when called by non‑reviewer', async () => {
    const res = await runHandler('APPROVE_LEVEL1', 'approval-123', {}, 'unauthorized');
    expect(res._getStatusCode()).toBe(403);
    const json = JSON.parse(res._getData());
    expect(json.error).toBe('Only reviewers can approve at Level 1');
  });

  it('advances to Level 2 review for a reviewer', async () => {
    mockApproveLevel2.mockReturnValue({ success: true });

    const res = await runHandler('APPROVE_LEVEL2', 'approval-123', {}, 'reviewer-2');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });

  it('fails Level 2 advancement when called by non‑reviewer', async () => {
    const res = await runHandler('APPROVE_LEVEL2', 'approval-123', {}, 'unauthorized');
    expect(res._getStatusCode()).toBe(403);
    const json = JSON.parse(res._getData());
    expect(json.error).toBe('Only reviewers can approve at Level 2');
  });

  it('final‑approves an approval for an admin', async () => {
    mockApprove.mockReturnValue({ success: true });

    const res = await runHandler('APPROVE', 'approval-123', {}, 'admin-1');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });

  it('rejects an approval for an admin', async () => {
    mockReject.mockReturnValue({ success: true });

    const res = await runHandler('REJECT', 'approval-123', {}, 'admin-2');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });

  it('rejects reassignment when called by non‑admin', async () => {
    const res = await runHandler('REASSIGN', 'approval-123', { newOwnerId: 'new-owner' }, 'unauthorized');
    expect(res._getStatusCode()).toBe(403);
    const json = JSON.parse(res._getData());
    expect(json.error).toBe('Only admins can reassign');
  });

  it('successfully reassigns an approval for an admin', async () => {
    mockReassign.mockReturnValue({ success: true });

    const res = await runHandler('REASSIGN', 'approval-123', { newOwnerId: 'new-owner' }, 'admin-1');
    expect(res._getStatusCode()).toBe(200);
    const json = JSON.parse(res._getData());
    expect(json.success).toBe(true);
  });
});