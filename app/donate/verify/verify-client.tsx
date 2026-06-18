'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { verifyDonationAction } from '@/app/actions/payments';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function VerifyPaymentClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const reference = searchParams.get('reference') || searchParams.get('trxref') || searchParams.get('OrderTrackingId');
    
    if (!reference) {
      setStatus('error');
      setMessage('No payment reference found. Please contact support if you were charged.');
      return;
    }

    const verify = async () => {
      try {
        const result = await verifyDonationAction(reference);
        if (result.success) {
          setStatus('success');
        } else {
          setStatus('error');
          setMessage(result.message || 'Payment verification failed.');
        }
      } catch (err) {
        setStatus('error');
        setMessage('An unexpected error occurred during verification.');
      }
    };

    verify();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center py-12">
        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
        <h2 className="text-xl font-semibold mb-2">Verifying your donation...</h2>
        <p className="text-gray-600">Please wait while we confirm your transaction securely.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center py-8">
        <XCircle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <Link 
          href="/donate"
          className="w-full bg-primary text-white py-3 px-4 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-block"
        >
          Try Again
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
      <p className="text-gray-600 mb-6">
        Your generous donation has been received successfully. We appreciate your support!
      </p>
      <Link 
        href="/"
        className="w-full bg-primary text-white py-3 px-4 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-block"
      >
        Return Home
      </Link>
    </div>
  );
}