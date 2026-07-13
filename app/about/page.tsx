"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const heading = "font-[family-name:var(--font-space-grotesk)]";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─────────────────────────────────────────────
// GLASS STYLE TOKENS (matches homepage)
// ─────────────────────────────────────────────

const glass =
  "bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_-8px_rgba(0,0,0,0.45)]";

const glassButtonPrimary =
  "bg-blue-400/90 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_20px_-4px_rgba(59,130,246,0.45)] text-black hover:bg-blue-300/90 transition-colors duration-200";

const glassButtonSecondary =
  "bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-gray-200 hover:border-white/30 hover:text-white transition-colors duration-200";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const journey = [
  {
    year: "2019",
    title: "Started M.Sc. in Information Technology",
    desc: "Joined Veer Narmad South Gujarat University. Got first real exposure to networks, systems, and programming fundamentals.",
    current: false,
  },
  {
    year: "2024",
    title: "Joined NexTechnologies Labs as DevOps Engineer",
    desc: "Started architecting AWS and Kubernetes infrastructure while also building Windows cybersecurity applications in C# and WPF — infrastructure and software work side by side from day one.",
    current: false,
  },
  {
    year: "2026",
    title: "Wrapped up a two-year run at NexTechnologies Labs",
    desc: "Left having cut Kubernetes pod memory usage ~25% through resource optimization, automated deployments with Helm and CI/CD pipelines, and shipped production cybersecurity tools.",
    current: false,
  },
  {
    year: "Now",
    title: "Open to new opportunities",
    desc: "Deepening expertise in cloud-native architecture and observability while exploring the next role.",
    current: true,
  },
];

const howIWork = [
  {
    title: "Infrastructure as Code",
    desc: "I treat infrastructure the same way I treat software — versioned, reviewed, and automated. Terraform and Helm are my defaults.",
  },
  {
    title: "Reliability first",
    desc: "I obsess over uptime, alerting, and graceful degradation. If something breaks at 2am, I want dashboards and runbooks ready.",
  },
  {
    title: "Automate the boring stuff",
    desc: "Manual steps in a deployment are bugs waiting to happen. I build CI/CD pipelines that make shipping boring in the best way.",
  },
  {
    title: "Security by default",
    desc: "RBAC, least-privilege IAM, encrypted secrets, network policies — not afterthoughts but part of the initial design.",
  },
  {
    title: "Clear communication",
    desc: "I work closely with developers and stakeholders. I write documentation, draw architecture diagrams, and keep everyone aligned.",
  },
  {
    title: "Continuous learning",
    desc: "Cloud-native tooling evolves fast. I stay sharp by reading, building side projects, and going deep on the tools I use daily.",
  },
];

const values = [
  {
    value: "Ownership",
    desc: "I don't hand things off and forget. I see problems through from discovery to resolution, and I take responsibility for what I ship.",
  },
  {
    value: "Simplicity",
    desc: "The best solution is usually the simplest one that works. I avoid over-engineering and keep systems as lean as they can be.",
  },
  {
    value: "Transparency",
    desc: "I believe in open communication — sharing what I know, admitting what I don't, and asking for help when needed.",
  },
  {
    value: "Impact",
    desc: "I want my work to matter. Whether it's shaving seconds off a deploy or preventing an outage, I care about outcomes not just output.",
  },
];

// ─────────────────────────────────────────────
// LAYOUT PRIMITIVES
// ─────────────────────────────────────────────

function GridBackground() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-500/[0.12] rounded-full blur-[140px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-blue-500/[0.06] rounded-full blur-[130px]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...fadeUp(0)}
      className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-6"
    >
      <span className="w-6 h-px bg-blue-400/60" />
      {children}
    </motion.p>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function About() {
  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <GridBackground />

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 pt-8 pb-28">
          {/* ── INTRO ── */}
          <SectionLabel>ABOUT</SectionLabel>

          <motion.h1
            {...fadeUp(0.05)}
            className={`${heading} text-4xl sm:text-5xl font-bold leading-tight mb-10 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}
          >
            Hey, I&apos;m Dhruv
          </motion.h1>

          <motion.div {...fadeUp(0.1)} className={`flex items-start gap-6 mb-20 rounded-2xl p-6 ${glass}`}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-400/10 border border-blue-400/25 flex items-center justify-center">
              <span className={`${heading} text-blue-400 text-lg font-bold`}>DP</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pt-1.5">
              A DevOps Engineer based in Surat, Gujarat, India, who thinks the best infrastructure
              is invisible — reliable, scalable, secure, and never the reason anyone&apos;s phone
              buzzes at 2am.
            </p>
          </motion.div>

          {/* ── WHO I AM ── */}
          <div className="mb-20">
            <SectionLabel>WHO I AM</SectionLabel>
            <motion.div {...fadeUp(0.05)} className={`rounded-2xl p-6 ${glass}`}>
              <p className="text-gray-400 text-sm leading-relaxed">
                I sit at the intersection of writing software and running the systems it lives
                on. I started out shipping code, then got pulled toward the platforms underneath
                it — cloud, containers, pipelines, observability — because I wanted to understand
                not just what ships, but what keeps it standing.
              </p>
            </motion.div>
          </div>

          {/* ── MY JOURNEY ── */}
          <div className="mb-20">
            <SectionLabel>MY JOURNEY</SectionLabel>
            <div className="space-y-0">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 ${
                        item.current
                          ? "bg-blue-400 shadow-[0_0_12px_2px_rgba(96,165,250,0.5)]"
                          : "bg-white/20"
                      }`}
                    />
                    {i < journey.length - 1 && (
                      <span className="w-px flex-1 bg-white/10 my-2" />
                    )}
                  </div>
                  <div className={`${i < journey.length - 1 ? "pb-8" : ""} flex-1`}>
                    <div className={`rounded-2xl p-5 hover:border-blue-400/25 transition-colors duration-300 ${glass}`}>
                      <span className="text-xs text-blue-400 font-bold font-mono">{item.year}</span>
                      <h3 className={`${heading} text-base font-semibold text-white mt-1.5 mb-1.5`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── WHAT I DO & HOW I WORK ── */}
          <div className="mb-20">
            <SectionLabel>WHAT I DO &amp; HOW I WORK</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {howIWork.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.06)}
                  className={`group rounded-2xl p-5 hover:border-blue-400/30 hover:bg-white/[0.09] transition-all duration-300 ${glass}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-400">—</span>
                    <h3 className={`${heading} text-sm font-semibold text-white`}>{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="mb-20">
            <SectionLabel>VALUES &amp; PHILOSOPHY</SectionLabel>
            <div className={`rounded-2xl divide-y divide-white/10 ${glass}`}>
              {values.map((item, i) => (
                <motion.div
                  key={item.value}
                  {...fadeUp(i * 0.06)}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-5"
                >
                  <span className={`${heading} text-blue-400 text-sm font-semibold w-28 flex-shrink-0`}>
                    {item.value}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            {...fadeUp(0)}
            className={`rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ${glass}`}
          >
            <div>
              <p className={`${heading} text-base font-semibold text-white mb-1`}>
                Want to work together?
              </p>
              <p className="text-xs text-gray-500">I&apos;m open to remote and hybrid opportunities.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="/contact" className={`px-5 py-2.5 text-sm font-bold rounded-full ${glassButtonPrimary}`}>
                Get in touch
              </a>
              <a href="/resume" className={`px-5 py-2.5 text-sm rounded-full ${glassButtonSecondary}`}>
                View resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        </div>
      </div>
    </main>
  );
}