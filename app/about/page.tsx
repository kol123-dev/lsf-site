'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { ArrowRight, Heart, Target, Leaf, BookOpen, Users, Globe, ShieldCheck } from 'lucide-react'

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
      <section className="relative py-24 px-6 md:py-36 bg-linear-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Lillian Siyoi Foundation</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Driving sustainable change across Kenya through collaborative action in climate, health, and education. We believe in the power of communities to transform their own futures.
          </p>
        </div>
      </section>

      {/* Our Story with Founder Image */}
      <section className="py-20 px-6 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Empowering Communities, Transforming Futures</h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  The Lillian Siyoi Foundation was founded on the belief that communities, when empowered with knowledge, resources, and support, can transform their own futures. Named after a visionary leader, we work at the intersection of three critical areas: climate action, health, and education.
                </p>
                <p>
                  For nearly a decade, we have been committed to creating sustainable, lasting change in underserved communities across Kenya. Our approach is deeply rooted in listening to and collaborating with the communities we serve, ensuring that solutions are locally-driven and culturally appropriate.
                </p>
                <p>
                  Today, we are proud to have impacted over 100,000 lives. We work in partnership with local communities, government agencies, NGOs, and international organizations to amplify our positive impact and reach more people with meaningful, sustainable solutions.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/team-lillian.png"
                alt="Lillian Siyoi - Founder"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Lillian Siyoi</h3>
                <p className="text-white/80 font-medium">Founder & Visionary Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-1-community.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-colors duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-white w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed font-medium">
                To empower communities across Kenya by addressing interconnected challenges of environmental degradation, inadequate healthcare, and limited educational opportunities through sustainable, community-led initiatives that create lasting positive impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-colors duration-500">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="text-white w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed font-medium">
                A Kenya where thriving ecosystems support healthy, educated communities with equal access to opportunities for sustainable development and improved quality of life for all generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide our work and shape our organizational culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                description: 'We believe in sustainable practices that protect our planet for future generations.',
              },
              {
                icon: Users,
                title: 'Community-Centered',
                description: 'Communities drive their own change. Our programs are built on local knowledge and leadership.',
              },
              {
                icon: BookOpen,
                title: 'Education & Empowerment',
                description: 'We invest in knowledge and skills development as catalysts for lasting transformation.',
              },
              {
                icon: Globe,
                title: 'Collaboration',
                description: 'We work with partners, government bodies, and organizations to amplify our impact.',
              },
              {
                icon: ShieldCheck,
                title: 'Transparency',
                description: 'We maintain the highest standards of openness and accountability in all operations.',
              },
              {
                icon: Heart,
                title: 'Equity & Inclusion',
                description: 'We are committed to reaching the most vulnerable and marginalized communities.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="group p-8 rounded-2xl border border-border/50 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 ease-out" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="text-primary w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:py-32 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Journey
          </h2>
          <p className="text-xl text-foreground/70 text-center mb-16 max-w-3xl mx-auto">
            Key milestones that shaped our impact and growth over the years
          </p>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary" />

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
      <section className="py-16 px-6 md:py-24 bg-linear-to-br from-primary to-secondary">
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
