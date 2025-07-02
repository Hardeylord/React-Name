import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const loginSchema=yup.object({
  email:yup.string().email("this is not a valid email").required("email is required"),
  password:yup.string().required("password is required").length(5, "password cant be greater than 5 characters or more than")
})
export default function YupLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},}= useForm({
      resolver:yupResolver(loginSchema),
    })
      return (
        <>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">
                Sign in to your account
              </h2>
    
              <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                  {errors.email && (<p className="text-red-600">{errors.email.message}</p>)}
                </div>
    
                {/* Password */}
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    {...register("password")}
                  />
                  {errors.password && (<p className="text-red-600">{errors.password.message}</p>)}
                </div>
    
                {/* Submit */}
                <div>
                  {/* <button onClick={loggInOut} className="p-3 bg-red-600 rounded-xl text-white">Log in</button> */}
                  <button
                    // onClick={loggInOut}
    
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
        </>
      );
}
