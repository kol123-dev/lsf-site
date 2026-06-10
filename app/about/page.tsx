'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { ArrowRight, Heart, Target, Leaf, BookOpen } from 'lucide-react'

export default function AboutPage() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const openDonation = () => setShowDonationModal(true)
  const closeDonation = () => setShowDonationModal(false)

  const milestones = [
    { year: '2015', title: 'Foundation Established', description: 'Lillian Siyoi Foundation begins its mission to empower Kenyan communities' },
    { year: '2017', title: 'First Impact Year', description: 'Successfully reach 10,000 community members in rural Kenya' },
    { year: '2019', title: 'Program Expansion', description: 'Launch comprehensive climate action and health initiatives' },
    { year: '2021', title: 'National Recognition', description: 'Awarded for excellence in sustainable development' },
    { year: '2023', title: 'Major Milestone', description: 'Reach 100,000+ lives positively impacted across Kenya' },
    { year: '2024', title: 'Regional Growth', description: 'Expanding impact across East African region' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={openDonation} />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            About Lillian Siyoi Foundation
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Driving sustainable change across Kenya through collaborative action in climate, health, and education. We believe in the power of communities to transform their own futures.
          </p>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                The Lillian Siyoi Foundation was founded on the belief that communities, when empowered with knowledge, resources, and support, can transform their own futures. Named after a visionary leader, we work at the intersection of three critical areas: climate action, health, and education.
              </p>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                For nearly a decade, we have been committed to creating sustainable, lasting change in underserved communities across Kenya. Our approach is deeply rooted in listening to and collaborating with the communities we serve, ensuring that solutions are locally-driven and culturally appropriate.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Today, we are proud to have impacted over 100,000 lives. We work in partnership with local communities, government agencies, NGOs, and international organizations to amplify our positive impact and reach more people with meaningful, sustainable solutions.
              </p>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-1-community.png"
                alt="Community members collaborating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary w-8 h-8" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To empower communities across Kenya by addressing interconnected challenges of environmental degradation, inadequate healthcare, and limited educational opportunities through sustainable, community-led initiatives that create lasting positive impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-accent w-8 h-8" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                A Kenya where thriving ecosystems support healthy, educated communities with equal access to opportunities for sustainable development and improved quality of life for all generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                description: 'We believe in sustainable practices that protect our planet for future generations.',
              },
              {
                icon: Heart,
                title: 'Community-Centered',
                description: 'Communities drive their own change. Our programs are built on local knowledge and leadership.',
              },
              {
                icon: BookOpen,
                title: 'Education & Empowerment',
                description: 'We invest in knowledge and skills development as catalysts for lasting transformation.',
              },
              {
                title: 'Collaboration',
                description: 'We work with partners, government bodies, and organizations to amplify our impact.',
              },
              {
                title: 'Transparency & Accountability',
                description: 'We maintain the highest standards of openness and accountability in all operations.',
              },
              {
                title: 'Equity & Inclusion',
                description: 'We are committed to reaching the most vulnerable and marginalized communities.',
              },
            ].map((value, index) => {
              const Icon = value.icon ? value.icon : null
              return (
                <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  {Icon && <Icon className="text-primary w-8 h-8 mb-3" />}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Journey
          </h2>
          <p className="text-xl text-foreground/70 text-center mb-16 max-w-3xl mx-auto">
            Key milestones that shaped our impact and growth over the years
          </p>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2">
                    <div className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-sm font-semibold text-primary mb-2">{milestone.year}</p>
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-foreground/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background mt-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Listen & Learn',
                description: 'We start by listening to communities, understanding their needs, challenges, and aspirations.',
              },
              {
                number: '2',
                title: 'Co-Create Solutions',
                description: 'Together with communities, we design programs that address root causes and are culturally appropriate.',
              },
              {
                number: '3',
                title: 'Build Capacity',
                description: 'We invest in local capacity and leadership to ensure long-term sustainability of programs.',
              },
              {
                number: '4',
                title: 'Monitor & Measure',
                description: 'We track impact rigorously and adapt our approach based on evidence and community feedback.',
              },
              {
                number: '5',
                title: 'Scale & Sustain',
                description: 'Successful programs are scaled to reach more communities while maintaining quality and impact.',
              },
              {
                number: '6',
                title: 'Share Knowledge',
                description: 'We share learning and best practices with partners to amplify positive change across sectors.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Your support enables us to continue empowering communities across Kenya through climate action, health, and education.
          </p>
          <button
            onClick={openDonation}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-lg transition-colors text-lg"
          >
            Support Our Mission
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer onDonateClick={openDonation} />
      <DonationModal isOpen={showDonationModal} onClose={closeDonation} />
    </main>
  )
}
