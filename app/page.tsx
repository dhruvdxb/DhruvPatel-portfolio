export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0b0f19] to-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-lg font-semibold">Dhruv Patel</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="/resume">Resume</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center mt-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Building <span className="text-teal-400">Scalable Systems</span><br />
          & Reliable Infrastructure
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          DevOps Engineer focused on Kubernetes, AWS, and observability.
          I design systems that are reliable, scalable, and production-ready.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/resume" className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition">
            View Resume
          </a>

          <a href="#" className="border px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Explore Projects →
          </a>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="mt-32 px-10">
        <h2 className="text-3xl font-semibold text-center">
          What I Do
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Real-world DevOps solutions I work on
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Kubernetes Deployments</h3>
            <p className="text-gray-400 mt-3">
              Deploy scalable applications on Kubernetes with high availability and resilience.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Monitoring & Observability</h3>
            <p className="text-gray-400 mt-3">
              Setup Prometheus & Grafana dashboards, alerts, and deep system insights.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Infrastructure as Code</h3>
            <p className="text-gray-400 mt-3">
              Build and manage AWS infrastructure using Terraform for consistency and automation.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="mt-32 px-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-bold">EKS Monitoring Stack</h3>
            <p className="text-gray-400 mt-3">
              Deployed Prometheus & Grafana on AWS EKS. Solved CrashLoopBackOff and optimized scraping configs.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Terraform EKS Setup</h3>
            <p className="text-gray-400 mt-3">
              Built production-ready EKS cluster with IAM roles, networking, and scaling setup.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <section className="mt-32 text-center pb-10">
        <p className="text-gray-500">© 2026 Dhruv Patel</p>
      </section>

    </main>
  );
}