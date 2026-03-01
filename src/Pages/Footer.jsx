import React from "react";

export default function Footer({contactRef,languageRef,serviceRef,navbarRef}) {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-6">
            We provide high-quality services with precision, speed, and a
            customer-first approach. Our goal is to deliver excellence in
            everything we do.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
  <h2 className="text-xl font-semibold text-white mb-4">
    Quick Links
  </h2>

  <ul className="flex flex-col gap-3 text-sm text-gray-300">

    <li>
      <button
        className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
        onClick={() => {
          navbarRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
      <h1 className="text-[15px] ">Home</h1> 
      </button>
    </li>

    <li>
      <button
        className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
        onClick={() => {
          serviceRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Services
      </button>
    </li>

    <li>
      <button
        className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
        onClick={() => {
          languageRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Languages
      </button>
    </li>

    <li>
      <button
        className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
        onClick={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Us
      </button>
    </li>

  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@translateindia.com</li>
            <li>Phone: +91 9976227640 </li>
            <li>Address: New Delhi, India</li>
            <li>Support Hours: Mon–Sat (9AM–7PM)</li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h2 className="text-xl font-semibold text-white mb-4">Subscribe</h2>
          <p className="text-sm mb-4">
            Get updates, offers & important announcements.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-zinc-800 text-zinc-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div> */}

      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-zinc-500">
        <p>© 2018 Translate India. All Rights Reserved.</p>
        <p>Designed & Developed by Ranvir.</p>
      </div>
    </footer>
  );
}
