'use client'

import Image from 'next/image'
import { Leaf, Heart, BookOpen } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Climate Action',
      description: 'Combating environmental degradation through sustainable practices, reforestation initiatives, and community-led conservation efforts.',
      icon: Leaf,
      image: '/images/program-climate.png',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 2,
      title: 'Health Initiatives',
      description: 'Improving community wellness through accessible healthcare programs, medical outreach, and preventative health education.',
      icon: Heart,
      image: '/images/program-health.png',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      id: 3,
      title: 'Education Programs',
      description: 'Empowering the next generation with quality education, scholarships, and skills training for sustainable career development.',
      icon: BookOpen,
      image: '/images/program-education.png',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ]

  return (
    <section id="programs" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Our Core Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We tackle Kenya&apos;s most pressing challenges across three interconnected pillars.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.id}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`${program.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                    <Icon className={`${program.color} w-7 h-7`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed mb-6 grow">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-2 transition-transform w-fit"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
