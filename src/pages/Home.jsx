import React from 'react'

export default function () {
  return (
    <div>
      <div>
      {/* Hero / Landing Section */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Build Modern Interfaces Easily</h1>
          <p className="text-lg text-gray-600 mb-6">
            Kickstart your next project with our easy-to-use tools and templates powered by Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
