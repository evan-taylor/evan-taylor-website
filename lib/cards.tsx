import React from "react";

export interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: React.ReactNode;
  color: string;
  textColor?: string;
}

export const cards: CardData[] = [
  {
    id: "intro",
    title: "Evan Taylor",
    subtitle: "Engineer, Entrepreneur & Leader",
    description:
      "Building the future of digital experiences at the intersection of code and business.",
    color: "#171717", // Neutral-900
    textColor: "#ffffff",
    longDescription: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-200">
          I&apos;m a Computer Science student at Cal Poly, San Luis Obispo,
          driven by a passion for
          <span className="text-blue-400 font-semibold">
            {" "}
            scalable software
          </span>
          ,<span className="text-blue-400 font-semibold"> great design</span>,
          and
          <span className="text-blue-400 font-semibold">
            {" "}
            entrepreneurial innovation
          </span>
          .
        </p>
        <p className="text-gray-300 leading-relaxed">
          My goal is to bridge the gap between technical complexity and
          user-centric design. Whether I&apos;m working on a full-stack
          application or managing business operations, I focus on creating
          systems that are efficient, secure, and delightful to use.
        </p>
        <div className="pt-4 border-t border-white/10">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Founder of
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              className="group block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"
              href="https://www.tayloredinstruction.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                Taylored Instruction
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Medical Training Company
              </p>
            </a>
            <a
              className="group block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5"
              href="https://taylorlabs.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                Taylor Labs
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Web & Software Solutions
              </p>
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "work",
    title: "Impact",
    subtitle: "Professional Experience",
    description:
      "Delivering high-quality software solutions and managing operations.",
    color: "#262626", // Neutral-800
    textColor: "#ffffff",
    longDescription: (
      <div className="space-y-10">
        {[
          {
            title: "Software Development Intern",
            company: "Hovn",
            year: "Current",
            desc: "Working on full-stack development for a medical training platform. I collaborate directly with founders to architect scalable features using React, Next.js, and Supabase, ensuring a seamless user experience for thousands of users.",
            tech: ["React", "Next.js", "Supabase", "Full-stack"],
            url: "https://hovn.app",
          },
          {
            title: "Software Engineering Intern",
            company: "Manage Incorporated",
            year: "Current",
            desc: "Working on bridging the gap between the IBM i and modern software development.",
            tech: ["IBM i", "Flask", "Apache", "Security"],
            url: "https://manageinc.com",
          },
          {
            title: "Founder & Operator",
            company: "Taylored Instruction LLC",
            year: "Since 2023",
            desc: "Bootstrapped a profitable training business from the ground up. Built custom internal tools to automate business operations.",
            url: "https://tayloredinstruction.com",
          },
        ].map((job, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-baseline mb-2">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                {job.company}
                <span className="text-base font-normal text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </a>
              <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-gray-300 uppercase tracking-wide">
                {job.year}
              </span>
            </div>
            <p className="text-blue-300 font-medium mb-3">{job.title}</p>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              {job.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tech?.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs font-medium text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-200 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "about",
    title: "Journey",
    subtitle: "The Path So Far",
    description: "From exploration to professional experience.",
    color: "#374151", // Gray-700 (darker for better contrast)
    textColor: "#ffffff",
    longDescription: (
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200">
            My journey began in 6th grade with a simple curiosity:{" "}
            <em className="text-gray-400">how do these technologies work?</em>
          </p>
          <p className="text-gray-300">
            That curiosity evolved into teaching myself how to code and
            eventually a formal degree path. I believe the best way to learn is
            by doing, and I am always looking for new challenges to grow my
            skills.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 pl-8 space-y-8 my-8">
          {[
            {
              year: "2027",
              title: "B.S. Computer Science",
              school: "Cal Poly San Luis Obispo",
              desc: "Specializing in Software Engineering & Entrepreneurship.",
            },
            {
              year: "2024",
              title: "Computer Science Foundations",
              school: "Clark College",
              desc: "Mastered web development and software engineering fundamentals.",
            },
            {
              year: "2023",
              title: "Launched Business",
              school: "Taylored Instruction",
              desc: "Founded a certification agency, learning the hard skills of business operations.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-neutral-800 border-2 border-blue-500" />
              <span className="text-sm text-blue-400 font-mono mb-1 block">
                {item.year}
              </span>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{item.school}</p>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "resume",
    title: "Toolkit",
    subtitle: "Skills & Expertise",
    description: "The technologies and tools I use to build.",
    color: "#4b5563", // Gray-600 (darker for better contrast)
    textColor: "#ffffff",
    longDescription: (
      <div>
        <div className="mb-8">
          <a
            href="/Evan%20Taylor.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-lg shadow-white/10"
          >
            <span>Download Resume</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Python",
                "Java",
                "TypeScript",
                "React",
                "Node.js",
                "Next.js",
                "PostgreSQL",
                "C",
                "Git",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-black/20 border border-white/10 p-3 rounded-lg text-center font-medium text-gray-300 hover:border-blue-500/50 transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              Competencies
            </h3>
            <ul className="space-y-3">
              {[
                "Full-Stack Development",
                "Systems Architecture",
                "Project Management",
                "Team Leadership",
                "Business Operations",
                "Public Speaking",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <svg
                    className="text-purple-500 w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "hobbies",
    title: "Lifestyle",
    subtitle: "Life Beyond the Screen",
    description:
      "When I'm not coding or working, I love to be outdoors!",
    color: "#1e40af", // Blue-800 (dark enough for WCAG AA contrast with white)
    textColor: "#ffffff",
    longDescription: (
      <div className="space-y-10">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-white/95 leading-relaxed">
            I&apos;ve always loved being outdoors. It&apos;s a great way to
            disconnect from the digital world and reconnect with nature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">🤿</span>
              <h3 className="text-2xl font-bold text-white">Scuba Diving</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              There&apos;s nothing quite like scuba diving - it&apos;s almost indescribable. Being underwater among the marine life is a fantastic experience that I would encourage everyone to try!
            </p>
          </div>

          <div className="bg-black/20 border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">🏄‍♂️</span>
              <h3 className="text-2xl font-bold text-white">Surfing</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Surfing teaches you patience for sure. But it is a great way to get into the ocean and explore!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black/20 border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⛷️</span>
                <h3 className="text-xl font-bold text-white">Skiing</h3>
              </div>
              <p className="text-white/80 text-sm">
                Skiing is one of my favorite things to do - I just don't get to do it as much as I would like!
              </p>
            </div>
            <div className="bg-black/20 border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">⛳️</span>
                <h3 className="text-xl font-bold text-white">Golfing</h3>
              </div>
              <p className="text-white/80 text-sm">
                A mental puzzle disguised as a sport. But, a great way to have fun outdoors with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "exploring",
    title: "Radar",
    subtitle: "Tech & Tools I Love",
    description:
      "A list of software and platforms that I swear by.",
    color: "#6d28d9", // Violet-700 (darker for better contrast)
    textColor: "#ffffff",
    longDescription: (
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 leading-relaxed">
            I love trying out new tools - it is one of my favorite things. These are some of the products that I love.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Howie",
              desc: "The best AI secretary out there!",
              url: "https://evantaylor.link/howie",
              icon: "📅",
            },
            {
              name: "Superhuman",
              desc: "The fastest email experience ever made - saves a bunch of time.",
              url: "https://evantaylor.link/superhuman",
              icon: "⚡",
            },
            {
              name: "Zed",
              desc: "The best code editor I have ever used.",
              url: "https://evantaylor.link/zed",
              icon: "💻",
            },
            {
              name: "Poke",
              desc: "A lovely and intelligent AI tool over iMessage",
              url: "https://evantaylor.link/poke",
              icon: "🌴",
            },
            {
              name: "Convex",
              desc: "The open-source reactive database for app developers.",
              url: "https://evantaylor.link/convex",
              icon: "💾",
            },
            {
              name: "Zo",
              desc: "Get your very own personal AI server and chat with it.",
              url: "https://evantaylor.link/zo",
              icon: "☁️",
            },
            {
              name: "Beside",
              desc: "The AI assistant that saves me 2+ hours a day.",
              icon: "🤖",
              // We'll use this to detect if it's Beside
              isBeside: true,
            },
          ].map((tool, i) => {
            if (tool.isBeside) {
              return (
                <details
                  key={i}
                  className="group bg-black/20 border border-white/10 rounded-2xl hover:bg-white/10 transition-all overflow-hidden"
                >
                  <summary className="flex items-center gap-4 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">
                          {tool.name}
                        </h3>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-sm">
                          Get 14 Days Free
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-snug">
                        {tool.desc}
                      </p>
                    </div>
                  </summary>
                  <div className="px-4 pb-4 pt-0 pl-[4.5rem]">
                    <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                      <li>
                        <a
                          href="https://evantaylor.link/beside"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Download the app
                        </a>
                      </li>
                      <li>
                        Choose{" "}
                        <strong className="text-white">
                          Someone recommended it
                        </strong>{" "}
                        when asked how you heard about it
                      </li>
                      <li>
                        Enter code{" "}
                        <code className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded font-mono font-bold">
                          qPGXykfX
                        </code>{" "}
                        to unlock the trial
                      </li>
                    </ol>
                  </div>
                </details>
              );
            }

            return (
              <a
                key={i}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-black/20 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 text-sm">
                      ↗
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-snug">
                    {tool.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    id: "connect",
    title: "Connect",
    subtitle: "Let's Work Together",
    description: "Reach out for collaborations or just to say hi.",
    color: "#525252", // Gray-600 (darker for better contrast)
    textColor: "#ffffff",
    longDescription: (
      <div className="flex flex-col items-center text-center py-8">
        <p className="text-2xl font-light text-gray-300 mb-8 max-w-md">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <a
          href="mailto:evan@evntylr.com"
          className="text-3xl md:text-5xl font-bold hover:text-blue-400 transition-all hover:scale-105 mb-12"
        >
          evan@evntylr.com
        </a>

        <div className="flex gap-8">
          {[
            {
              name: "GitHub",
              url: "https://github.com/evan-taylor",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/evan-l-taylor/",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.022 1.825-3.654 3.965-3.654 2.227 0 3.998 1.583 3.998 3.998v8.054h5v-9.355c0-4.42-3.132-7.645-7.646-7.645-3.54 0-5.232 2.42-6.285 4.14v-3.495h-4.968z" />
                </svg>
              ),
            },
            {
              name: "Twitter",
              url: "https://twitter.com/evantaylor1104",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.596-4.782 5.762-4.228-.212-7.973-2.24-10.487-5.313-.437.752-.68 1.628-.68 2.553 0 1.948 1.058 3.655 2.64 4.623-.974-.031-1.874-.301-2.656-.73v.063c0 2.723 1.905 4.99 4.438 5.503-.464.125-.951.192-1.455.192-.358 0-.703-.034-1.04-.098.713 2.235 2.783 3.868 5.237 3.914-1.892 1.482-4.28 2.365-6.874 2.365-.448 0-.89-.026-1.326-.078 2.443 1.565 5.348 2.488 8.484 2.488 10.177 0 15.75-8.438 15.75-15.75 0-.24-.006-.478-.018-.714.943-.68 1.761-1.532 2.41-2.5z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-bold border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-16 font-medium">
          Based in San Luis Obispo, CA & Vancouver, WA
        </p>
      </div>
    ),
  },
];
