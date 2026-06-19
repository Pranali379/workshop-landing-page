import React from "react";

const Outcomes = () => {
  const points = [
    "Understand basic AI concepts",
    "Build simple robotics logic",
    "Learn creative problem solving",
    "Hands-on mini projects",
    "Improve computational thinking",
  ];

  return (
    <section id="outcome" className="py-16 px-6 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What You Will Learn ✨
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-4 hover:shadow-md transition"
            >
              {/* Icon bubble */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold">
                ✓
              </div>

              {/* Text */}
              <p className="text-gray-700 font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Outcomes;