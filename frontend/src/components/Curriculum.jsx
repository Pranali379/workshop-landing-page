import React from "react";

const Curriculum = () => {
  const weeks = [
    {
      week: "Week 1",
      title: "Introduction to AI",
      topics: [
        "What is Artificial Intelligence?",
        "AI in Everyday Life",
        "Fun AI Activities",
      ],
    },
    {
      week: "Week 2",
      title: "Robotics Fundamentals",
      topics: [
        "How Robots Work",
        "Sensors & Commands",
        "Simple Robot Logic",
      ],
    },
    {
      week: "Week 3",
      title: "Build & Experiment",
      topics: [
        "Mini AI Projects",
        "Problem Solving Challenges",
        "Interactive Activities",
      ],
    },
    {
      week: "Week 4",
      title: "Final Showcase",
      topics: [
        "Capstone Project",
        "Presentation Skills",
        "Certificate & Celebration",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Workshop Curriculum 📚
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A structured 4-week journey from AI basics to exciting robotics projects.
        </p>

        <div className="space-y-8">

          {weeks.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-6 shadow-sm border hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>
                  <span className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm mb-3">
                    {item.week}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

              </div>

              <ul className="mt-4 space-y-2">
                {item.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span>✅</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Curriculum;
