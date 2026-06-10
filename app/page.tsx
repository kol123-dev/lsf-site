'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import HeroCarousel from '@/components/hero-carousel'
import Programs from '@/components/programs'
import Impact from '@/components/impact'
import Team from '@/components/team'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'

export default function Page() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const openDonation = () => setShowDonationModal(true)
  const closeDonation = () => setShowDonationModal(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={openDonation} />
      <HeroCarousel onDonateClick={openDonation} />
      <Programs />
      <Impact />
      <Team />
      <Footer onDonateClick={openDonation} />
      <DonationModal isOpen={showDonationModal} onClose={closeDonation} />
    </main>
  )
}
