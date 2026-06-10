'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselSlide {
  id: number
  image: string
  title: string
  description: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: '/images/hero-1-community.png',
    title: 'Empowering Communities',
    description: 'Building sustainable change through collaborative action and grassroots initiatives across Kenya',
  },
  {
    id: 2,
    image: '/images/hero-2-climate.png',
    title: 'Climate Action',
    description: 'Fighting climate change through reforestation and renewable energy adoption for a greener future',
  },
  {
    id: 3,
    image: '/images/hero-3-health.png',
    title: 'Health Initiatives',
    description: 'Providing accessible healthcare and wellness education to underserved communities',
  },
  {
    id: 4,
    image: '/images/hero-4-education.png',
    title: 'Quality Education',
    description: 'Empowering youth through scholarships, mentorship, and skill development programs',
  },
  {
    id: 5,
    image: '/images/hero-5-empowerment.png',
    title: 'Sustainable Impact',
    description: 'Creating lasting positive change that transforms lives and builds resilient communities',
  },
]

export default function HeroCarousel({ onDonateClick }: { onDonateClick: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Ken Burns effect */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-10000 ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              priority={index === 0}
              sizes="100vw"
            />

            {/* Gradient Overlay for better readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div
                className={`max-w-3xl space-y-6 transition-all duration-1000 transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0 delay-300'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white text-balance drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 text-balance drop-shadow">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <button
                    onClick={onDonateClick}
                    className="group relative px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    Make a Donation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="/about"
                    className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/80 w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
