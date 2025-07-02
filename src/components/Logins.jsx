import React from 'react'

export default function Logins() {

  const [isLoggIn, setIsLoggIn] = useState(false);

  const changeState = () => setIsLoggIn(!isLoggIn);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">
              Sign in to your account
            </h2>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
    </div>
  )
}
