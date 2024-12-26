"use client"; // Marks this file as a Client Component

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can implement form submission logic here
  };

  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-b from-red-50 to-red-100">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">Contact Us</h1>

      {/* Contact Form */}
      <div className="flex flex-col items-center mb-12">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-red-700 font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border-2 border-red-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-red-700 font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border-2 border-red-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-red-700 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border-2 border-red-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={4}
              required
            />
          </div>

          <button type="submit" className="w-full px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="flex justify-center space-x-12 mb-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Phone</h2>
          <p className="text-red-600">+1 (234) 567-890</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Email</h2>
          <p className="text-red-600">support@company.com</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-8 mb-12">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-red-600 hover:text-red-700 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-red-400 hover:text-red-500 transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-red-500 hover:text-red-600 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-red-700 hover:text-red-800 transition-colors duration-300" />
        </a>
      </div>

      {/* FAQs Section */}
      <div className="bg-[#fef8f8] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-700 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-red-700">How can I contact support?</h3>
            <p className="text-red-600">You can reach out to our support team via email or phone. Our contact details are listed above.</p>
          </div>
          <div>
            <h3 className="font-semibold text-red-700">What is your response time?</h3>
            <p className="text-red-600">We aim to respond to all inquiries within 24-48 hours during business days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-red-700">Do you offer international support?</h3>
            <p className="text-red-600">Yes, we offer support to customers worldwide. Feel free to reach out to us regardless of your location.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
