import React, { useState } from 'react';

type Action = 'CREATE' | 'SUBMIT' | 'APPROVE_LEVEL1' | 'APPROVE_LEVEL2' | 'APPROVE' | 'REJECT' | 'REASSIGN';

export const ApprovalForm: React.FC = () => {
  const [approvalId, setApprovalId] = useState<string>('');
  const [action, setAction] = useState<Action>('CREATE');
  const [status, setStatus] = useState<string>('idle'); // 'loading', 'success', 'error'
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async () => {
    if (!approvalId) {
      setMessage('Please provide an approval ID or create a new one.');
      return;
    }

    const payload: any = {
      action,
      approvalId,
      userId: 'frontend-user', // placeholder – in reality this would come from auth
    };

    if (action === 'CREATE') {
      payload.data = { ownerId: 'owner-from-frontend' };
    } else if (['SUBMIT', 'APPROVE_LEVEL1', 'APPROVE_LEVEL2', 'APPROVE', 'REJECT', 'REASSIGN'].includes(action)) {
      payload.data = {};
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/approval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'API error');
      }

      setMessage(`Success: ${result.message ?? 'operation completed.'}`);

      // Refresh ID if we just created one
      if (action === 'CREATE') {
        setApprovalId(result.approvalId as string);
      }
    } catch (err: any) {
      console.error(err);
      setMessage(`Error: ${err.message}`);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: '400px' }}>
      <h3>Approval Workflow</h3>

      {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}

      <div>
        <label>
          Approval ID:
          <input
            type="text"
            value={approvalId}
            onChange={(e) => setApprovalId(e.target.value)}
            disabled={status === 'loading'}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <label>
          Action:
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as Action)}
            disabled={status === 'loading'}
          >
            <option value="CREATE">Create Approval</option>
            <option value="SUBMIT">Submit</option>
            <option value="APPROVE_LEVEL1">Approve Level 1</option>
            <option value="APPROVE_LEVEL2">Approve Level 2</option>
            <option value="APPROVE">Final Approve</option>
            <option value="REJECT">Reject</option>
            <option value="REASSIGN">Reassign</option>
          </select>
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleSubmit} disabled={status === 'loading'}>
          {status === 'loading' ? 'Processing...' : ` ${action}`}
        </button>
      </div>
    </div>
  );
};

export default ApprovalForm;