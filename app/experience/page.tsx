"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const experience = [
  {
    role: "DevOps Engineer",
    company: "NEXtech",
    period: "Oct 2025 – Present",
    location: "Remote · Bangalore",
    type: "Full-time",
    current: true,
    desc: "Architecting and maintaining cloud infrastructure on AWS, managing Kubernetes clusters, and building CI/CD automation that lets development teams ship reliably at scale.",
    highlights: [
      "Configured NGINX as a reverse proxy for traffic routing, SSL management, and web security enforcement",
      "Managed AWS infrastructure (EC2, VPC, IAM) to support scalable cloud deployments",
      "Optimized Kubernetes resource allocation — reduced memory usage from 80Mi to 60Mi per pod",
      "Designed and implemented RBAC policies across Kubernetes clusters and cloud platforms",
      "Delivered static content via Amazon S3 + CloudFront integrated with Strapi CMS",
      "Built Grafana dashboards for production monitoring and troubleshooting",
      "Maintained Helm charts for Prometheus, Grafana, and Kafka deployments",
      "Deployed portfolio application on AWS EC2 with Nginx, DNS routing, and PM2",
    ],
    tags: ["Kubernetes", "AWS", "Nginx", "Helm", "Grafana", "Prometheus", "ArgoCD", "Docker"],
  },
  {
    role: "Software Engineer",
    company: "Intelxlabs",
    period: "Aug 2024 – Sep 2025",
    location: "Surat, India",
    type: "Full-time",
    current: false,
    desc: "Built enterprise-grade cybersecurity software for Windows environments. Worked closely with clients across the full product lifecycle from development to deployment.",
    highlights: [
      "Developed and maintained secure Windows applications using C# and WPF",
      "Integrated backend APIs to support dynamic configuration and secure data handling",
      "Contributed to core features of Fusion VPN — secure remote access solution",
      "Built Data Privacy Protection modules for enterprise client environments",
      "Automated MSI-based installers using Advanced Installer for reliable deployments",
      "Diagnosed and resolved critical production issues, improving application stability",
      "Collaborated directly with clients across development, testing, packaging, and deployment",
    ],
    tags: ["C#", "WPF", ".NET", "VPN", "MSI Installer", "Advanced Installer", "Windows"],
  },
];

const education = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Veer Narmad South Gujarat University",
    period: "2019 – 2024",
    location: "Surat, Gujarat",
    desc: "Focused on networking, systems design, cloud computing, and software engineering fundamentals.",
  },
];

const skills = [
  { category: "Cloud & Infrastructure", items: ["AWS EC2", "VPC", "IAM", "S3", "CloudFront", "SSM", "Terraform"] },
  { category: "Containers & Orchestration", items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "ECR"] },
  { category: "CI/CD & Automation", items: ["GitHub Actions", "Jenkins", "ArgoCD", "Bash"] },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "CloudWatch", "Alerting"] },
  { category: "Networking", items: ["Nginx", "DNS", "SSL/TLS", "Reverse Proxy", "CDN"] },
  { category: "Programming", items: ["C#", "Go", "Rust", "WPF", ".NET"] },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<string>("NEXtech");

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-teal-400 text-xs tracking-widest mb-4">EXPERIENCE</p>
          <h1 className="text-4xl font-bold mb-4">Work History</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-16">
            Over a year of experience building cloud infrastructure and enterprise software —
            from Kubernetes clusters to cybersecurity platforms.
          </p>
        </motion.div>

        {/* STATS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "2", label: "Companies" },
            { value: "6+", label: "Projects Shipped" },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/10 rounded-xl p-5 text-center hover:border-white/20 transition">
              <p className="text-2xl font-bold text-teal-400 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* WORK EXPERIENCE */}
        <div className="mb-20">
          <p className="text-teal-400 text-xs tracking-widest mb-8">WORK</p>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center pt-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 border-2 ${
                    exp.current
                      ? "bg-teal-400 border-teal-400"
                      : "bg-transparent border-white/30"
                  }`} />
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-white/5 mt-2 mb-0" style={{ minHeight: "100%" }} />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${i < experience.length - 1 ? "pb-10" : ""}`}>
                  {/* Header */}
                  <div
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1 cursor-pointer"
                    onClick={() => setExpanded(expanded === exp.company ? "" : exp.company)}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold">{exp.role}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 text-[10px] text-teal-400 border border-teal-400/30 rounded-full px-2 py-0.5">
                            <span className="w-1 h-1 rounded-full bg-teal-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-teal-400">{exp.company}</span>
                        <span className="text-gray-600 text-xs">·</span>
                        <span className="text-gray-500 text-xs">{exp.location}</span>
                        <span className="text-gray-600 text-xs">·</span>
                        <span className="text-gray-600 text-xs">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 whitespace-nowrap">{exp.period}</span>
                      <span className="text-gray-600 text-xs">{expanded === exp.company ? "↑" : "↓"}</span>
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="text-gray-500 text-xs leading-relaxed mt-3 mb-4">{exp.desc}</p>

                  {/* Expanded highlights */}
                  {expanded === exp.company && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-xs text-gray-400">
                            <span className="text-teal-400 flex-shrink-0 mt-0.5">—</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] border border-white/10 rounded px-2 py-0.5 text-gray-500 hover:text-gray-300 hover:border-white/20 transition">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mb-20">
          <p className="text-teal-400 text-xs tracking-widest mb-8">EDUCATION</p>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-white/30 flex-shrink-0" />
              </div>
              <div className="flex-1 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <h3 className="text-sm font-bold">{edu.degree}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-teal-400 text-xs mb-1">{edu.institution}</p>
                <p className="text-gray-600 text-xs mb-3">{edu.location}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="mb-20">
          <p className="text-teal-400 text-xs tracking-widest mb-8">SKILLS & TOOLS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-white/10 rounded-xl p-5 hover:border-white/20 transition"
              >
                <p className="text-xs text-gray-500 tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs border border-white/10 rounded px-2 py-1 text-gray-400 hover:text-white hover:border-white/25 transition">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-white/20 transition">
          <div>
            <p className="text-sm font-bold mb-1">Looking for a DevOps Engineer?</p>
            <p className="text-xs text-gray-500">Open to remote and hybrid full-time roles.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition whitespace-nowrap">
              Get in touch
            </a>
            <a href="/resume" className="border border-white/20 text-white px-5 py-2.5 text-sm rounded hover:border-white/40 transition whitespace-nowrap">
              Resume
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
      </div>

    </main>
  );
}