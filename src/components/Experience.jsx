import { useState } from 'react'

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom web applications and SaaS platforms for clients using React, Node.js, and Python.",
  }
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="mt-8">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Experience</h2>
      <p className="text-sm text-muted mt-1.5 mb-8 font-mono">Translating code into industry impact.</p>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border border-subtle-border rounded-xl p-6 bg-subtle-bg-2">
            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-accent font-mono mb-4">{exp.company} • {exp.period}</p>
            <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
