import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">

      {/* Decorative floating blobs */}
      <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-3xl top-[-80px] left-[-80px]"></div>
      <div className="absolute w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>
      <div className="absolute w-56 h-56 bg-blue-300/30 rounded-full blur-3xl top-40 right-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border rounded-full shadow-sm text-sm text-gray-700">
            🚀 Fun Learning Adventure 2026
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            AI & Robotics Summer Workshop for{" "}
            <span className="text-pink-500">Young Innovators</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            A joyful 4-week journey where kids explore AI, robotics, and creativity
            through hands-on experiments, games, and mini-projects.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-4 py-2 bg-white rounded-full shadow-sm border">
              👧 Age: 8–14 Years
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm border">
              ⏳ 4 Weeks Fun
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm border">
              🌐 Online Classes
            </span>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm border">
              🎯 Hands-on Projects
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
           <a
              href="#form"
              className="px-7 py-3 bg-pink-500 text-white rounded-2xl shadow-md hover:bg-pink-600 transition-all inline-block">
              Enroll Now
           </a>

            <button className="px-7 py-3 bg-white border rounded-2xl text-gray-700 hover:shadow-md transition">
              See Curriculum
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="flex-1 relative">

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

            {/* Top Illustration Area */}
            <div className="h-64 bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-200 flex items-center justify-center text-gray-700 font-semibold">
              🎨 Kids Learning Robotics Playground
            </div>

            {/* Info Grid */}
            <div className="p-6 grid grid-cols-2 gap-4">

              <div className="bg-pink-50 rounded-xl p-4 border">
                <p className="text-gray-500 text-sm">Projects</p>
                <p className="font-bold text-gray-800">6+ Fun Builds</p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-4 border">
                <p className="text-gray-500 text-sm">Activities</p>
                <p className="font-bold text-gray-800">Interactive Games</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border">
                <p className="text-gray-500 text-sm">Learning Style</p>
                <p className="font-bold text-gray-800">Play + Code</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border">
                <p className="text-gray-500 text-sm">Certificate</p>
                <p className="font-bold text-gray-800">Yes 🎓</p>
              </div>

            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border text-sm">
            ⭐ Beginner Friendly
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;