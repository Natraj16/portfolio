import { FileText, Mail, Code } from 'lucide-react'
import { Github, Linkedin, XIcon } from './Icons'

export default function Hero() {
  return (
    <section className="relative mt-12 max-w-3xl mx-auto px-6 font-mono text-foreground">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="relative h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-2xl border border-subtle-border bg-subtle-bg-2 flex items-center justify-center text-4xl font-bold font-sans">
          <img src="/assets/profile.jpg" alt="Natraj Kashyap" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent font-sans">
              Natraj Kashyap
            </h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </span>
          </div>
          <span className="block mt-2 text-base font-normal tracking-normal text-muted-deep font-mono">
            Software Engineer & Full Stack Developer
          </span>
        </div>
      </div>
      
      <p className="mt-8 text-sm leading-[2.2] text-muted font-mono">
        Hi, I'm Natraj Kashyap — a Software Engineer currently pursuing a Bachelor of Engineering in Computer Science and Engineering at CMR Institute of Technology. I am passionate about building AI-powered web applications and full-stack solutions. I primarily work with{' '}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-subtle-border bg-[#3776AB1a] px-1.5 py-0.5 text-xs text-foreground align-middle mx-0.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm text-[10px] font-bold bg-[#3776AB] text-[#FFD43B]">Py</span>Python
        </span>
        ,{' '}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-subtle-border bg-[#61DAFB1a] px-1.5 py-0.5 text-xs text-foreground align-middle mx-0.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm text-[10px] font-bold bg-[#61DAFB] text-black">Re</span>React
        </span>
        , and{' '}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-subtle-border bg-[#0073961a] px-1.5 py-0.5 text-xs text-foreground align-middle mx-0.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm text-[10px] font-bold bg-[#007396] text-white">Ja</span>Java
        </span>
        .
      </p>
      
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-subtle-border bg-subtle-bg-2 px-4 py-2 text-sm text-foreground hover:border-border-hover hover:bg-subtle-bg transition-colors" href="https://drive.google.com/file/d/1GgvVh_VnkeYAfTKZcazwKsSKCDiI07vD/view?usp=sharing">
          <FileText className="h-4 w-4" />
          Resume
        </a>
        <a className="inline-flex items-center gap-2 rounded-md border border-subtle-border bg-subtle-bg-2 px-4 py-2 text-sm text-foreground hover:border-border-hover hover:bg-subtle-bg transition-colors" href="mailto:kashyapnatraj@gmail.com">
          <Mail className="h-4 w-4" />
          Open To Work
        </a>
        <a className="inline-flex items-center gap-2 rounded-md border border-subtle-border bg-subtle-bg-2 px-4 py-2 text-sm text-foreground hover:border-border-hover hover:bg-subtle-bg transition-colors" href="#projects">
          <Code className="h-4 w-4" />
          Projects
        </a>
        <span className="mx-1 h-6 w-px bg-border"></span>
        <a target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-md border border-subtle-border bg-subtle-bg-2 text-muted hover:border-border-hover hover:text-accent hover:bg-subtle-bg transition-colors" href="https://x.com/0216_raj">
          <XIcon className="h-4 w-4" />
        </a>
        <a target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-md border border-subtle-border bg-subtle-bg-2 text-muted hover:border-border-hover hover:text-accent hover:bg-subtle-bg transition-colors" href="https://github.com/Natraj16">
          <Github className="h-4 w-4" />
        </a>
        <a target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-md border border-subtle-border bg-subtle-bg-2 text-muted hover:border-border-hover hover:text-accent hover:bg-subtle-bg transition-colors" href="https://linkedin.com/in/Natraj16">
          <Linkedin className="h-4 w-4" />
        </a>
        <a aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-md border border-subtle-border bg-subtle-bg-2 text-muted hover:border-border-hover hover:text-accent hover:bg-subtle-bg transition-colors" href="mailto:kashyapnatraj@gmail.com">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
