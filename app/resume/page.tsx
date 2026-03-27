export default function Resume() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      <a 
        href="/resume.pdf" 
        className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold"
      >
        Download Resume
      </a>

    </main>
  );
}