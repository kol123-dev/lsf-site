'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { Leaf, Heart, BookOpen, Users, Zap, Award } from 'lucide-react'

export default function ProgramsPage() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const programs = [
    {
      id: 1,
      title: 'Climate Action Initiative',
      image: '/images/program-climate.png',
      icon: Leaf,
      overview: 'Fighting climate change and environmental degradation through community-led conservation and sustainable practices.',
      focus: 'Reforestation, renewable energy, sustainable agriculture, climate literacy',
      impact: '50,000+ trees planted | 5,000+ hectares under conservation | 10,000+ beneficiaries',
      details: [
        'Massive tree-planting campaigns across degraded lands with focus on native species',
        'Promotion of solar energy and biogas technologies for clean cooking and lighting',
        'Training farmers in sustainable agriculture practices and climate-smart farming',
        'Community education on climate resilience and adaptation strategies',
        'Partnership with government on environmental policy advocacy',
      ],
      outcomes: [
        'Restoration of degraded ecosystems',
        'Reduced carbon emissions and improved air quality',
        'Enhanced food security through sustainable farming',
        'Improved livelihoods through green jobs creation',
      ],
    },
    {
      id: 2,
      title: 'Health & Wellness Program',
      image: '/images/program-health.png',
      icon: Heart,
      overview: 'Providing accessible, quality healthcare and wellness education to underserved communities.',
      focus: 'Healthcare access, maternal & child health, health education, disease prevention',
      impact: '50,000+ health consultations | 100,000+ beneficiaries | 15+ health camps',
      details: [
        'Mobile health clinics bringing medical services to remote communities',
        'Maternal and child health programs with focus on reducing preventable deaths',
        'Health worker training and community health volunteer programs',
        'Disease prevention campaigns (malaria, tuberculosis, HIV/AIDS)',
        'Mental health support and psychosocial counseling services',
      ],
      outcomes: [
        'Improved health outcomes and reduced disease burden',
        'Increased health awareness and preventive practices',
        'Strengthened local health systems and capacity',
        'Empowered community health workers and champions',
      ],
    },
    {
      id: 3,
      title: 'Education & Empowerment Program',
      image: '/images/program-education.png',
      icon: BookOpen,
      overview: 'Empowering youth through quality education, scholarships, and skills development.',
      focus: 'Scholarships, vocational training, mentorship, educational infrastructure',
      impact: '500+ scholarships awarded | 5,000+ youth trained | 100% transition rate',
      details: [
        'Full and partial scholarship programs for deserving but disadvantaged students',
        'Vocational and skills training in high-demand sectors',
        'Mentorship programs connecting youth with professionals and role models',
        'Support for school infrastructure and learning materials',
        'Career guidance and job placement assistance',
      ],
      outcomes: [
        'Increased school enrollment and completion rates',
        'Improved educational quality and student performance',
        'Enhanced employment prospects for youth',
        'Breaking cycles of poverty through education',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={() => setShowDonationModal(true)} />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Programs
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Tackling Kenya&apos;s most pressing challenges through three interconnected pillars of change
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => {
              const Icon = program.icon
              return (
                <div
                  key={program.id}
                  className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-primary w-6 h-6" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      {program.overview}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {program.impact}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      {programs.map((program, index) => {
        const Icon = program.icon
        return (
          <section
            key={program.id}
            className={`py-16 px-6 md:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                {/* Text Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-primary w-8 h-8" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-lg text-foreground/70 mb-6">
                    {program.overview}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Program Focus Areas</h3>
                    <p className="text-foreground/70 text-lg">{program.focus}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Activities</h3>
                    <ul className="space-y-3">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground/70">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Expected Outcomes</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {program.outcomes.map((outcome, idx) => (
                        <div key={idx} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <p className="text-foreground font-medium text-sm">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-lg font-semibold text-foreground mb-2">Current Impact</p>
                    <p className="text-primary font-bold text-xl">{program.impact}</p>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-96 rounded-lg overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Integration Section */}
      <section className="py-24 px-6 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            How Our Programs Work Together
          </h2>
          <p className="text-xl text-foreground/70 text-center mb-12 max-w-3xl mx-auto">
            Our three core programs are interconnected, creating multiplied impact across communities
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Climate Action</h3>
              <p className="text-foreground/70">Creates jobs, improves health, enables education</p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Health</h3>
              <p className="text-foreground/70">Enables education, supports climate action</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
              <p className="text-foreground/70">Drives climate action, improves health outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Support These Life-Changing Programs
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Your donation directly funds programs that empower communities and create sustainable change
          </p>
          <button
            onClick={() => setShowDonationModal(true)}
            className="inline-block px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-lg transition-colors text-lg"
          >
            Make a Donation
          </button>
        </div>
      </section>

      <Footer onDonateClick={() => setShowDonationModal(true)} />
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
    </main>
  )
}
