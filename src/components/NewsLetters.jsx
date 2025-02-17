import React, { useState } from 'react';
import axios from 'axios';

const NewsLetters = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Message) {
      alert('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      alert('Please enter a valid email address!');
      return;
    }

    try {
      // Log the form data before sending it
      console.log('Submitting form data:', formData);

      // Use a mock API for form submission
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Newsletter Registration',
        body: JSON.stringify(formData),
        userId: 1,
      });

      // Log the response data from the mock API
      console.log('Response from API:', response);

      setFormData({ FirstName: '', LastName: '', Email: '', Message: '' });
      alert('Newsletter registration successful!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Error submitting form, please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center 2xl:h-[85vh] xl:h-[95vh] lg:h-[120vh] md:h-[95vh] sm:h-[95vh] px-4 py-5">
      <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 shadow-2xl rounded-3xl max-w-4xl w-full border-4 border-gradient-to-r from-red-500 via-yellow-500 to-pink-500">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-center text-gray-800 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
          Newsletter <span className="text-red-600">Registration</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8 xl:space-y-8 2xl:space-y-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="FirstName"
              placeholder="First Name*"
              value={formData.FirstName}
              onChange={handleChange}
              className="flex-1 p-3 sm:p-4 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md transition-all placeholder:text-gray-500"
            />
            <input
              type="text"
              name="LastName"
              placeholder="Last Name*"
              value={formData.LastName}
              onChange={handleChange}
              className="flex-1 p-3 sm:p-4 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md transition-all placeholder:text-gray-500"
            />
          </div>
          <input
            type="text"
            name="Email"
            placeholder="Email*"
            value={formData.Email}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md transition-all placeholder:text-gray-500"
          />
          <textarea
            name="Message"
            rows="5"
            placeholder="Write something here..."
            value={formData.Message}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 border-2 border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md transition-all placeholder:text-gray-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 sm:py-4 mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 text-white bg-[#ef4230] rounded-lg shadow-xl transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-red-300 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetters;
