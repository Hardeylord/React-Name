import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between text-sm text-gray-500">
          <p>© 2025 MyBrand. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
