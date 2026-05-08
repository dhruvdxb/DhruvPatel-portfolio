"use client";
import { useState } from "react";

export default function Resume() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="flex gap-4">
        <button onClick={() => setShowModal(true)} className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold">
          View Resume
        </button>
        <a href="/Dhruv_Patel.pdf" download="Dhruv_Patel.pdf" className="border border-teal-400 text-teal-400 px-6 py-3 rounded-lg font-semibold">
          Download Resume
        </a>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <span className="text-black font-semibold text-lg">Resume Preview</span>
              <div className="flex gap-3">
                <a href="/Dhruv_Patel.pdf" download="Dhruv_Patel.pdf" className="bg-teal-400 text-black px-4 py-2 rounded-lg text-sm font-semibold">
                  Download
                </a>
                <button onClick={() => setShowModal(false)} className="text-gray-500 text-2xl leading-none">✕</button>
              </div>
            </div>
            <iframe src="/Dhruv_Patel.pdf" className="flex-1 w-full rounded-b-xl" title="Dhruv Patel Resume" />
          </div>
        </div>
      )}
    </main>
  );
}