export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 text-sm font-sans mt-12 border-t border-subtle-border bg-background transition-colors duration-300 relative z-50">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center px-6">
        <p className="text-muted-deep mb-4 text-[13px]">
          © {currentYear} Developed with <span className="mx-1">🤍</span> by Natraj Kashyap
        </p>
        <div className="flex items-center gap-6 text-muted-deep hover:[&>a]:text-accent transition-colors">
          <a href="https://github.com/Natraj16" target="_blank" rel="noreferrer" className="transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/Natraj16" target="_blank" rel="noreferrer" className="transition-colors">LinkedIn</a>
          <a href="https://x.com/0216_raj" target="_blank" rel="noreferrer" className="transition-colors">Twitter</a>
          <a href="https://medium.com/@natarajkashyap1" target="_blank" rel="noreferrer" className="transition-colors">Medium</a>
        </div>
      </div>
    </footer>
  )
}
