"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

const heading = "font-[family-name:var(--font-space-grotesk)]";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const stats = [
  { label: "Status", value: "Open to Work", sub: "Immediate Joiner" },
  { label: "Location", value: "India", sub: "GMT+5:30 · Remote / Hybrid" },
  { label: "Focus", value: "Software Engineering & DevOps", sub: "Kubernetes · AWS · CI/CD" },
];

const whatIDo = [
  {
    no: "01",
    title: "Cloud Infrastructure",
    desc: "I architect and manage production AWS environments — EC2, VPC, IAM, S3, CloudFront. Infrastructure that scales quietly and fails gracefully.",
  },
  {
    no: "02",
    title: "Kubernetes & Containers",
    desc: "From cluster setup to RBAC and Helm chart maintenance — I run containerized workloads that are efficient, secure, and observable.",
  },
  {
    no: "03",
    title: "CI/CD & Automation",
    desc: "GitHub Actions, Jenkins, ArgoCD. I build pipelines that take code from commit to production without manual steps or surprises.",
  },
  {
    no: "04",
    title: "Observability",
    desc: "Prometheus metrics, Grafana dashboards, production alerting. If something breaks, I want to know before users do.",
  },
  {
    no: "05",
    title: "Software Engineering",
    desc: "C#, Go, Rust. I've built enterprise Windows apps and cybersecurity tools. I understand the code that runs on the infrastructure I manage.",
  },
];

const skillGroups = [
  { category: "Cloud", items: ["AWS EC2", "S3", "CloudFront", "IAM", "VPC"] },
  { category: "Containers", items: ["Kubernetes", "Docker", "Helm"] },
  { category: "CI/CD", items: ["GitHub Actions", "Jenkins", "ArgoCD"] },
  { category: "Infrastructure", items: ["Terraform", "Nginx", "Linux", "Git"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "CloudWatch"] },
  { category: "Languages", items: ["C#", "Go", "Rust", "Bash"] },
];

const projects = [
  {
    title: "AstraLink",
    desc: "Microservices on Kubernetes with Helm orchestration and AWS SSM config management.",
    tags: ["Kubernetes", "Helm", "AWS"],
    status: "Production",
  },
  {
    title: "Fusion Data Secure",
    desc: "Enterprise Windows cybersecurity platform — VPN access, data protection, MSI deployment.",
    tags: ["C#", "WPF", "MSI"],
    status: "Production",
  },
  {
    title: "Observability Stack",
    desc: "Full Prometheus + Grafana monitoring setup with custom dashboards and alerting.",
    tags: ["Prometheus", "Grafana", "K8s"],
    status: "Production",
  },
  {
    title: "Portfolio Infrastructure",
    desc: "This site — AWS EC2, Nginx reverse proxy, SSL, DNS routing, PM2 process management.",
    tags: ["AWS", "Nginx", "PM2"],
    status: "Live",
  },
];

const experience = [
  {
    role: "DevOps Engineer",
    company: "NEXtech",
    period: "Oct 2025 – May 2026",
    location: "Remote · Bangalore",
    desc: "Architecting cloud infrastructure on AWS, managing Kubernetes clusters, and building CI/CD automation at scale.",
    current: true,
  },
  {
    role: "Software Engineer",
    company: "Intelxlabs",
    period: "Aug 2024 – Sep 2025",
    location: "Surat, India",
    desc: "Built enterprise cybersecurity applications in C# and WPF. Shipped Fusion VPN and Data Privacy Protection tools.",
    current: false,
  },
];

const terminalLines = [
  { type: "cmd", text: "kubectl get pods -n production" },
  { type: "out", text: "api-gateway-7d9f8b     1/1   Running" },
  { type: "out", text: "worker-queue-6c4a2d    1/1   Running" },
  { type: "cmd", text: "terraform apply" },
  { type: "ok", text: "✓ Apply complete — 12 resources added" },
  { type: "cmd", text: "./deploy.sh --env=production" },
  { type: "ok", text: "✓ Build passed" },
  { type: "ok", text: "✓ Tests passed" },
  { type: "ok", text: "✓ Deployed to production" },
];

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  );
}

