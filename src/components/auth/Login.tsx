import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Login to Education Hub</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white py-3 rounded-md shadow-md transition duration-200 bg-customPurple hover:bg-customPurpleHover"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-customPurple hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <a href="#" className="text-customPurple hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
