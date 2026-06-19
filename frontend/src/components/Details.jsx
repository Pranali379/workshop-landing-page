import React from "react";

const Details = () => {
  const items = [
    { label: "Age Group", value: "8–14 Years", emoji: "👧" },
    { label: "Duration", value: "4 Weeks", emoji: "⏳" },
    { label: "Mode", value: "Online", emoji: "🌐" },
    { label: "Fee", value: "₹2,999", emoji: "💰" },
    { label: "Start Date", value: "15 July 2026", emoji: "📅" },
  ];

  return (
    <section id="details" className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Workshop Details
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-pink-50 border rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">{item.emoji}</div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800">{item.value}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Details;