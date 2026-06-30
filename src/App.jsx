import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import GithubStreak from './components/GithubStreak'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative z-0">
      <div className="glow-bg"></div>

      <nav aria-label="Main navigation" className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm font-mono z-50 relative">
        <Link className="text-sm text-muted hover:text-accent transition-colors" to="/" onClick={closeMenu}>Natraj Kashyap</Link>
        
        <div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-md">
          <Link className="rounded-md px-2.5 py-1.5 transition-colors bg-subtle-bg border border-subtle-border text-accent" to="/">Home</Link>
          <Link className="rounded-md px-2.5 py-1.5 transition-colors text-muted-deep hover:text-accent" to="/projects">Projects</Link>
          <a className="rounded-md px-2.5 py-1.5 transition-colors text-muted-deep hover:text-accent" href="/#tech-stack">Tech Stack</a>
          <a className="rounded-md px-2.5 py-1.5 transition-colors text-muted-deep hover:text-accent" href="/#experience">Experience</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full border border-border hover:border-border-hover flex items-center justify-center transition-all duration-300 bg-subtle-bg"
            aria-label="Switch theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-muted-deep" />
            ) : (
              <Moon className="w-4 h-4 text-muted-deep" />
            )}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-9 h-9 rounded-md border border-border hover:border-border-hover flex items-center justify-center transition-all duration-300 bg-subtle-bg text-foreground"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-muted-deep" />
            ) : (
              <Menu className="w-4 h-4 text-muted-deep" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-40 px-6 py-6 flex flex-col gap-6 font-mono shadow-lg">
          <Link onClick={closeMenu} className="text-foreground hover:text-accent transition-colors text-base" to="/">Home</Link>
          <Link onClick={closeMenu} className="text-foreground hover:text-accent transition-colors text-base" to="/projects">Projects</Link>
          <a onClick={closeMenu} className="text-foreground hover:text-accent transition-colors text-base" href="/#tech-stack">Tech Stack</a>
          <a onClick={closeMenu} className="text-foreground hover:text-accent transition-colors text-base" href="/#experience">Experience</a>
        </div>
      )}

      <Routes>
        <Route path="/" element={
          <main className="w-full max-w-6xl mx-auto px-6 pb-12 relative">
            <Hero />
            <div className="max-w-3xl mx-auto px-6">
              <Experience />
              <Education />
              <TechStack />
              <GithubStreak theme={theme} />
              <Projects />
            </div>
          </main>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
