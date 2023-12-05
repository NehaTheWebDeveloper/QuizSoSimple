import axios from 'axios';
import React, { useState } from 'react';

const LoginPage = () => {
  // Initialize a state object to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/login", formData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    console.log(formData);
    // Perform your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 w-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