function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// DECORATIVE / LAYOUT PRIMITIVES
// ─────────────────────────────────────────────

function GridBackground() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/[0.14] rounded-full blur-[140px]" />
      <div className="absolute top-[35%] right-[-12%] w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[140px]" />
      <div className="absolute bottom-[5%] left-[-10%] w-[450px] h-[450px] bg-blue-400/[0.06] rounded-full blur-[130px]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...fadeUp(0)}
      className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-4"
    >
      <span className="w-6 h-px bg-blue-400/60" />
      {children}
    </motion.p>
  );
}

function TerminalWindow() {
  return (
    <motion.div
      {...fadeUp(0.3)}
      className="relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(96,165,250,0.25)] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[10px] text-gray-500 font-mono">production — zsh</span>
      </div>
      <div className="p-5 font-mono text-[11px] leading-relaxed space-y-1.5 min-h-[260px]">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
          >
            {line.type === "cmd" && (
              <p>
                <span className="text-blue-400">$</span>{" "}
                <span className="text-gray-200">{line.text}</span>
              </p>
            )}
            {line.type === "out" && <p className="text-gray-500 pl-3">{line.text}</p>}
            {line.type === "ok" && <p className="text-green-400 pl-3">{line.text}</p>}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-1.5 h-3.5 bg-blue-400 translate-y-0.5"
        />
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, sub, delay }: { label: string; value: string; sub: string; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 hover:border-blue-400/30 transition-colors duration-300"
    >
      <p className="text-[11px] text-gray-500 tracking-widest mb-2">{label}</p>
      <p className={`${heading} text-base text-white font-semibold mb-1`}>{value}</p>
      <p className="text-xs text-gray-500">{sub}</p>
    </motion.div>
  );
}

function DoCard({ no, title, desc, delay }: { no: string; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="group rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all duration-300"
    >
      <span className="text-xs font-mono text-blue-400/70">{no}</span>
      <h3 className={`${heading} text-base font-semibold text-white mt-2 mb-2`}>{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function SkillGroupCard({ category, items, delay }: { category: string; items: string[]; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-blue-400/30 transition-colors duration-300"
    >
      <p className="text-[11px] text-blue-400 tracking-widest mb-3 font-semibold">{category}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="text-[11px] text-gray-400 border border-white/10 rounded-full px-2.5 py-1 hover:text-white hover:border-white/25 transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  status,
  delay,
}: {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  delay: number;
}) {
  return (
    <motion.a
      href="/projects"
      {...fadeUp(delay)}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col hover:border-blue-400/30 hover:bg-white/[0.04] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className={`${heading} text-base font-semibold group-hover:text-blue-400 transition-colors duration-200`}>
          {title}
        </h3>
        <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
          <span className={`w-1.5 h-1.5 rounded-full ${status === "Live" ? "bg-blue-400 animate-pulse" : "bg-gray-600"}`} />
          <span className="text-[10px] text-gray-500">{status}</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-white/10 rounded px-2 py-0.5 text-gray-500">
              {tag}
            </span>
          ))}
        </div>
        <IconArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </div>
    </motion.a>
  );
}

