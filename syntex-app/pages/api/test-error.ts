import { NextResponse } from 'next/server';

export async function GET() {
  // Trigger an error to see it in Sentry
  throw new Error('Test error from Syntex app');
}