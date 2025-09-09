import Link from "next/link";

export default function Projects() {
  const work = [
    {
      title: "Software Development Intern - Hovn",
      year: "June 2025 – Present",
      description:
        "Contributed to full-stack development across the Hovn.app platform — building features, fixing bugs, supporting customers, and optimizing code to improve performance and user experience. Collaborated closely with founders to plan and deliver roadmap-driven features.",
      tech: ["React", "Node.js", "PostgreSQL", "Full-stack"],
      status: "Current Role",
      url: "https://hovn.app",
    },
    {
      title: "Intern - Manage Incorporated",
      year: "June 2025 – September 2025",
      description:
        "Developed a mobile app integrating with IBM Series i systems, implementing secure authentication, user management, and a configurable push notification system for urgent events. Built modern mobile solutions interfacing with legacy systems.",
      tech: ["React Native", "IBM i", "Node.js", "Push notifications"],
      status: "Completed",
      url: "https://manageinc.com",
    },
    {
      title: "Founder - Taylored Instruction LLC",
      year: "May 2023 – Present",
      description:
        "Operate an ARC/AHA-authorized training site, building and maintaining scheduling, registration, and certification workflows. Implemented automations (Stripe, email/SMS reminders, roster/checklist tracking, and sub-instructor compliance tracking) to reduce no-shows and streamline enrollment.",
      tech: ["Stripe", "Email/SMS", "Automation", "Operations"],
      status: "Ongoing",
      url: "https://tayloredinstruction.com",
    },
  ];

  return (
    <div className="container">
      <main className="main-section">
        {/* Header */}
        <h1>Work Experience</h1>
        <div className="intro">
          <p>
            A collection of internships, projects, and experiences that have
            shaped my journey in software development. Each represents unique
            challenges and learning opportunities.
          </p>
        </div>

        {/* Work Experience and Projects */}
        {work.map((item, index) => (
          <div key={index} className="now-section">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "16px",
              }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                style={{
                  marginBottom: "0",
                  textTransform: "none",
                  letterSpacing: "0",
                  fontSize: "20px",
                  color: "var(--foreground)",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </a>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "var(--muted)", fontSize: "14px" }}>
                  {item.year}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {item.status}
                </div>
              </div>
            </div>

            <p style={{ marginBottom: "24px" }}>{item.description}</p>

            <p style={{ color: "var(--muted)", fontSize: "14px" }}>
              {item.tech.join(" • ")}
            </p>
          </div>
        ))}

        {/* Back */}
        <div>
          <p>
            <Link href="/" className="link">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
