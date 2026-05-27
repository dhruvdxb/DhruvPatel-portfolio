"use client";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">

        <p className="text-teal-400 text-xs tracking-widest mb-4">ABOUT</p>
        <h1 className="text-4xl font-bold mb-6">Hey, I'm Dhruv</h1>

        <div className="flex items-start gap-6 mb-16">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
            <span className="text-teal-400 text-xl font-bold">DP</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed pt-2">
            A Software Engineer & DevOps professional based in Surat, Gujarat, India.
            I care deeply about building systems that are reliable, scalable, and secure —
            the kind of infrastructure that quietly powers great products without anyone noticing.
          </p>
        </div>

        {/* WHO I AM */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">WHO I AM</p>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              I'm an engineer who sits at the intersection of software development and
              infrastructure. I started out writing code and naturally gravitated toward
              the systems that run it — cloud platforms, container orchestration, deployment
              pipelines, and observability stacks.
            </p>
          </div>
        </div>

        {/* MY JOURNEY */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-8">MY JOURNEY</p>
          <div className="space-y-0">
            {[
              {
                year: "2019",
                title: "Started M.Sc. in Information Technology",
                desc: "Joined Veer Narmad South Gujarat University. Got first real exposure to networks, systems, and programming fundamentals.",
              },
              {
                year: "2024",
                title: "Joined Intelxlabs as Software Engineer",
                desc: "Built enterprise Windows applications in C# and WPF. Shipped Fusion VPN and Data Privacy tools used by real clients.",
              },
              {
                year: "2025",
                title: "Moved into DevOps at NEXtech",
                desc: "Shifted focus to cloud infrastructure and platform engineering. Started working with Kubernetes, AWS, Helm, and Grafana at scale.",
              },
              {
                year: "Now",
                title: "Building & learning",
                desc: "Deepening expertise in cloud-native architecture, GitOps, and observability. Open to new challenges and opportunities.",
              },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${i === 3 ? "bg-teal-400" : "bg-white/20"}`}></div>
                  {i < 3 && <div className="w-px flex-1 bg-white/5 my-2"></div>}
                </div>
                <div className={`${i < 3 ? "pb-8" : ""} flex-1`}>
                  <span className="text-xs text-teal-400 font-bold">{item.year}</span>
                  <h3 className="text-sm font-bold mt-1 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT I DO */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">WHAT I DO & HOW I WORK</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Infrastructure as Code", desc: "I treat infrastructure the same way I treat software — versioned, reviewed, and automated. Terraform and Helm are my defaults." },
              { title: "Reliability first", desc: "I obsess over uptime, alerting, and graceful degradation. If something breaks at 2am, I want dashboards and runbooks ready." },
              { title: "Automate the boring stuff", desc: "Manual steps in a deployment are bugs waiting to happen. I build CI/CD pipelines that make shipping boring in the best way." },
              { title: "Security by default", desc: "RBAC, least-privilege IAM, encrypted secrets, network policies — not afterthoughts but part of the initial design." },
              { title: "Clear communication", desc: "I work closely with developers and stakeholders. I write documentation, draw architecture diagrams, and keep everyone aligned." },
              { title: "Continuous learning", desc: "Cloud-native tooling evolves fast. I stay sharp by reading, building side projects, and going deep on the tools I use daily." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-400">—</span>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-16">
          <p className="text-teal-400 text-xs tracking-widest mb-6">VALUES & PHILOSOPHY</p>
          <div className="space-y-5">
            {[
              { value: "Ownership", desc: "I don't hand things off and forget. I see problems through from discovery to resolution, and I take responsibility for what I ship." },
              { value: "Simplicity", desc: "The best solution is usually the simplest one that works. I avoid over-engineering and keep systems as lean as they can be." },
              { value: "Transparency", desc: "I believe in open communication — sharing what I know, admitting what I don't, and asking for help when needed." },
              { value: "Impact", desc: "I want my work to matter. Whether it's shaving seconds off a deploy or preventing an outage, I care about outcomes not just output." },
            ].map((item) => (
              <div key={item.value} className="flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0">
                <span className="text-teal-400 text-xs font-bold w-24 flex-shrink-0 pt-0.5">{item.value}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border border-white/10 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-bold mb-1">Want to work together?</p>
            <p className="text-xs text-gray-500">I'm open to remote and hybrid opportunities.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="bg-teal-400 text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-teal-300 transition">
              Get in touch
            </a>
            <a href="/resume" className="border border-white/20 text-white px-5 py-2.5 text-sm rounded hover:border-white/40 transition">
              View resume
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <p className="text-xs text-gray-600">© 2026 Dhruv Patel</p>
      </div>

    </main>
  );
}