import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Taylored Instruction Dashboard",
      year: "2024",
      description: "Developed a business management platform for the operation of my American Red Cross and American Heart Association Training Site. Includes detailed resources for instructors, self-serve certification ordering, and a comprehensive dashboard for managing operations.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      status: "Live",
      url: "https://tayloredinstruction.com"
    },
    {
      title: "Kalden AI",
      year: "2025",
      description: "Right now, I am building Kalden, an AI task manager that helps you get things done. Currently, I am focused on students, developing a Canvas integration to automatically import and schedule time for assignments, calendar sync, and a robust scheduling infrastructure.",
      tech: ["Next.js", "OpenAI", "Postgres"],
      status: "In Development",
      url: "https://kalden.ai"
    },
    {
      title: "Personal Portfolio Website",
      year: "2024", 
      description: "Designed and developed a personal portfolio using modern web technologies with focus on performance, accessibility, and clean design. Features responsive layouts and optimized loading.",
      tech: ["SvelteKit", "Tailwind CSS", "JavaScript", "Vercel"],
      status: "Live",
      url: "https://evan-taylor.com"
    }
  ];

  return (
    <div className="container">
      <main className="main-section">
        {/* Header */}
        <h1>Projects</h1>
        <div className="intro">
          <p>
            A collection of software projects spanning web development, machine learning, 
            and business applications. Each project represents exploration of new technologies 
            and problem-solving approaches.
          </p>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <div key={index} className="now-section">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px'}}>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="link"
                style={{marginBottom: '0', textTransform: 'none', letterSpacing: '0', fontSize: '20px', color: 'var(--foreground)', textDecoration: 'none'}}
              >
                {project.title}
              </a>
              <div style={{textAlign: 'right'}}>
                <div style={{color: 'var(--muted)', fontSize: '14px'}}>{project.year}</div>
                <div style={{color: 'var(--muted)', fontSize: '12px', marginTop: '4px'}}>{project.status}</div>
              </div>
            </div>
            
            <p style={{marginBottom: '24px'}}>
              {project.description}
            </p>
            
            <p style={{color: 'var(--muted)', fontSize: '14px'}}>
              {project.tech.join(' • ')}
            </p>
          </div>
        ))}

        {/* Back */}
        <div>
          <p>
            <Link href="/" className="link">← Back to home</Link>
          </p>
        </div>
      </main>
    </div>
  );
} 