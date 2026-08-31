import React from 'react';
import ApprovalForm from '@/components/ApprovalForm';

export default function ApprovalPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Approval Workflow</h1>
      <ApprovalForm />
    </div>
  );
}

export const metadata = {
  title: 'Approval Workflow',
  description: 'Create and manage approvals through the UI',
};