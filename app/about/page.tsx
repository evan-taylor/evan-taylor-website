import Link from "next/link";

export default function About() {
  const timeline = [
    {
      year: "2024",
      title: "Cal Poly San Luis Obispo",
      description:
        "Currently pursuing Bachelor's in Computer Science and a minor in Entrepreneurship.",
    },
    {
      year: "2024",
      title: "Clark College",
      description:
        "Completed computer science foundation coursework in Python, C, HTML/CSS, and JavaScript. All credits transferred to Cal Poly.",
    },
    {
      year: "2024",
      title: "Hockinson High School",
      description:
        "Graduated in 2024. I was a captain of the boys varsity swim team and member of the varsity golf team. Active in Future Business Leaders of America and National Honor Society.",
    },
    {
      year: "2023",
      title: "Taylored Instruction LLC",
      description:
        "Founded American Red Cross and AHA Training Site. Teaching CPR & Lifeguard certification courses.",
    },
  ];

  return (
    <div className="container">
      <main className="main-section">
        {/* Header */}
        <h1>About</h1>
        <div className="intro">
          <p>
            Hi, I&apos;m Evan. I&apos;ve been passionate about computers and
            programming since elementary school. My journey has taken me from
            teaching myself how to code in 6th grade to founding Taylored
            Instruction LLC, where I combine my technical skills with leadership
            and industry experience.
          </p>
        </div>

        {/* Background */}
        <div className="now-section">
          <h2>Background</h2>
          <p>
            I started programming in 6th grade and have been fascinated by the
            intersection of technology and human experience ever since.
            Currently studying Computer Science at Cal Poly San Luis Obispo with
            a focus on entrepreneurship.
          </p>
          <p>
            Beyond academics, I&apos;m an entrepreneur and leader. As a former
            varsity swim team captain and founder of a Red Cross Training Site,
            I&apos;ve learned the importance of combining technical skills with
            strong communication and leadership abilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="now-section">
          <h2>Timeline</h2>
          {timeline.map((item, index) => (
            <div key={index} style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "var(--foreground)",
                  }}
                >
                  {item.title}
                </h3>
                <span style={{ color: "var(--muted)", fontSize: "14px" }}>
                  {item.year}
                </span>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="now-section">
          <h2>Current Focus</h2>
          <p>
            I&apos;m currently developing skills in machine learning, web
            development, and cybersecurity. My coursework includes algorithms,
            data structures, and systems programming, while my personal projects
            explore full-stack development and data analysis. I am also learning
            about entrepreneurship, and I am currently working on a project to
            help students get things done.
          </p>
          <p>
            Through Taylored Instruction, I&apos;m learning valuable lessons
            about running a business, managing operations, and building
            relationships with clients and partners.
          </p>
        </div>

        {/* Back Navigation */}
        <div>
          <p>
            <Link className="link" href="/">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
