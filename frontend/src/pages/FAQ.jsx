import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "How does Threads Connect work?",
      answer:
        "Threads Connect helps customers discover and connect with skilled tailors for custom clothing and fashion services.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Browse tailor profiles, choose a tailor, and submit your request with your details and measurements.",
    },
    {
      question: "Can tailors upload their designs?",
      answer:
        "Yes. Tailors can create profiles and showcase their previous work and designs.",
    },
    {
      question: "How do payments work?",
      answer:
        "Payments can be integrated later through supported payment methods.",
    },
    {
      question: "Can I contact a tailor directly?",
      answer:
        "Yes. Customers can communicate with tailors through the platform.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600">
            Find answers to common questions about Threads Connect.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="text-gray-600 mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default FAQ;