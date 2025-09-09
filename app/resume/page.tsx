import Link from "next/link";

export default function Resume() {
  return (
    <div className="container">
      <main className="main-section">
        {/* Header */}
        <h1>Evan Taylor</h1>
        <div className="intro">
          <p style={{ marginBottom: "8px" }}>
            <a className="link" href="mailto:evan@evntylr.com">
              evan@evntylr.com
            </a>{" "}
            • (360) 904-2901
          </p>
          <p style={{ marginBottom: "16px" }}>
            San Luis Obispo, CA / Vancouver, WA
          </p>
          <p>
            <a
              className="link"
              href="/Evan%20Taylor.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              📄 View PDF Resume
            </a>
          </p>
        </div>

        {/* Summary */}
        <div className="now-section">
          <h2>Summary</h2>
          <p>
            Motivated Computer Science student at California Polytechnic State
            University with a strong foundation in software development. Eager
            to leverage experience in Python, Java, and React to contribute to
            innovative projects in technology. Passionate about user experience
            and efficient UIs. Seeking to apply strong problem-solving skills
            and collaborative mindset to drive impactful solutions while gaining
            hands-on industry experience.
          </p>
        </div>

        {/* Education */}
        <div className="now-section">
          <h2>Education</h2>
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px" }}>
                California Polytechnic State University
              </h3>
              <span style={{ color: "var(--muted)", fontSize: "14px" }}>
                San Luis Obispo, CA
              </span>
            </div>
            <p style={{ margin: "8px 0", fontStyle: "italic" }}>
              Bachelor’s of Science in Computer Science
            </p>
            <p style={{ margin: "8px 0", color: "var(--muted)" }}>
              Expected Graduation: June 2027
            </p>
            <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
              <li>
                Currently pursuing courses in systems programming, algorithms,
                and software development.
              </li>
              <li>Interested in pursuing a minor in Entrepreneurship</li>
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="now-section">
          <h2>Work Experience</h2>

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px" }}>Hovn</h3>
              <span style={{ color: "var(--muted)", fontSize: "14px" }}>
                June 2025 - Present
              </span>
            </div>
            <p style={{ margin: "4px 0", fontStyle: "italic" }}>
              Software Development Intern • Remote
            </p>
            <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
              <li>
                Contributed to full-stack software development, collaborating on
                both front-end and back-end features for the Hovn.app platform.
              </li>
              <li>
                Designed and implemented new features, fixed bugs, met with and
                provided support to customers, and optimized existing code to
                improve user experience and platform performance.
              </li>
              <li>
                Collaborated closely with co-founders and developers to
                strategically plan, prioritize, and deliver key features that
                address customer needs and drive the Hovn.app product roadmap
                forward.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px" }}>
                Manage Incorporated
              </h3>
              <span style={{ color: "var(--muted)", fontSize: "14px" }}>
                June 2025 - September 2025
              </span>
            </div>
            <p style={{ margin: "4px 0", fontStyle: "italic" }}>
              Intern • Remote
            </p>
            <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
              <li>
                Worked on developing a mobile application to enable secure
                integration and communication with IBM Series i systems.
              </li>
              <li>
                Implemented robust authentication protocols and user management
                features to ensure security for customers. Designed and built a
                configurable push notification system to alert users to urgent
                events and updates.
              </li>
              <li>
                Utilized React Native, Node.js, and IBM i technologies to
                deliver a seamless cross-platform experience.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px" }}>
                Taylored Instruction LLC
              </h3>
              <span style={{ color: "var(--muted)", fontSize: "14px" }}>
                May 2023 - Present
              </span>
            </div>
            <p style={{ margin: "4px 0", fontStyle: "italic" }}>
              Founder • Vancouver, WA
            </p>
            <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
              <li>
                Operate an ARC/AHA-authorized training site, building and
                maintaining scheduling, registration, and certification
                workflows that serve public and private classes across WA and
                CA.
              </li>
              <li>
                Implemented automations (Stripe, email/SMS reminders,
                roster/checklist tracking, and sub-instructor compliance
                tracking) to decrease no-shows and support a consistent,
                user-friendly enrollment experience.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="now-section">
          <h2>Skills</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Strong interpersonal and communication skills developed through
              teaching and training experiences
            </li>
            <li>
              Proven leadership in team settings, including managing operations
              and customer service
            </li>
            <li>
              Excellent problem-solving abilities, especially under pressure
            </li>
          </ul>
        </div>

        {/* Back */}
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
