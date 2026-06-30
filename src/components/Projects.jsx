import { useState } from 'react'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Github } from './Icons'

export const projects = [
  {
    title: 'Caloriq',
    tech: ['React 19', 'Vite', 'FastAPI', 'SQLAlchemy', 'Redis', 'Gemini API'],
    summary: 'AI-powered nutrition tracking SaaS',
    description: 'Architected and shipped a full-stack AI nutrition tracking SaaS. Implemented a 4-tier LLM cost-control pipeline using Google Gemini API, reducing API overhead while delivering real-time calorie and macronutrient analysis at scale.',
    link: 'https://caloriq-six.vercel.app/',
    github: 'https://github.com/Natraj16/Caloriq',
    image: '/assets/caloriq.png'
  },
  {
    title: 'Invoize',
    tech: ['FastAPI', 'Gradio', 'SQLite', 'Pydantic', 'OpenCV', 'Gemini 2.5 Flash'],
    summary: 'AI invoice and receipt data extraction system',
    description: 'Engineered an AI-powered invoice and receipt data extraction system leveraging Gemini 2.5 Flash vision-LLM, achieving higher accuracy than traditional OCR+LLM pipelines. Designed and deployed a FastAPI REST backend with an interactive Gradio UI.',
    link: 'https://invoize.onrender.com/',
    github: 'https://github.com/Natraj16/Invoize',
    image: '/assets/invoize.png'
  },
  {
    title: 'Manpower Services Platform',
    tech: ['React', 'Tailwind CSS', 'React Router', 'MongoDB', 'Firebase'],
    summary: 'Role-based manpower request management platform',
    description: 'Developed a full-stack responsive web application enabling role-based manpower request management across multiple service categories with real-time admin dashboard and multi-step form workflows.',
    link: 'https://pjinfra.vercel.app/',
    github: 'https://github.com/Natraj16/PJInfra',
    image: '/assets/manpower-services.png'
  },
  {
    title: 'SlotSwapper',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'WebSocket'],
    summary: 'Real-time P2P calendar slot-exchange platform',
    description: 'Built and deployed a real-time P2P calendar slot-exchange platform on the MERN stack with WebSocket notifications, JWT/bcrypt authentication, and multi-tenant group scheduling via invite codes.',
    link: 'https://slot-swapper-one.vercel.app/',
    github: 'https://github.com/Natraj16/SlotSwapper',
    image: '/assets/slotswapper.png'
  }
]

export function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col rounded-2xl border border-subtle-border bg-subtle-bg overflow-hidden hover:border-border-hover transition-all duration-300">
      {project.image && (
        <div className="w-full h-auto border-b border-subtle-border bg-black overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground text-lg font-sans">{project.title}</h3>
        </div>

        <div className="text-sm text-muted mb-6 leading-relaxed font-sans">
          <span>{project.summary}</span>
          {project.description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center p-1 ml-1.5 rounded-full hover:bg-subtle-bg-2 transition-colors text-muted-deep hover:text-accent align-middle"
              aria-label="Toggle details"
            >
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
            {project.description}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 font-mono">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] px-3 py-1 rounded-full border border-border text-muted-deep">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto font-sans text-xs font-medium">
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:bg-subtle-bg-2 hover:border-border-hover transition-colors text-foreground">
            <ExternalLink className="w-3.5 h-3.5 text-muted-deep" />
            Live
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:bg-subtle-bg-2 hover:border-border-hover transition-colors text-foreground">
            <Github className="w-3.5 h-3.5 text-muted-deep" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const displayProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="mt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Featured Projects</h2>
          <p className="text-sm text-muted mt-1.5 font-mono">Things I've built and shipped.</p>
        </div>
        <Link to="/projects" className="text-sm text-accent hover:underline font-mono">Explore More &rarr;</Link>
      </div>

      <div className="flex flex-col gap-6">
        {displayProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
