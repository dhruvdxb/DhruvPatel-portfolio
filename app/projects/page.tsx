"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const heading = "font-[family-name:var(--font-space-grotesk)]";

const glass =
  "bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_-8px_rgba(0,0,0,0.45)]";

const glassLight =
  "bg-white/[0.05] backdrop-blur-md backdrop-saturate-150 border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]";

const glassButtonPrimary =
  "bg-blue-400/90 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_20px_-4px_rgba(59,130,246,0.45)] text-black hover:bg-blue-300/90 transition-colors duration-200";

const projects = [
  {
    title: "AstraLink",
    desc: "A Kubernetes-based microservices platform built for repeatable, secure deployments — Helm-driven releases with configuration pulled from AWS SSM instead of hardcoded secrets, and Docker/ECR wired straight into the pipeline.",
    tags: ["Kubernetes", "Helm", "AWS SSM", "Docker", "AWS ECR"],
    category: "DevOps",
    status: "Production",
    highlights: [
      "Deployed a microservices architecture on Kubernetes using Helm for scalable, repeatable releases",
      "Managed application configuration securely through AWS SSM Parameter Store instead of hardcoded secrets",
      "Integrated Docker, Kubernetes, and AWS ECR directly into the deployment workflow",
      "Standardized Kubernetes manifests across services, cutting setup time and improving deployment consistency",
      "Used AI-assisted tooling to speed up Helm chart development and resolve configuration issues faster",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Fusion Data Secure",
    desc: "An enterprise Windows cybersecurity platform delivering secure VPN connectivity and data protection for real clients — built end-to-end from application code to a production-ready installer pipeline.",
    tags: ["C#", "WPF", "VPN", "MSI Installer", "Advanced Installer"],
    category: "Software",
    status: "Production",
    highlights: [
      "Developed enterprise Windows desktop applications for VPN connectivity and data protection in C# and WPF",
      "Built production-ready MSI installers using Advanced Installer for reliable enterprise deployment",
      "Applied AI-assisted tools to accelerate debugging and cut installer testing time",
      "Diagnosed and resolved critical production issues, directly improving application stability for clients",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Portfolio Infrastructure",
    desc: "This site — deployed and operated like production infrastructure, not just pushed to a static host. Nginx reverse proxy, SSL termination, DNS routing, and PM2-managed process supervision on a real AWS EC2 instance.",
    tags: ["AWS EC2", "Nginx", "PM2", "SSL", "DNS"],
    category: "DevOps",
    status: "Live",
    highlights: [
      "Provisioned and deployed the application on a production AWS EC2 instance",
      "Configured Nginx as a reverse proxy with SSL termination for secure traffic routing",
      "Set up DNS routing to connect the domain directly to the deployed instance",
      "Used PM2 for process management, keeping the app running with automatic restarts",
    ],
    github: "",
    demo: "https://dhruvpatel.space",
  },
];

const categories = ["All", "DevOps", "Software"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-500/[0.12] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-blue-500/[0.06] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-5xl mx-auto px-6 pt-8 pb-24">
          {/* HEADER */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-blue-400/60" />
              PROJECTS
            </p>
            <h1 className={`${heading} text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}>
              Things I&apos;ve Built
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-10">
              A Kubernetes microservices platform. An enterprise cybersecurity application.
              The infrastructure running the site you&apos;re looking at right now. Three
              things I built and actually shipped to production.
            </p>
          </motion.div>

          {/* FILTER TABS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-2 mb-12 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? glassButtonPrimary
                    : `text-gray-400 hover:text-white hover:border-white/25 ${glassLight}`
                }`}
              >
                {cat}
                <span className={`ml-2 text-[10px] ${activeCategory === cat ? "text-black/60" : "text-gray-600"}`}>
                  {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl p-5 hover:border-blue-400/30 hover:bg-white/[0.09] transition-all duration-300 flex flex-col group cursor-pointer ${glass}`}
                onClick={() => setExpanded(expanded === project.title ? null : project.title)}
              >
                {/* TOP ROW */}
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      project.category === "DevOps"
                        ? "border-blue-400/30 text-blue-400"
                        : "border-purple-400/30 text-purple-400"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-500">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "Live" ? "bg-blue-400 animate-pulse" : "bg-gray-500"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className={`${heading} text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-200`}>
                  {project.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.desc}</p>

                {/* EXPANDED HIGHLIGHTS */}
                {expanded === project.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 space-y-1.5 border-t border-white/10 pt-4"
                  >
                    {project.highlights.map((h) => (
                      <li key={h} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-blue-400 flex-shrink-0">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] rounded-full px-2 py-0.5 text-gray-400 ${glassLight}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS + EXPAND */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] text-gray-500 hover:text-white transition-colors duration-200"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors duration-200">
                    {expanded === project.title ? "Show less ↑" : "Details ↓"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            {...{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
            }}
            className={`mt-16 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${glass}`}
          >
            <div>
              <p className={`${heading} text-sm font-semibold text-white mb-1`}>Have a project in mind?</p>
              <p className="text-xs text-gray-500">I&apos;m open to new challenges and collaborations.</p>
            </div>
            <a
              href="/contact"
              className={`px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap ${glassButtonPrimary}`}
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/5 max-w-5xl mx-auto px-6 py-8">
          <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        </div>
      </div>
    </main>
  );
}