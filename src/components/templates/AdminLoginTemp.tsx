import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminLoginTemp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle authentication here
    // For now, we'll just navigate to the homepage
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E2A5A] to-[#0A122E] text-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-8 left-8 flex items-center text-lg text-gray-300 hover:text-white cursor-pointer">
        <FaArrowLeft className="mr-2" />
        <a href="/" className="text-lg text-gray-300 hover:text-white">Back to Login</a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-bold mb-2">System Login</h1>
        <p className="text-lg text-gray-300 text-center px-4">
          Enter your information to access as Administrator
        </p>
      </div>

      {/* Admin Login Form */}
      <form onSubmit={handleAdminLogin} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-sm w-full">
        <div className="mb-4 w-full text-left">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address:</label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-2 w-full text-left">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center w-full mb-6">
          <label className="flex items-center text-gray-700 text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-bold">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 w-full"
        >
          Admin Login
        </button>
        <p className="text-gray-700 text-sm mt-4">Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">Register now</a></p>
      </form>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 text-gray-300 text-sm mt-12">
        <p>© 2024 CondoManager. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">24/7 Support</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginTemp; 