function TimelineItem({
  role,
  company,
  period,
  location,
  desc,
  current,
  isLast,
  delay,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  desc: string;
  current: boolean;
  isLast: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <span
          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
            current ? "bg-blue-400 shadow-[0_0_12px_2px_rgba(96,165,250,0.5)]" : "bg-white/20"
          }`}
        />
        {!isLast && <span className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className="flex-1 pb-10">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-blue-400/20 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
            <h3 className={`${heading} text-base font-semibold text-white`}>{role}</h3>
            <span className="text-xs text-gray-500 font-mono">{period}</span>
          </div>
          <p className="text-blue-400 text-xs mb-1">{company}</p>
          <p className="text-gray-600 text-xs mb-3">{location}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <GridBackground />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-28 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3 py-1.5 mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
              </span>
              <span className="text-[11px] text-gray-400 tracking-widest">AVAILABLE FOR WORK · REMOTE / HYBRID</span>
            </motion.div>

            <motion.p {...fadeUp(0.05)} className="text-gray-500 text-sm mb-3">
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className={`${heading} text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}
            >
              Dhruv Patel
            </motion.h1>

            <motion.p {...fadeUp(0.18)} className="text-blue-400 text-lg font-medium mb-4">
              DevOps Engineer <span className="text-gray-600">·</span> Cloud Infrastructure Engineer
            </motion.p>

            <motion.p {...fadeUp(0.24)} className="text-gray-500 text-base leading-relaxed max-w-md mb-10">
              I build and run infrastructure that scales quietly and fails gracefully — Kubernetes, AWS, and
              CI/CD pipelines that take code from commit to production without surprises.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3">
              <a
                href="/projects"
                className="bg-blue-400 text-black px-5 py-2.5 text-sm font-bold rounded-lg hover:bg-blue-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                View Projects
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 border border-white/15 text-gray-300 px-5 py-2.5 text-sm rounded-lg hover:border-white/30 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <IconDownload className="w-3.5 h-3.5" />
                Download Resume
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <IconGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/dhruv-patel-164118268"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <IconLinkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <TerminalWindow />
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <SectionLabel>ABOUT</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {stats.map((item, i) => (
              <StatCard key={item.label} {...item} delay={i * 0.08} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatIDo.map((item, i) => (
              <DoCard key={item.no} {...item} delay={i * 0.07} />
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <SectionLabel>TECH STACK</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <SkillGroupCard key={group.category} {...group} delay={i * 0.06} />
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <SectionLabel>EXPERIENCE</SectionLabel>
          <div className="max-w-2xl">
            {experience.map((exp, i) => (
              <TimelineItem key={exp.company} {...exp} isLast={i === experience.length - 1} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="flex justify-between items-end mb-10">
            <SectionLabel>FEATURED PROJECTS</SectionLabel>
            <a
              href="/projects"
              className="text-xs text-gray-500 hover:text-white transition-colors duration-200 mb-4"
            >
              All projects →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} delay={i * 0.08} />
            ))}
          </div>
        </section>

        {/* ── RESUME CTA ── */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
          <motion.div
            {...fadeUp(0)}
            className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent backdrop-blur-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <h2 className={`${heading} text-xl font-semibold text-white mb-2`}>Want the full picture?</h2>
              <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                My resume covers infrastructure decisions, metrics, and outcomes in more technical detail.
              </p>
            </div>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 bg-blue-400 text-black px-5 py-2.5 text-sm font-bold rounded-lg hover:bg-blue-300 transition-colors duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              <IconDownload className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </motion.div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center border-t border-white/5">
          <motion.div {...fadeUp(0)}>
            <SectionLabel>
              <span className="mx-auto">GET IN TOUCH</span>
            </SectionLabel>
            <h2 className={`${heading} text-3xl sm:text-4xl font-bold mb-4`}>Let&apos;s build something together</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Whether it&apos;s a DevOps role, a freelance infrastructure project, or just a conversation —
              I&apos;m always open to hearing about interesting opportunities.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-blue-400 text-black px-6 py-3 text-sm font-bold rounded-lg hover:bg-blue-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                Get in touch
              </a>
              <a
                href="mailto:dhruvmpatel170301@gmail.com"
                className="border border-white/15 text-gray-300 px-6 py-3 text-sm rounded-lg hover:border-white/30 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                dhruvmpatel170301@gmail.com
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2026 Built By Dhruv Patel</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="mailto:dhruvmpatel170301@gmail.com" className="hover:text-white transition-colors duration-200">
              Email
            </a>
            <a
              href="https://linkedin.com/in/dhruv-patel-164118268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a href="/resume" className="hover:text-white transition-colors duration-200">
              Resume
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}