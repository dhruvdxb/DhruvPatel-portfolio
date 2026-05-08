"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-mono">
      <Navbar />

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <motion.p {...fade(0)} className="text-teal-400 text-xs tracking-widest mb-6">
          AVAILABLE FOR WORK · REMOTE / HYBRID
        </motion.p>

        <motion.h1 {...fade(0.1)} className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          Dhruv Patel
        </motion.h1>

        <motion.p {...fade(0.2)} className="text-gray-400 text-base leading-relaxed max-w-lg mb-3">
          Software Engineer & DevOps 
          
        </motion.p>

        <motion.p {...fade(0.25)} className="text-gray-600 text-sm leading-relaxed max-w-lg mb-10">
          Currently at <span className="text-gray-400">NEXtech</span>, previously at{" "}
          <span className="text-gray-400">Intelxlabs</span>. Based in Surat, India.
        </motion.p>

        <motion.div {...fade(0.3)} className="flex gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition"
          >
            Get in touch
          </a>
          <a
            href="/projects"
            className="border border-white/15 text-gray-300 px-5 py-2.5 text-sm rounded hover:border-white/30 hover:text-white transition"
          >
            View projects
          </a>
          <a
            href="/resume"
            className="text-gray-500 px-5 py-2.5 text-sm rounded hover:text-white transition"
          >
            Resume →
          </a>
        </motion.div>
      </section>

      {/* ── CURRENTLY ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { label: "Current Role", value: "DevOps Engineer", sub: "NEXtech · Remote" },
              { label: "Location", value: "Surat, India", sub: "GMT+5:30" },
              { label: "Focus", value: "Cloud Native", sub: "Kubernetes · AWS · CI/CD" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-600 tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-white font-bold mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-teal-400 text-xs tracking-widest mb-10"
          >
            WHAT I DO
          </motion.p>

          <div className="space-y-0">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-8 py-6 border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors duration-200 rounded px-2 -mx-2"
              >
                <span className="text-xs text-gray-700 mt-0.5 flex-shrink-0 group-hover:text-teal-400 transition-colors duration-200">
                  {item.no}
                </span>
                <div className="flex-1 sm:flex sm:justify-between sm:items-start gap-8">
                  <h3 className="text-sm font-bold mb-2 sm:mb-0 sm:w-48 flex-shrink-0 group-hover:text-teal-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-teal-400 text-xs tracking-widest mb-10"
          >
            TECH STACK
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { category: "Cloud", items: ["AWS EC2", "S3", "CloudFront", "IAM", "VPC"] },
              { category: "Containers", items: ["Kubernetes", "Docker", "Helm", "ArgoCD"] },
              { category: "Monitoring", items: ["Prometheus", "Grafana", "CloudWatch"] },
              { category: "Languages", items: ["C#", "Go", "Rust", "Bash"] },
            ].map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-xs text-gray-600 tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs text-gray-400 hover:text-white transition-colors duration-150 cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="flex justify-between items-center mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-teal-400 text-xs tracking-widest"
            >
              SELECTED PROJECTS
            </motion.p>
            <a href="/projects" className="text-xs text-gray-500 hover:text-white transition">
              All projects →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
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
            ].map((project, i) => (
              <motion.a
                key={project.title}
                href="/projects"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-white/10 rounded-xl p-5 hover:border-white/25 transition-all duration-200 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-sm font-bold group-hover:text-teal-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-teal-400 animate-pulse" : "bg-gray-600"}`} />
                    <span className="text-[10px] text-gray-600">{project.status}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] border border-white/10 rounded px-2 py-0.5 text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE SNAPSHOT ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-teal-400 text-xs tracking-widest mb-10"
          >
            EXPERIENCE
          </motion.p>

          <div className="space-y-8">
            {[
              {
                role: "DevOps Engineer",
                company: "NEXtech",
                period: "Oct 2025 – Present",
                location: "Remote · Bangalore",
                desc: "Architecting cloud infrastructure on AWS, managing Kubernetes clusters, and building CI/CD automation at scale.",
              },
              {
                role: "Software Engineer",
                company: "Intelxlabs",
                period: "Aug 2024 – Sep 2025",
                location: "Surat, India",
                desc: "Built enterprise cybersecurity applications in C# and WPF. Shipped Fusion VPN and Data Privacy Protection tools.",
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center pt-1.5">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 0 ? "bg-teal-400" : "bg-white/20"}`} />
                  {i === 0 && <div className="w-px flex-1 bg-white/5 mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    <h3 className="text-sm font-bold">{exp.role}</h3>
                    <span className="text-xs text-gray-600">{exp.period}</span>
                  </div>
                  <p className="text-teal-400 text-xs mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-xs mb-3">{exp.location}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="/resume" className="text-xs text-gray-500 hover:text-white transition mt-4 inline-block">
            Full resume →
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-400 text-xs tracking-widest mb-4">OPEN TO WORK</p>
            <h2 className="text-3xl font-bold mb-4">Let's build something together</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Whether it's a DevOps role, a freelance infrastructure project, or just a conversation —
              I'm always open to hearing about interesting opportunities.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-teal-400 text-black px-6 py-3 text-sm font-bold rounded hover:bg-teal-300 transition"
              >
                Get in touch
              </a>
              <a
                href="mailto:dhruvmpatel170301@gmail.com"
                className="border border-white/15 text-gray-300 px-6 py-3 text-sm rounded hover:border-white/30 hover:text-white transition"
              >
                dhruvmpatel170301@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        <div className="flex gap-6 text-xs text-gray-600">
          <a href="mailto:dhruvmpatel170301@gmail.com" className="hover:text-white transition">Email</a>
          <a href="https://linkedin.com/in/dhruv-patel-164118268" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="/resume" className="hover:text-white transition">Resume</a>
        </div>
      </footer>

    </main>
  );
}