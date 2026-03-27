export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <h1 className="text-4xl font-bold text-center">About Me</h1>

      <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-center">
        I am a DevOps-focused engineer passionate about building scalable,
        reliable systems. I work with Kubernetes, AWS, Terraform, and monitoring
        tools like Prometheus and Grafana to create production-ready infrastructure.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-xl">Tech Stack</h3>
          <p className="text-gray-400 mt-3">
            AWS, Kubernetes, Docker, Terraform, Prometheus, Grafana
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-xl">What I Focus On</h3>
          <p className="text-gray-400 mt-3">
            High availability, observability, automation, and system reliability
          </p>
        </div>

      </div>
    </main>
  );
}