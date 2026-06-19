import React, { useState } from "react";

const FAQ = () => {
  const data = [
    {
      q: "Is this workshop beginner friendly?",
      a: "Yes, absolutely. It is designed for students aged 8–14 with no prior coding experience.",
    },
    {
      q: "What will my child need for this course?",
      a: "Just a laptop and stable internet connection. All tools are browser-based and easy to use.",
    },
    {
      q: "Will there be a certificate after completion?",
      a: "Yes, every participant receives a certificate after successfully completing the workshop.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions ❓
        </h2>

        {/* Accordion */}
        <div className="space-y-4">

          {data.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 bg-gradient-to-r from-pink-50 to-blue-50 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {item.q}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-600 bg-white">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;