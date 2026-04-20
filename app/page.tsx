"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#05070d] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/5">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Dhruv Logo"
            className="h-8 w-auto brightness-200 hover:scale-105 transition duration-300"
          />
          <span className="font-semibold tracking-wide">Dhruv Patel</span>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 text-gray-400 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/resume" className="hover:text-white transition">Resume</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center mt-28 px-6 relative">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-blue-500/10 blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight relative z-10"
        >
          I Build & Scale{" "}
          <span className="text-teal-400">
            Cloud Systems
          </span>
          <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto relative z-10"
        >
          DevOps Engineer specializing in Kubernetes, AWS, and observability.
          I design resilient systems that handle real-world traffic and failures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-4 relative z-10"
        >
          <a
            href="/contact"
            className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition shadow-lg shadow-teal-400/30"
          >
            Hire Me
          </a>

          <a
            href="/projects"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            View Projects →
          </a>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="mt-24 text-center px-6">
        <p className="text-gray-400 text-sm">Tech I Work With</p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Kubernetes", "AWS", "Docker", "Prometheus", "Grafana"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-teal-400/40 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="mt-28 px-10">
        <h2 className="text-3xl font-semibold text-center">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            {
              title: "Kubernetes Deployments",
              desc: "Highly available, scalable microservices with zero downtime deployments.",
            },
            {
              title: "Observability",
              desc: "Metrics, logs, and alerts using Prometheus & Grafana.",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Production-grade AWS architecture using Terraform & automation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-[#0b0f19] p-6 rounded-xl border border-white/10 hover:border-teal-400/40 transition"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-28 px-10">
        <h2 className="text-3xl font-semibold text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-[#0b0f19] p-6 rounded-xl border border-white/10 hover:border-teal-400/40 transition">
            <h3 className="text-xl font-bold">K8s Auto Scaling System</h3>
            <p className="text-gray-400 mt-2">
              Designed a system handling traffic spikes with HPA & metrics-based scaling.
            </p>
          </div>

          <div className="bg-[#0b0f19] p-6 rounded-xl border border-white/10 hover:border-teal-400/40 transition">
            <h3 className="text-xl font-bold">Observability Stack</h3>
            <p className="text-gray-400 mt-2">
              Full monitoring setup using Prometheus, Grafana, CloudWatch.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center pb-10 text-gray-500">
        © 2026 Dhruv Patel
      </footer>

    </main>
  );
}