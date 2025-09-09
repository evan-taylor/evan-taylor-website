import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <main className="main-section">
        {/* Header */}
        <h1>Evan Taylor</h1>
        <div className="intro">
          <p>
            Computer Science student at Cal Poly, San Luis Obispo. Passionate
            about software development, cybersecurity, and building meaningful
            digital experiences. Founded{" "}
            <a
              className="link"
              href="https://tayloredinstruction.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Taylored Instruction LLC
            </a>
            , an American Red Cross and American Heart Association Training
            Site, and{" "}
            <a
              className="link"
              href="https://taylorlabs.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              Taylor Labs
            </a>
            , a company focused on developing innovative solutions and beautiful
            websites.
          </p>
        </div>

        {/* About */}
        <div className="now-section">
          <h2>
            <Link className="link" href="/about">
              About
            </Link>
          </h2>
          <p>
            I&apos;ve been passionate about computers and programming since
            elementary school, and I taught myself to code in 6th grade.
            Currently studying Computer Science, plus a minor in
            Entrepreneurship.
          </p>
          <p>
            Beyond academics, I&apos;m an entrepreneur and very involved in the
            aquatics and medical training industries. Through Taylored
            Instruction, I combine my technical skills with leadership and
            industryexperience, teaching all sorts of medical and aquatic
            courses across the PNW.
          </p>
        </div>

        {/* Work */}
        <div className="now-section">
          <h2>
            <Link className="link" href="/projects">
              Work
            </Link>
          </h2>
          <p>
            <a
              className="link"
              href="https://hovn.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Hovn
            </a>{" "}
            — Software Development Intern. Developing medical training
            registration and automation platform.
          </p>
          <p>
            <a
              className="link"
              href="https://manageinc.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Manage Inc
            </a>{" "}
            — Intern. Building mobile app for IBM Series i integration with
            authentication and push notifications.
          </p>
          <p>
            <a
              className="link"
              href="https://tayloredinstruction.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Taylored Instruction
            </a>{" "}
            — Created business management platform for my training site
            operations.
          </p>
        </div>

        {/* Skills & Interests */}
        <div className="now-section">
          <h2>Currently</h2>
          <p>
            Developing skills in web development, software development, and
            security. Working with JavaScript, React, Python, and exploring
            privacy-focused technologies.
          </p>
          <p>
            Learning algorithms, data structures, and systems programming at Cal
            Poly while building real-world applications and running my training
            business.
          </p>
        </div>

        {/* Connect */}
        <div>
          <h2>Connect</h2>
          <p>
            <a className="link" href="mailto:evan@evan-taylor.com">
              evan@evan-taylor.com
            </a>
          </p>
          <p>
            <a
              className="link"
              href="https://github.com/evan-taylor"
              rel="noopener"
              target="_blank"
            >
              GitHub
            </a>{" "}
            —{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/evan-l-taylor/"
              rel="noopener"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            —{" "}
            <a
              className="link"
              href="https://twitter.com/evantaylor1104"
              rel="noopener"
              target="_blank"
            >
              Twitter
            </a>
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "14px",
              marginTop: "16px",
            }}
          >
            San Luis Obispo, CA / Vancouver, WA
          </p>
        </div>
      </main>
    </div>
  );
}
