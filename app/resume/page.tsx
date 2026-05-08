"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-mono">

      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">

        <p className="text-teal-400 text-xs tracking-widest mb-4">RESUME</p>
        <h1 className="text-4xl font-bold mb-4">Dhruv Patel</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-8">
          Software Engineer & DevOps — building scalable, secure, and highly available
          cloud infrastructure with Kubernetes, AWS, and CI/CD automation.
        </p>

        <div className="flex gap-4 mb-16">
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition"
          >
            View Resume
          </button>
          <a
            href="/Dhruv_Patel.pdf"
            download="Dhruv_Patel_Resume.pdf"
            className="border border-white/20 text-white px-5 py-2.5 text-sm rounded hover:border-white/40 transition"
          >
            Download PDF
          </a>
        </div>

        {/* SKILLS */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">TECHNICAL SKILLS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Cloud & Infrastructure", tags: ["AWS", "Kubernetes", "Docker", "Terraform"] },
              { label: "Tools", tags: ["Linux", "Nginx", "Prometheus", "Grafana", "Redis"] },
              { label: "CI/CD Automation", tags: ["GitHub Actions", "Jenkins", "ArgoCD"] },
              { label: "Programming", tags: ["C#", "Go", "Rust"] },
            ].map((s) => (
              <div key={s.label} className="border border-white/10 rounded-lg p-4 hover:border-white/20 transition">
                <p className="text-xs text-gray-500 mb-3">{s.label}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs border border-white/10 rounded px-2 py-0.5 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-8">EXPERIENCE</p>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-1 flex-shrink-0"></div>
                <div className="w-px flex-1 bg-white/5 mt-2"></div>
              </div>
              <div className="pb-10 flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-sm font-bold">DevOps Engineer</h3>
                  <span className="text-xs text-gray-500">Oct 2025 – Present</span>
                </div>
                <p className="text-teal-400 text-xs mb-4">NEXtech · Remote, Bangalore</p>
                <ul className="space-y-2">
                  {[
                    "Configured NGINX as a reverse proxy for traffic routing and SSL management.",
                    "Managed AWS infrastructure (EC2, VPC, IAM) for scalable cloud deployments.",
                    "Optimized Kubernetes resource allocation — reduced memory from 80Mi to 60Mi.",
                    "Designed RBAC policies across Kubernetes clusters and cloud platforms.",
                    "Delivered static content via Amazon S3 + CloudFront integrated with Strapi.",
                    "Built Grafana dashboards and handled production monitoring.",
                    "Maintained Helm charts for Prometheus, Grafana, and Kafka.",
                  ].map((b) => (
                    <li key={b} className="text-gray-400 text-xs flex gap-3">
                      <span className="text-teal-400 flex-shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-1 flex-shrink-0"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-sm font-bold">Software Engineer</h3>
                  <span className="text-xs text-gray-500">Aug 2024 – Sep 2025</span>
                </div>
                <p className="text-teal-400 text-xs mb-4">Intelxlabs · Surat, India</p>
                <ul className="space-y-2">
                  {[
                    "Developed secure Windows applications using C# and WPF.",
                    "Contributed to Fusion VPN and Data Privacy Protection modules.",
                    "Built and automated MSI-based installers using Advanced Installer.",
                    "Diagnosed and resolved critical production issues.",
                    "Collaborated with clients across the full software lifecycle.",
                  ].map((b) => (
                    <li key={b} className="text-gray-400 text-xs flex gap-3">
                      <span className="text-teal-400 flex-shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">EDUCATION</p>
          <div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-sm font-bold mb-1">M.Sc. in Information Technology</h3>
                <p className="text-gray-400 text-xs">Veer Narmad South Gujarat University</p>
              </div>
              <span className="text-xs text-gray-500">2019 – 2024</span>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">PROJECTS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition">
              <h3 className="text-sm font-bold mb-2">AstraLink</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                Microservices on Kubernetes with Helm orchestration and AWS SSM config management.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "Helm", "AWS SSM"].map((t) => (
                  <span key={t} className="text-xs border border-white/10 rounded px-2 py-0.5 text-gray-500">{t}</span>
                ))}
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition">
              <h3 className="text-sm font-bold mb-2">Fusion Data Secure</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                Windows cybersecurity platform with secure VPN access and production MSI installers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["C#", "WPF", "MSI Installer"].map((t) => (
                  <span key={t} className="text-xs border border-white/10 rounded px-2 py-0.5 text-gray-500">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border border-white/10 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-bold mb-1">Interested in working together?</p>
            <p className="text-xs text-gray-500">I'm open to remote and hybrid opportunities.</p>
          </div>
          <a href="/contact" className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition whitespace-nowrap">
            Get in touch
          </a>
        </div>

      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
      </div>

      {/* PDF MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#111] border border-white/10 rounded-xl w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
              <span className="text-sm font-bold">Dhruv Patel — Resume</span>
              <div className="flex gap-3 items-center">
                <a href="/Dhruv_Patel.pdf" download="Dhruv_Patel_Resume.pdf" className="bg-teal-400 text-black px-4 py-1.5 rounded text-xs font-bold hover:bg-teal-300 transition">
                  Download
                </a>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-white text-xl transition">✕</button>
              </div>
            </div>
            <iframe src="/Dhruv_Patel.pdf" className="flex-1 w-full rounded-b-xl" title="Dhruv Patel Resume" />
          </div>
        </div>
      )}

    </main>
  );
}