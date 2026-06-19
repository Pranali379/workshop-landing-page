import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  try {
    const response = await axios.post(
      "http://localhost:5000/api/enquiry",
      formData
    );

    setSuccess(response.data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  } catch (error) {
    setSuccess("❌ Something went wrong. Try again.");
  }

  setLoading(false);
};

  return (
    <section id="form" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">

      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register for Workshop 🚀
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
          >
            {loading ? "Submitting..." : "Enroll Now"}
          </button>
        </form>

        <footer className="bg-gray-900 text-white py-8 text-center">
  <h3 className="text-lg font-bold">
    AI & Robotics Summer Workshop
  </h3>

  <p className="text-gray-400 mt-2">
    Inspiring young innovators through AI and Robotics.
  </p>

  <p className="text-gray-500 text-sm mt-4">
    © 2026 KidWorkshop. All rights reserved.
  </p>
</footer>

        {/* Status message */}
        {success && (
          <p className="text-center mt-4 text-sm text-gray-700">
            {success}
          </p>
        )}

      </div>
    </section>
  );
};

export default Form;