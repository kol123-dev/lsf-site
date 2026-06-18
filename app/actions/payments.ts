'use server';

import { getPaymentProvider } from '@/lib/payments';

export async function initiateDonationAction(amount: number, email: string, name: string) {
  try {
    const provider = getPaymentProvider();
    const result = await provider.initiatePayment(amount, email, name);
    return { success: true, url: result.url, reference: result.reference };
  } catch (error: any) {
    console.error('Initiation Error:', error);
    return { success: false, message: error.message || 'Failed to initiate payment' };
  }
}

export async function verifyDonationAction(reference: string) {
  try {
    const provider = getPaymentProvider();
    return await provider.verifyPayment(reference);
  } catch (error: any) {
    console.error('Verification Error:', error);
    return { success: false, message: error.message || 'Failed to verify payment' };
  }
}