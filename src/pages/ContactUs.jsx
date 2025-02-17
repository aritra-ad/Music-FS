import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    try {
      // Log the form data before sending it
      console.log('Submitting form data:', formData);

      // Use a mock API for form submission
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Contact Form Submission',
        body: JSON.stringify(formData),
        userId: 1,
      });

      // Log the response data from the mock API
      console.log('Response from API:', response);

      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="p-6 shadow-md rounded-xl max-w-2xl w-full border-2 border-gradient-to-r from-red-500 via-yellow-500 to-pink-500 bg-white">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-2 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition-all placeholder:text-gray-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-2 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition-all placeholder:text-gray-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition-all placeholder:text-gray-500"
            required
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition-all placeholder:text-gray-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 mt-3 text-white bg-[#ef4230] rounded-md shadow-sm transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-red-300 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Or Reach Us Directly
          </h2>
          <div className="space-y-1 text-gray-600">
            <p> Email: <a href="mailto:support@musicapp.com">support@musicapp.com</a></p>
            <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
            <p>Address: 123 Music Street, Los Angeles, CA 90001, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
