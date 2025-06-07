import React, { useState } from "react";
import "../css/Faq.css";

export const Faq = () => {
  const faqs = [
    {
      question: "What info do I need to provide for a quote?",
      answer:
        "Schematic, quantity, materials needed, and lead time expectations.",
    },
    {
      question: "Do you offer prototyping?",
      answer: "Yes, we do prototyping before bulk production.",
    },
    {
      question: "Where do you ship?",
      answer:
        "We ship across North America and internationally upon request.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div id="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="heading">
            Frequently <span>Asked Questions</span>
          </h2>
        </div>
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" onClick={() => toggle(i)}>
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
                </div>
                {openIndex === i && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
