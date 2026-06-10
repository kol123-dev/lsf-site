'use client'

import HeroCarousel from './hero-carousel'

interface HeroProps {
  onDonateClick: () => void
}

export default function Hero({ onDonateClick }: HeroProps) {
  return <HeroCarousel onDonateClick={onDonateClick} />
}
