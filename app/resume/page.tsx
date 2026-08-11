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

const skillGroups = [
  { label: "Cloud & Infrastructure", tags: ["AWS EC2", "VPC", "IAM", "S3", "CloudFront", "ECR", "SSM Parameter Store", "Terraform"] },
  { label: "Containers & Orchestration", tags: ["Docker", "Kubernetes", "Helm"] },
  { label: "CI/CD & Version Control", tags: ["GitHub Actions", "Jenkins", "ArgoCD", "Git"] },
  { label: "Monitoring & Systems", tags: ["Prometheus", "Grafana", "Linux", "Nginx"] },
  { label: "Databases & Programming", tags: ["PostgreSQL", "Redis", "Go", "C#"] },
  { label: "AI-Assisted DevOps", tags: ["AI-powered scripting", "Automation", "Troubleshooting workflows"] },
];

const experienceBullets = [
  "Architected and managed AWS infrastructure including EC2, IAM, VPC, S3, CloudFront, and ECR for scalable production environments.",
  "Designed Kubernetes architecture using Deployments, Pods, Services, ConfigMaps, and ClusterIP networking for containerized applications.",
  "Reduced Kubernetes pod memory usage by approximately 25% (80Mi to 60Mi) through resource optimization.",
  "Automated deployments using Helm charts for Prometheus, Grafana, Kafka, and multiple platform services.",
  "Implemented Kubernetes RBAC policies to strengthen cluster security and access management.",
  "Configured NGINX as a reverse proxy with SSL termination and secure traffic routing.",
  "Delivered static content at scale using Amazon S3 and CloudFront integrated with Strapi, improving availability and load performance.",
  "Deployed a production portfolio application on AWS EC2, configuring NGINX reverse proxy, DNS routing, and process management with PM2.",
  "Built Grafana dashboards and monitored production environments using Prometheus while utilizing AI-assisted troubleshooting workflows.",
  "Developed Windows desktop cybersecurity applications using C# and WPF, including Fusion VPN and Data Privacy Protection.",
  "Created production-ready MSI installers using Advanced Installer.",
  "Resolved production incidents by collaborating with clients across development, testing, deployment, and support teams.",
];

const projects = [
  {
    title: "AstraLink",
    desc: "Kubernetes-based microservices platform with Helm-driven deployments and AWS SSM Parameter Store for secure configuration management.",
    tags: ["Kubernetes", "Helm", "AWS SSM"],
  },
  {
    title: "Fusion Data Secure",
    desc: "Enterprise Windows cybersecurity platform with secure VPN connectivity, data protection, and production-ready MSI installers.",
    tags: ["C#", "WPF", "MSI Installer"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Resume() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-500/[0.12] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] bg-blue-500/[0.06] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 pt-8 pb-24">
          <motion.p {...fadeUp(0)} className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-blue-400/60" />
            RESUME
          </motion.p>

          <motion.h1
            {...fadeUp(0.05)}
            className={`${heading} text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}
          >
            Dhruv Patel
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8">
            DevOps Engineer building infrastructure that&apos;s scalable, secure, and highly
            available — and boring, in all the ways that matter.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex gap-4 mb-16">
            <button onClick={() => setShowModal(true)} className={`px-5 py-2.5 text-sm font-bold rounded-full ${glassButtonPrimary}`}>
              View Resume
            </button>
            <a
              href="/Dhruv_Patel-Resume.pdf"
              download="Dhruv_Patel_Resume.pdf"
              className={`px-5 py-2.5 text-sm rounded-full ${glassButtonSecondary}`}
            >
              Download PDF
            </a>
          </motion.div>

          {/* SKILLS */}
          <div className="mb-16">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-6">
              <span className="w-6 h-px bg-blue-400/60" />
              TECHNICAL SKILLS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillGroups.map((s, i) => (
                <motion.div key={s.label} {...fadeUp(i * 0.05)} className={`rounded-2xl p-4 hover:border-blue-400/25 transition-colors duration-300 ${glass}`}>
                  <p className="text-xs text-gray-500 mb-3">{s.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className={`text-xs rounded-full px-2.5 py-0.5 text-gray-400 ${glassLight}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="mb-16">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-8">
              <span className="w-6 h-px bg-blue-400/60" />
              EXPERIENCE
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-white/30 flex-shrink-0" />
              </div>
              <motion.div {...fadeUp(0)} className={`flex-1 rounded-2xl p-5 hover:border-blue-400/20 transition-colors duration-300 ${glass}`}>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className={`${heading} text-base font-semibold text-white`}>DevOps Engineer</h3>
                  <span className="text-xs text-gray-500 font-mono">Sep 2024 – May 2026</span>
                </div>
                <p className="text-blue-400 text-xs mb-4">NexTechnologies Labs Private Limited · Surat, India</p>
                <ul className="space-y-2">
                  {experienceBullets.map((b) => (
                    <li key={b} className="text-gray-400 text-xs flex gap-3">
                      <span className="text-blue-400 flex-shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mb-16">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-6">
              <span className="w-6 h-px bg-blue-400/60" />
              EDUCATION
            </p>
            <motion.div {...fadeUp(0)} className={`rounded-2xl p-5 hover:border-blue-400/20 transition-colors duration-300 ${glass}`}>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className={`${heading} text-sm font-semibold text-white mb-1`}>M.Sc. in Information Technology</h3>
                  <p className="text-gray-400 text-xs">Veer Narmad South Gujarat University</p>
                </div>
                <span className="text-xs text-gray-500 font-mono">2019 – 2024</span>
              </div>
            </motion.div>
          </div>

          {/* PROJECTS */}
          <div className="mb-16">
            <p className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-6">
              <span className="w-6 h-px bg-blue-400/60" />
              PROJECTS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <motion.div key={p.title} {...fadeUp(i * 0.06)} className={`rounded-2xl p-5 hover:border-blue-400/20 transition-colors duration-300 ${glass}`}>
                  <h3 className={`${heading} text-sm font-semibold text-white mb-2`}>{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className={`text-xs rounded-full px-2.5 py-0.5 text-gray-400 ${glassLight}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0)} className={`rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${glass}`}>
            <div>
              <p className={`${heading} text-sm font-semibold text-white mb-1`}>Interested in working together?</p>
              <p className="text-xs text-gray-500">I&apos;m open to remote and hybrid opportunities.</p>
            </div>
            <a href="/contact" className={`px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap ${glassButtonPrimary}`}>
              Get in touch
            </a>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        </div>

        {/* PDF MODAL */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className={`w-full max-w-4xl h-[90vh] rounded-2xl flex flex-col overflow-hidden ${glass}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
                <span className={`${heading} text-sm font-semibold text-white`}>Dhruv Patel — Resume</span>
                <div className="flex gap-3 items-center">
                  <a
                    href="/Dhruv_Patel-Resume.pdf"
                    download="Dhruv_Patel_Resume.pdf"
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${glassButtonPrimary}`}
                  >
                    Download
                  </a>
                  <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white text-xl transition-colors duration-200">
                    ✕
                  </button>
                </div>
              </div>
              <iframe src="/Dhruv_Patel-Resume.pdf" className="flex-1 w-full" title="Dhruv Patel Resume" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}