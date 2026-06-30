import { useState } from 'react'

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "CMR Institute of Technology",
    period: "2021 - 2025",
    description: "Focusing on software engineering, AI/ML, and full-stack development.",
  }
]

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="education" className="mt-8">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Education</h2>
      <p className="text-sm text-muted mt-1.5 mb-8 font-mono">Where I've studied.</p>
      
      <div className="flex flex-col gap-6">
        {education.map((edu, idx) => (
          <div key={idx} className="border border-subtle-border rounded-xl p-6 bg-subtle-bg-2">
            <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
            <p className="text-sm text-accent font-mono mb-4">{edu.institution} • {edu.period}</p>
            <p className="text-sm text-muted leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
