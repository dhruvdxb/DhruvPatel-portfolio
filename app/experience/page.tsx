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

const glassButtonSecondary =
  "bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-gray-200 hover:border-white/30 hover:text-white transition-colors duration-200";

const experience = [
  {
    role: "DevOps Engineer",
    company: "NexTechnologies Labs Private Limited",
    period: "Sep 2024 – May 2026",
    location: "Surat, India",
    type: "Full-time",
    current: false,
    desc: "Architected and maintained cloud infrastructure on AWS, managed Kubernetes clusters, and automated deployments — while also building enterprise Windows cybersecurity applications alongside the infrastructure work.",
    highlights: [
      "Architected and managed AWS infrastructure including EC2, IAM, VPC, S3, CloudFront, and ECR for scalable production environments",
      "Designed Kubernetes architecture using Deployments, Pods, Services, ConfigMaps, and ClusterIP networking for containerized applications",
      "Reduced Kubernetes pod memory usage by approximately 25% (80Mi to 60Mi) through resource optimization",
      "Automated deployments using Helm charts for Prometheus, Grafana, Kafka, and multiple platform services",
      "Implemented Kubernetes RBAC policies to strengthen cluster security and access management",
      "Configured NGINX as a reverse proxy with SSL termination and secure traffic routing",
      "Delivered static content at scale using Amazon S3 and CloudFront integrated with Strapi, improving availability and load performance",
      "Deployed a production portfolio application on AWS EC2, configuring NGINX reverse proxy, DNS routing, and process management with PM2",
      "Built Grafana dashboards and monitored production environments using Prometheus while utilizing AI-assisted troubleshooting workflows",
      "Developed Windows desktop cybersecurity applications using C# and WPF, including Fusion VPN and Data Privacy Protection",
      "Created production-ready MSI installers using Advanced Installer",
      "Resolved production incidents by collaborating with clients across development, testing, deployment, and support teams",
    ],
    tags: ["AWS", "Kubernetes", "Helm", "RBAC", "Nginx", "Prometheus", "Grafana", "C#", "WPF", "MSI"],
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
  { category: "Cloud & Infrastructure", items: ["AWS EC2", "VPC", "IAM", "S3", "CloudFront", "ECR", "SSM Parameter Store", "Terraform"] },
  { category: "Containers & Orchestration", items: ["Kubernetes", "Docker", "Helm"] },
  { category: "CI/CD & Version Control", items: ["GitHub Actions", "Jenkins", "ArgoCD", "Git"] },
  { category: "Monitoring & Systems", items: ["Prometheus", "Grafana", "Linux", "Nginx"] },
  { category: "Databases & Programming", items: ["PostgreSQL", "Redis", "Go", "C#"] },
  { category: "AI-Assisted DevOps", items: ["AI-powered scripting", "Automation", "Troubleshooting workflows"] },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "1", label: "Company" },
  { value: "3+", label: "Key Projects" },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<string>("NexTechnologies Labs Private Limited");

  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-500/[0.12] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-blue-500/[0.06] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 pt-8 pb-28">
          {/* HEADER */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-blue-400/60" />
              EXPERIENCE
            </p>
            <h1 className={`${heading} text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}>
              Work History
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-16">
              One role, two disciplines — I spent it architecting cloud infrastructure and
              shipping enterprise cybersecurity software, often in the same sprint.
            </p>
          </motion.div>

          {/* STATS ROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-2xl p-5 text-center hover:border-blue-400/25 transition-colors duration-300 ${glass}`}>
                <p className={`${heading} text-2xl font-bold text-blue-400 mb-1`}>{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* WORK EXPERIENCE */}
          <div className="mb-20">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-8">
              <span className="w-6 h-px bg-blue-400/60" />
              WORK
            </p>

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
                    <div
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 border-2 ${
                        exp.current ? "bg-blue-400 border-blue-400" : "bg-transparent border-white/30"
                      }`}
                    />
                    {i < experience.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-2 mb-0" style={{ minHeight: "100%" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${i < experience.length - 1 ? "pb-10" : ""}`}>
                    <div className={`rounded-2xl p-5 hover:border-blue-400/20 transition-colors duration-300 ${glass}`}>
                      {/* Header */}
                      <div
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1 cursor-pointer"
                        onClick={() => setExpanded(expanded === exp.company ? "" : exp.company)}
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className={`${heading} text-base font-semibold text-white`}>{exp.role}</h3>
                            {exp.current && (
                              <span className="flex items-center gap-1.5 text-[10px] text-blue-400 border border-blue-400/30 rounded-full px-2 py-0.5">
                                <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-blue-400">{exp.company}</span>
                            <span className="text-gray-600 text-xs">·</span>
                            <span className="text-gray-500 text-xs">{exp.location}</span>
                            <span className="text-gray-600 text-xs">·</span>
                            <span className="text-gray-600 text-xs">{exp.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 whitespace-nowrap font-mono">{exp.period}</span>
                          <span className="text-gray-600 text-xs">{expanded === exp.company ? "↑" : "↓"}</span>
                        </div>
                      </div>

                      {/* Desc */}
                      <p className="text-gray-500 text-xs leading-relaxed mt-3 mb-4">{exp.desc}</p>

                      {/* Expanded highlights */}
                      {expanded === exp.company && (
                        <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                          <ul className="space-y-2 mb-4">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex gap-3 text-xs text-gray-400">
                                <span className="text-blue-400 flex-shrink-0 mt-0.5">—</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className={`text-[10px] rounded-full px-2 py-0.5 text-gray-400 hover:text-gray-200 hover:border-white/25 transition-colors duration-200 ${glassLight}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mb-20">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-8">
              <span className="w-6 h-px bg-blue-400/60" />
              EDUCATION
            </p>
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
                <div className={`flex-1 rounded-2xl p-5 hover:border-blue-400/20 transition-colors duration-300 ${glass}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h3 className={`${heading} text-sm font-semibold text-white`}>{edu.degree}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap font-mono">{edu.period}</span>
                  </div>
                  <p className="text-blue-400 text-xs mb-1">{edu.institution}</p>
                  <p className="text-gray-600 text-xs mb-3">{edu.location}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SKILLS */}
          <div className="mb-20">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-8">
              <span className="w-6 h-px bg-blue-400/60" />
              SKILLS &amp; TOOLS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`rounded-2xl p-5 hover:border-blue-400/25 transition-colors duration-300 ${glass}`}
                >
                  <p className="text-xs text-gray-500 tracking-widest mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className={`text-xs rounded-full px-2.5 py-1 text-gray-400 hover:text-white hover:border-white/25 transition-colors duration-200 ${glassLight}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${glass}`}>
            <div>
              <p className={`${heading} text-base font-semibold text-white mb-1`}>Looking for a DevOps Engineer?</p>
              <p className="text-xs text-gray-500">Open to remote and hybrid full-time roles.</p>
            </div>
            <div className="flex gap-3">
              <a href="/contact" className={`px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap ${glassButtonPrimary}`}>
                Get in touch
              </a>
              <a href="/resume" className={`px-5 py-2.5 text-sm rounded-full whitespace-nowrap ${glassButtonSecondary}`}>
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="max-w-4xl mx-auto px-6 py-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        </div>
      </div>
    </main>
  );
}