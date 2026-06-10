'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { TrendingUp, Users, Leaf, Heart, BookOpen, Award } from 'lucide-react'

export default function ImpactPage() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const impactStats = [
    {
      icon: Users,
      number: '100,000+',
      label: 'Lives Positively Impacted',
      description: 'Community members reached through our programs',
      color: 'text-primary',
    },
    {
      icon: Leaf,
      number: '50,000+',
      label: 'Trees Planted',
      description: 'Contributing to forest restoration and carbon sequestration',
      color: 'text-secondary',
    },
    {
      icon: Heart,
      number: '50,000+',
      label: 'Health Consultations Provided',
      description: 'Medical services and health education delivered',
      color: 'text-accent',
    },
    {
      icon: BookOpen,
      number: '500+',
      label: 'Students Scholarshipped',
      description: 'Youth empowered through quality education',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      number: '15+',
      label: 'Health Camps Conducted',
      description: 'Bringing healthcare to remote communities',
      color: 'text-accent',
    },
    {
      icon: Award,
      number: '10+',
      label: 'National & International Awards',
      description: 'Recognition for our sustainable development work',
      color: 'text-secondary',
    },
  ]

  const storyTitles = [
    {
      title: 'Climate Action Results',
      description: 'Our reforestation initiatives have transformed degraded lands into thriving ecosystems',
      metrics: [
        '50,000+ trees planted across 15 counties',
        '5,000+ hectares under active conservation',
        '10,000+ farmers trained in sustainable agriculture',
        '2,000+ households with renewable energy access',
      ],
      impact: 'These efforts have sequestered thousands of tons of carbon, created green jobs, and improved food security for thousands of families.',
    },
    {
      title: 'Health Impact Stories',
      description: 'Healthcare access has transformed communities and saved lives',
      metrics: [
        '50,000+ health consultations provided',
        '100,000+ beneficiaries reached through health camps',
        '5,000+ maternal and child health interventions',
        '500+ trained community health volunteers',
      ],
      impact: 'Preventable diseases have been reduced significantly, maternal mortality has declined, and communities now have better access to essential healthcare services.',
    },
    {
      title: 'Education Transformation',
      description: 'Education has opened doors and changed trajectories',
      metrics: [
        '500+ students awarded scholarships',
        '5,000+ youth trained in vocational skills',
        '1,000+ students transitioned to secondary school',
        '100% job placement rate for vocational graduates',
      ],
      impact: 'Young people from underprivileged backgrounds are now pursuing quality education and securing meaningful employment, breaking cycles of poverty.',
    },
  ]

  const testimonials = [
    {
      name: 'Jane Mutua',
      role: 'Farmer & Mother of 3',
      quote: 'The climate program taught me sustainable farming. My yields have tripled and I can provide better nutrition for my children. The trees planted have also provided firewood, saving us money.',
      impact: 'Joined climate action program',
    },
    {
      name: 'David Kipchoge',
      role: 'Health Volunteer',
      quote: 'Being trained as a health volunteer has given me purpose and skills. I now provide health education in my village and have helped many people access healthcare services.',
      impact: 'Trained as community health worker',
    },
    {
      name: 'Sarah Njoki',
      role: 'Scholarship Recipient',
      quote: 'The scholarship changed my life. I completed secondary school and now I am studying nursing. I want to come back and serve my community.',
      impact: 'Scholarship recipient 2019-2023',
    },
    {
      name: 'John Kiplagat',
      role: 'Village Elder',
      quote: 'Our community has transformed. More children are in school, people are healthier, and our environment is recovering. The foundation truly listens to our needs.',
      impact: 'Community leader & partner',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={() => setShowDonationModal(true)} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:py-36 bg-linear-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transforming lives and communities across Kenya through sustained, measurable action
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            By The Numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <Icon className={`${stat.color} w-12 h-12 mx-auto mb-4`} />
                  <p className={`${stat.color} text-4xl font-bold mb-2`}>
                    {stat.number}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            The Stories Behind The Numbers
          </h2>

          {storyTitles.map((story, index) => (
            <div key={index} className={`mb-16 ${index !== storyTitles.length - 1 ? 'pb-16 border-b border-border' : ''}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {story.title}
              </h3>
              <p className="text-lg text-foreground/70 mb-8">
                {story.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Metrics</h4>
                  <ul className="space-y-3">
                    {story.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-linear-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <p className="text-foreground font-semibold mb-2">Overall Impact</p>
                  <p className="text-foreground/70 leading-relaxed">
                    {story.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Voices From Our Communities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <p className="text-lg text-foreground/80 italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/70 mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {testimonial.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Commitment */}
      <section className="py-16 px-6 md:py-24 bg-linear-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Our Commitment to Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Rigorous Monitoring</h3>
              <p className="text-foreground/70">
                We track all outcomes using scientific methods and community feedback systems
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
              <p className="text-foreground/70">
                We regularly publish impact reports and invite external evaluations of our work
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Improvement</h3>
              <p className="text-foreground/70">
                We adapt programs based on evidence and constantly seek to improve effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:py-24 bg-linear-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Create Impact With Us
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every contribution directly funds programs that create measurable, lasting change in communities
          </p>
          <button
            onClick={() => setShowDonationModal(true)}
            className="inline-block px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-lg transition-colors text-lg"
          >
            See Your Impact
          </button>
        </div>
      </section>

      <Footer onDonateClick={() => setShowDonationModal(true)} />
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
    </main>
  )
}
