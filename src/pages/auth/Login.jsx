import React from "react";
import { useState } from "react";

export default function Login() {
  // const [emailInput, SetemailInput] = useState("");
  // // const [isLoggedIn, SetisLoggedIn] = useState(false);
  // const [passwordInput, SetpasswordInput] = useState("");

  // function checkPwd(e) {
  //   let pwdValue = e.target.value;
  //   SetpasswordInput(pwdValue);
  // }
  // function checkEmail(e) {
  //   let emailValue = e.target.value;
  //   SetemailInput(emailValue);
  // }

  // function loggInOut() {
  //   // SetemailInput(e.target.value)
  //   if (!emailInput) {
  //     alert(`enter a valid email`);
  //     return;
  //   } else if (!passwordInput) {
  //     alert("enter the correct password");
  //     return;
  //   } else {
  //     // SetisLoggedIn(!isLoggedIn);
  //   }
  // }

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [formErros, setformErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  function validateForm() {
    const errors = {};
    if (!formData.email) {
      //assign keys
      errors.email = "email IS REQUIRED";
    } else if (!formData.email.includes("@")) {
      errors.email = "name cant be greater than 12 characters";
    }

    if (!formData.password) {
      //assign keys
      errors.password = "password IS REQUIRED";
    } else if (formData.password.length < 5 || formData.password.length > 5) {
      errors.password =
        "password cant be greater than 5 characters or more than";
    }

    setformErros(errors);
    return errors;
  }
  function onsubmit(e) {
    e.preventDefault();
    const validateEoors = validateForm();
    const errorKeyLength = Object.keys(validateEoors).length;
    if (errorKeyLength > 0) {
      return;
    }
    console.log(formData);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>

          <form onSubmit={onsubmit} className="space-y-4">
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
                value={formData.email}
                onChange={handleChange}
              />
              {formErros.email && <p className="text-red-600">{formErros.email}</p>}
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
                value={formData.password}
                onChange={handleChange}
              />
              {formErros.password && <p className="text-red-600">{formErros.password}</p>}
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
