"use client";

import { useState } from "react";
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
// GLASS STYLE TOKENS (matches homepage / about)
// ─────────────────────────────────────────────

const glass =
  "bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_-8px_rgba(0,0,0,0.45)]";

const glassInput =
  "w-full bg-white/[0.04] backdrop-blur-md backdrop-saturate-150 border border-white/12 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.06] transition-colors duration-200";

const glassButtonPrimary =
  "bg-blue-400/90 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_20px_-4px_rgba(59,130,246,0.45)] text-black hover:bg-blue-300/90 transition-colors duration-200";

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
      className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-[0.2em] mb-4"
    >
      <span className="w-6 h-px bg-blue-400/60" />
      {children}
    </motion.p>
  );
}

function InfoRow({ label, value, delay }: { label: string; value: React.ReactNode; delay: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="flex items-start gap-3">
      <span className="text-blue-400 mt-0.5">—</span>
      <div>
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        <div className="text-sm text-gray-300">{value}</div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="relative bg-[#0a0a0a] text-[#F5F5F7] min-h-screen overflow-hidden">
      <GridBackground />

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 pt-8 pb-28">
          <SectionLabel>CONTACT</SectionLabel>

          <motion.h1
            {...fadeUp(0.05)}
            className={`${heading} text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent`}
          >
            Let&apos;s Connect
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="text-gray-400 text-sm leading-relaxed max-w-md mb-16">
            Whether you have an opportunity, a project idea, or just want to say hi —
            I&apos;ll get back to you as soon as possible.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
            {/* ── FORM ── */}
            <motion.div {...fadeUp(0.15)} className={`flex flex-col gap-5 rounded-2xl p-6 ${glass}`}>
              <div>
                <label className="text-xs text-gray-500 tracking-widest block mb-2">NAME</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={glassInput}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 tracking-widest block mb-2">EMAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className={glassInput}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 tracking-widest block mb-2">MESSAGE</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className={`${glassInput} resize-none`}
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`px-6 py-3 text-sm font-bold rounded-full ${glassButtonPrimary}`}
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-blue-400 text-xs">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </p>
              )}
            </motion.div>

            {/* ── INFO ── */}
            <div className="flex flex-col gap-10">
              <motion.div {...fadeUp(0.2)} className={`rounded-2xl p-6 ${glass}`}>
                <p className="text-xs text-gray-500 tracking-widest mb-5">REACH ME AT</p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:dhruvmpatel170301@gmail.com" className="flex items-start gap-3 group">
                    <span className="text-blue-400 mt-0.5">—</span>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                        dhruvmpatel170301@gmail.com
                      </p>
                    </div>
                  </a>
                  <a href="tel:+916353446146" className="flex items-start gap-3 group">
                    <span className="text-blue-400 mt-0.5">—</span>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                        +91 6353446146
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/dhruv-patel-164118268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-blue-400 mt-0.5">—</span>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                        dhruv-patel-164118268
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.25)} className={`rounded-2xl p-6 ${glass}`}>
                <p className="text-xs text-gray-500 tracking-widest mb-5">AVAILABILITY</p>
                <div className="flex flex-col gap-4">
                  <InfoRow label="Location" value="Surat, Gujarat, India" delay={0} />
                  <InfoRow
                    label="Status"
                    value={
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span>Open to opportunities</span>
                      </div>
                    }
                    delay={0.05}
                  />
                  <InfoRow label="Work preference" value="Remote / Hybrid" delay={0.1} />
                  <InfoRow label="Response time" value="Within 24 hours" delay={0.15} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8 border-t border-white/5">
          <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
        </div>
      </div>
    </main>
  );
}