export default function TechStack() {
  const techs = [
    { name: "Java", slug: "java/java-original.svg", color: "#ED8B00" },
    { name: "Python", slug: "python/python-original.svg", color: "#3776AB" },
    { name: "FastAPI", slug: "fastapi/fastapi-original.svg", color: "#009688" },
    { name: "Spring Boot", slug: "spring/spring-original.svg", color: "#6DB33F" },
    { name: "JavaScript", slug: "javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "React", slug: "react/react-original.svg", color: "#61DAFB" },
    { name: "Node.js", slug: "nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Express", slug: "express/express-original.svg", color: "#FFFFFF", invert: true },
    { name: "MySQL", slug: "mysql/mysql-original.svg", color: "#4479A1" },
    { name: "MongoDB", slug: "mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "Git", slug: "git/git-original.svg", color: "#F05032" },
    { name: "GitHub", slug: "github/github-original.svg", color: "#FFFFFF", invert: true },
    { name: "Postman", customIcon: "https://cdn.simpleicons.org/postman/FF6C37", color: "#FF6C37" },
    { name: "Flask", slug: "flask/flask-original.svg", color: "#FFFFFF", invert: true },
    { name: "Django", slug: "django/django-plain.svg", color: "#092E20", invert: true },
    { name: "Tailwind", slug: "tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "AWS", slug: "amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900", invert: false }
  ];

  return (
    <section id="tech-stack" className="mt-8">
      <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted-deep font-sans">Tech Stack</h2>
      <p className="text-sm text-muted mt-1.5 mb-8 font-mono">The tools behind my builds.</p>
      
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <div 
            key={tech.name} 
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border transition-all hover:scale-105"
            style={{ 
              borderColor: `${tech.color}40`, 
              backgroundColor: `${tech.color}15` 
            }}
          >
            <img 
              src={tech.customIcon || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}`} 
              alt={tech.name} 
              className="w-4 h-4 object-contain"
              style={tech.invert ? { filter: 'brightness(0) invert(1)' } : {}}
            />
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
