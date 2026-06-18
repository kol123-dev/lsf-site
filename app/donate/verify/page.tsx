import { Suspense } from 'react'
import VerifyPaymentClient from './verify-client'

export default function VerifyPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <Suspense fallback={
          <div className="flex flex-col items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-gray-600">Verifying your donation...</p>
          </div>
        }>
          <VerifyPaymentClient />
        </Suspense>
      </div>
    </div>
  )
}