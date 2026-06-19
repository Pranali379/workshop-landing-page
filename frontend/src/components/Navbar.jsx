import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 shadow-md"></div>
          <h1 className="font-bold text-gray-800 tracking-wide">
            KidWorkshop
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <a href="#home" className="hover:text-pink-500 transition">Home</a>
          <a href="#details" className="hover:text-pink-500 transition duration-300">Details</a>
          <a href="#outcomes" className="hover:text-pink-500 transition">Learn</a>
          <a href="#curriculum" className="hover:text-pink-500 transition">Curriculum</a>
          <a href="#faq" className="hover:text-pink-500 transition">FAQ</a>
          <a href="#form" className="hover:text-pink-500 transition">Register</a>
        </div>

        {/* CTA */}
        <a
            href="#form"
            className="bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600 transition shadow-sm">
            Enroll Now
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-gray-700 text-sm">
          <a href="#home" className="block">Home</a>
          <a href="#details" className="block">Details</a>
          <a href="#outcomes" className="block">Learn</a>
          <a href="#curriculum" className="block">Curriculum</a>
          <a href="#faq" className="block">FAQ</a>
          <a href="#form" className="block">Register</a>

          <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-xl">
            Enroll Now
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;