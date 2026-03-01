import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    try {
      await axios.post("https://formspree.io/f/xqaydlod", formData);
      setStatus({
        type: "success",
        message:
          "Thank you for reaching out! We’ve received your message and will get back to you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 sm:p-10 md:p-12 space-y-6 border border-zinc-200"
        >
          <p className="text-center text-gray-500 text-base sm:text-lg mb-6">
            Have a question or need a quote? Fill out the form below and our
            team will get back to you soon.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg text-lg font-medium shadow-md hover:opacity-90 transition-all duration-200"
          >
            Send Message
          </button>

          {status.message && (
            <p
              className={`text-center font-medium mt-4 text-sm sm:text-base ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
      
    </>
  );
};

export default ContactForm;
