import { useState } from 'react'

const experiences = [
  {
    role: "Software Developer Intern",
    company: "P&J Infra",
    badge: "INTERNSHIP",
    period: "Aug 2025 – Nov 2025",
    description: "Engineered a role-based admin dashboard using React.js, JavaScript, and TailwindCSS, integrating RESTful APIs for full CRUD functionality.\n\nArchitected reusable React components for user authentication and secure data flow; collaborated on scalable backend design using MongoDB and Firebase.",
    logo: "/assets/pj-infra.jpg"
  }
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="experience" className="mt-8 font-sans">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Experience</h2>
      <p className="text-sm text-muted mt-1.5 mb-2 font-sans">Where I've worked and contributed.</p>
      
      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <div key={idx} className="py-6 last:pb-0 border-b border-subtle-border/50 last:border-0 group cursor-pointer hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full overflow-hidden flex items-center justify-center border border-white/10 text-white font-semibold">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  ) : (
                    exp.company.charAt(0)
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-[14px] font-semibold text-foreground tracking-tight">{exp.company}</h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full border border-subtle-border text-muted uppercase tracking-wider">
                        {exp.badge}
                      </span>
                    )}
                    <svg className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-[14px] text-muted-deep font-sans">{exp.role}</p>
                </div>
              </div>
              <div className="text-sm text-muted-deep font-sans hidden sm:block">
                {exp.period}
              </div>
            </div>

            {/* Expanded content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="pl-[4.25rem] pr-4 pb-2">
                <ul className="text-[14px] text-muted-deep leading-relaxed list-disc space-y-2 ml-4 font-sans">
                  {exp.description.split('\n\n').map((para, i) => (
                    <li key={i}>{para}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
