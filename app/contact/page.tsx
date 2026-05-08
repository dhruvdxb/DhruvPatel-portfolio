"use client";
import { useState } from "react";

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
    <main className="bg-[#0a0a0a] text-white min-h-screen font-mono">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-sm font-bold tracking-widest text-teal-400">dp</a>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="/#about" className="hover:text-white transition">About</a>
            <a href="/#skills" className="hover:text-white transition">Skills</a>
            <a href="/#experience" className="hover:text-white transition">Experience</a>
            <a href="/#projects" className="hover:text-white transition">Projects</a>
            <a href="/contact" className="text-white">Contact</a>
            <a href="/resume" className="text-white">Resume</a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* HEADER */}
        <p className="text-teal-400 text-xs tracking-widest mb-4">CONTACT</p>
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-16">
          Whether you have an opportunity, a project idea, or just want to say hi —
          I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

          {/* LEFT — FORM */}
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-xs text-gray-500 tracking-widest block mb-2">NAME</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-400/50 transition"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 tracking-widest block mb-2">EMAIL</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-400/50 transition"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 tracking-widest block mb-2">MESSAGE</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-400/50 transition resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-teal-400 text-black px-6 py-3 text-sm font-bold rounded hover:bg-teal-300 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-teal-400 text-xs">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
          </div>

          {/* RIGHT — INFO */}
          <div className="flex flex-col gap-10">

            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-5">REACH ME AT</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:dhruvmpatel170301@gmail.com" className="flex items-start gap-3 group">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition">dhruvmpatel170301@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+916353446146" className="flex items-start gap-3 group">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition">+91 6353446146</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/dhruv-patel-164118268" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition">dhruv-patel-164118268</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 tracking-widest mb-5">AVAILABILITY</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm text-gray-300">Surat, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <p className="text-sm text-gray-300">Open to opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Work preference</p>
                    <p className="text-sm text-gray-300">Remote / Hybrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-0.5">—</span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Response time</p>
                    <p className="text-sm text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/5 max-w-3xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel.</p>
      </div>

    </main>
  );
}