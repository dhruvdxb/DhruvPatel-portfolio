"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "AstraLink",
    desc: "Microservices-based application deployed on Kubernetes using Helm for efficient orchestration with secure configuration management via AWS SSM Parameter Store.",
    tags: ["Kubernetes", "Helm", "AWS SSM", "Microservices", "Docker"],
    category: "DevOps",
    status: "Production",
    highlights: [
      "Deployed microservices architecture on Kubernetes",
      "Used Helm for repeatable and scalable deployments",
      "Implemented secure config management via AWS SSM",
      "Configured ClusterIP networking and AWS ECR integration",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Fusion Data Secure",
    desc: "Windows-based cybersecurity platform providing secure VPN access and data protection for enterprise clients, with production-ready MSI installers.",
    tags: ["C#", "WPF", "VPN", "MSI Installer", "Advanced Installer"],
    category: "Software",
    status: "Production",
    highlights: [
      "Secure VPN access module with encrypted tunneling",
      "Data Privacy Protection with configurable policies",
      "Automated MSI installer pipeline via Advanced Installer",
      "Deployed and maintained across enterprise client environments",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Portfolio Infrastructure",
    desc: "Personal portfolio site deployed on AWS EC2 with Nginx as a reverse proxy, SSL certificate management, DNS routing, and PM2 process management.",
    tags: ["AWS EC2", "Nginx", "PM2", "SSL", "DNS"],
    category: "DevOps",
    status: "Live",
    highlights: [
      "Deployed Next.js app on AWS EC2",
      "Configured Nginx as a reverse proxy",
      "Managed SSL certificates and DNS routing",
      "Used PM2 for process management and auto-restart",
    ],
    github: "",
    demo: "https://dhruvpatel.space",
  },
  {
    title: "Observability Stack",
    desc: "Full production monitoring setup using Prometheus and Grafana with custom dashboards for metrics, alerting, and real-time troubleshooting.",
    tags: ["Prometheus", "Grafana", "Helm", "Kubernetes", "Alerting"],
    category: "DevOps",
    status: "Production",
    highlights: [
      "Deployed Prometheus via Helm for metrics collection",
      "Built custom Grafana dashboards for production visibility",
      "Configured alerting rules for critical thresholds",
      "Integrated with Kubernetes cluster metrics",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Static CDN Pipeline",
    desc: "High-availability static content delivery system using Amazon S3 and AWS CloudFront integrated with Strapi CMS for performance optimization.",
    tags: ["AWS S3", "CloudFront", "Strapi", "CDN", "IAM"],
    category: "Cloud",
    status: "Production",
    highlights: [
      "Configured S3 bucket for static asset hosting",
      "Set up CloudFront distribution for global CDN delivery",
      "Integrated with Strapi for dynamic content management",
      "Implemented IAM policies for secure access control",
    ],
    github: "",
    demo: "",
  },
  {
    title: "K8s RBAC Security Setup",
    desc: "Designed and implemented Role-Based Access Control policies across Kubernetes clusters and cloud platforms to prevent unauthorized access.",
    tags: ["Kubernetes", "RBAC", "AWS IAM", "Security", "ConfigMaps"],
    category: "DevOps",
    status: "Production",
    highlights: [
      "Designed cluster-wide RBAC roles and bindings",
      "Integrated with AWS IAM for cross-platform access control",
      "Used ConfigMaps for environment-specific configurations",
      "Improved overall security posture across environments",
    ],
    github: "",
    demo: "",
  },
];

const categories = ["All", "DevOps", "Cloud", "Software"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-mono">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">

        {/* HEADER */}
        <p className="text-teal-400 text-xs tracking-widest mb-4">PROJECTS</p>
        <h1 className="text-4xl font-bold mb-4">Things I've Built</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-10">
          A collection of infrastructure projects, cloud deployments, and software
          I've worked on — from Kubernetes clusters to enterprise Windows applications.
        </p>

        {/* FILTER TABS */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs rounded transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-teal-400 text-black font-bold"
                  : "border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
              <span className={`ml-2 text-[10px] ${activeCategory === cat ? "text-black/60" : "text-gray-600"}`}>
                {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200 flex flex-col group cursor-pointer"
              onClick={() => setExpanded(expanded === project.title ? null : project.title)}
            >
              {/* TOP ROW */}
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  project.category === "DevOps"
                    ? "border-teal-400/30 text-teal-400"
                    : project.category === "Cloud"
                    ? "border-blue-400/30 text-blue-400"
                    : "border-purple-400/30 text-purple-400"
                }`}>
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-500">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === "Live" ? "bg-teal-400 animate-pulse" : "bg-gray-500"
                  }`}></span>
                  {project.status}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-bold mb-2 group-hover:text-teal-400 transition-colors duration-200">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>

              {/* EXPANDED HIGHLIGHTS */}
              {expanded === project.title && (
                <ul className="mb-4 space-y-1.5 border-t border-white/5 pt-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-gray-400 flex gap-2">
                      <span className="text-teal-400 flex-shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* TAGS */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] border border-white/10 rounded px-2 py-0.5 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>

              {/* LINKS + EXPAND */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] text-gray-500 hover:text-white transition"
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
                      className="text-[10px] text-teal-400 hover:text-teal-300 transition"
                    >
                      Live →
                    </a>
                  )}
                </div>
                <span className="text-[10px] text-gray-600 hover:text-gray-400 transition">
                  {expanded === project.title ? "Show less ↑" : "Details ↓"}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-bold mb-1">Have a project in mind?</p>
            <p className="text-xs text-gray-500">I'm open to new challenges and collaborations.</p>
          </div>
          <a
            href="/contact"
            className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition whitespace-nowrap"
          >
            Get in touch
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <div className="border-t border-white/5 max-w-5xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
      </div>

    </main>
  );
}