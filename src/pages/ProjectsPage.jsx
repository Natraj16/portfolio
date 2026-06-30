import { useEffect } from 'react'
import { projects, ProjectCard } from '../components/Projects'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="w-full max-w-6xl mx-auto px-6 pb-12 pt-8 relative min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">All Projects</h1>
          <p className="text-muted font-mono text-sm max-w-2xl">
            A complete collection of my technical projects, featuring web applications, AI integrations, and full-stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
