export default function Projects() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold">EKS Monitoring Stack</h3>
          <p className="text-gray-400 mt-3">
            Deployed Prometheus and Grafana on AWS EKS with alerting and dashboards.
          </p>
          <p className="mt-3 text-sm text-teal-400">
            Kubernetes • Prometheus • Grafana • AWS
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold">Terraform EKS Setup</h3>
          <p className="text-gray-400 mt-3">
            Built production-ready AWS EKS infrastructure using Terraform.
          </p>
          <p className="mt-3 text-sm text-teal-400">
            Terraform • AWS • IAM • Networking
          </p>
        </div>

      </div>
    </main>
  );
}