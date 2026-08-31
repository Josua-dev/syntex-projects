import type { NextApiRequest, NextApiResponse } from 'next';
import { ApprovalEngine } from '@/state-machines/approval-engine';

const engine = new ApprovalEngine();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { action, approvalId, data } = req.body as {
    action?: string;
    approvalId?: string;
    data?: Record<string, any>;
    userId?: string; // optional user identifier for permission checks
  };

  // Basic validation
  if (!action) {
    return res.status(400).json({ error: 'Missing action' });
  }

  try {
    switch (action) {
      case 'CREATE':
        const createResult = engine.create(data.userId ?? 'system', data.ownerId);
        if (createResult.error) {
          return res.status(403).json({ error: createResult.error });
        }
        return res.status(200).json({ approvalId: createResult.id });
      case 'SUBMIT':
        const submitResult = engine.submit(data.userId ?? 'system', approvalId!);
        return res.json(submitResult);
      case 'APPROVE_LEVEL1':
        const level1Result = engine.approveLevel1(data.userId ?? 'system', approvalId!);
        return res.json(level1Result);
      case 'APPROVE_LEVEL2':
        const level2Result = engine.approveLevel2(data.userId ?? 'system', approvalId!);
        return res.json(level2Result);
      case 'APPROVE':
        const approveResult = engine.approve(data.userId ?? 'system', approvalId!);
        return res.json(approveResult);
      case 'REJECT':
        const rejectResult = engine.reject(data.userId ?? 'system', approvalId!);
        return res.json(rejectResult);
      case 'REASSIGN':
        const reassignResult = engine.reassign(data.userId ?? 'system', approvalId!, data?.newOwnerId);
        return res.json(reassignResult);
      default:
        return res.status(400).json({ error: `Unsupported action: ${action}` });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}