import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
       {/* Header */}
       <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600"><Link to="/">MyBrand</Link></div>
          <nav className="space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/auth/yuplogin" className="text-gray-700 hover:text-blue-600">yup</Link>
            <Link to="/auth/login" className="text-gray-700 hover:text-blue-600">Log in</Link>
          </nav>
        </div>
      </header>

    </div>
  )
}
