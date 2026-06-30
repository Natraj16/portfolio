import { useState } from 'react'

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "CMR Institute of Technology",
    badge: "UNDERGRADUATE",
    period: "Sep 2023 – May 2027",
    description: "Relevant Coursework: Data Structures & Algorithms, DBMS, Computer Networks, Operating Systems, Cloud Computing, Artificial Intelligence, Machine Learning, Analysis and Design of Algorithms",
    logo: "/assets/cmrit-logo.png" 
  },
  {
    degree: "High School",
    institution: "St. Michael's High School",
    badge: "HIGH SCHOOL",
    period: "Aug 2021 – Jun 2023",
    description: "Achieved 91% in All India Senior School Certificate Examination (AISSCE).",
    logo: "/assets/smhs-logo.png" 
  }
]

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="education" className="mt-8 font-sans">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Education</h2>
      <p className="text-sm text-muted mt-1.5 mb-2 font-sans">Where I've studied.</p>
      
      <div className="flex flex-col">
        {education.map((edu, idx) => (
          <div key={idx} className="py-6 last:pb-0 border-b border-subtle-border/50 last:border-0 group cursor-pointer hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full overflow-hidden flex items-center justify-center border border-white/10 text-white font-semibold p-1">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  ) : (
                    edu.institution.charAt(0)
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-[14px] font-semibold text-foreground tracking-tight">{edu.institution}</h3>
                    {edu.badge && (
                      <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full border border-subtle-border text-muted uppercase tracking-wider">
                        {edu.badge}
                      </span>
                    )}
                    {edu.description && (
                      <svg className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                  <p className="text-[14px] text-muted-deep font-sans">{edu.degree}</p>
                </div>
              </div>
              <div className="text-sm text-muted-deep font-sans hidden sm:block">
                {edu.period}
              </div>
            </div>

            {/* Expanded content */}
            {edu.description && (
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="pl-[4.25rem] pr-4 pb-2">
                  <p className="text-[14px] text-muted-deep leading-relaxed font-sans">
                    {edu.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

