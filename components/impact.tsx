'use client'

export default function Impact() {
  const stats = [
    {
      number: '50K+',
      label: 'Lives Impacted',
      description: 'Direct beneficiaries across our programs',
    },
    {
      number: '25',
      label: 'Communities',
      description: 'Active partnerships in rural Kenya',
    },
    {
      number: '1.5M',
      label: 'Trees Planted',
      description: 'Environmental restoration projects',
    },
    {
      number: '3,500',
      label: 'Students',
      description: 'Supported through education initiatives',
    },
    {
      number: '95%',
      label: 'Program Efficiency',
      description: 'Funds directly to community programs',
    },
    {
      number: '12',
      label: 'Years',
      description: 'Of sustained impact and growth',
    },
  ]

  return (
    <section id="impact" className="py-24 sm:py-32 bg-secondary/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Measurable Impact
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Numbers tell our story of transformation and lasting change.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 text-center"
            >
              {/* Number */}
              <div className="mb-4">
                <p className="text-4xl sm:text-5xl font-bold text-primary group-hover:text-accent transition-colors">
                  {stat.number}
                </p>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
