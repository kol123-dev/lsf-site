'use client'

import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Lillian Siyoi',
      role: 'Founder & Executive Director',
      bio: 'Visionary leader dedicated to sustainable development and community empowerment across East Africa.',
      image: '/images/team-1.png',
    },
    {
      id: 2,
      name: 'Dr. Samuel Kiprop',
      role: 'Director of Programs',
      bio: 'Environmental scientist with 15+ years of experience in conservation and sustainable agriculture.',
      image: '/images/team-2.png',
    },
    {
      id: 3,
      name: 'Grace Mwangi',
      role: 'Health & Wellness Lead',
      bio: 'Healthcare professional committed to expanding medical access and health education in underserved areas.',
      image: '/images/team-3.png',
    },
    {
      id: 4,
      name: 'James Ochieng',
      role: 'Education Director',
      bio: 'Educator and curriculum developer focused on innovative learning approaches and youth empowerment.',
      image: '/images/team-4.png',
    },
  ]

  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Dedicated professionals driving our mission forward with passion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Image Overlay with Social Links */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-100">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                {/* Name and Role */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
