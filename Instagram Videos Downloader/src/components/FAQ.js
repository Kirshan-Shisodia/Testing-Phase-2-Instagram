import React from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How does this tool work?",
      answer:
        "Our tool generates direct download links for files on Terabox by leveraging the platform’s CDN. It does not host or store any files; it simply facilitates easier access to your Terabox content.",
    },
    {
      question: "Is there a limit on the number of links I can generate?",
      answer:
        "No, you can generate as many direct download links as needed. Our tool is free to use, and there are no restrictions on the quantity of links you can create.",
    },
    {
      question: "What types of Terabox links does the downloader support?",
      answer:
        "The tool works for public Terabox sharing links, specifically for individual files. Currently, it does not support links to entire folders.",
    },
    {
      question: "Is it legal to use this tool?",
      answer:
        "Absolutely! Our Terabox downloader is designed to provide convenient access to files you already have permission to view on Terabox. It adheres to all copyright laws and terms of service.",
    },
    {
      question: "What is Terabox and why use it?",
      answer:
        "Terabox is a popular cloud storage service offering 1TB of free storage. It allows users to store, share, and earn money by sharing files. Our tool simplifies the process of downloading files from Terabox, enhancing user convenience.",
    },
    {
      question: "Can I use this tool on mobile devices?",
      answer:
        "Yes, our Terabox downloader is designed to work seamlessly on both desktop and mobile devices. You can generate direct download links from wherever you are.",
    },
    {
      question: "Do I need an account to use the direct link generator?",
      answer:
        "No account is required. Our tool is accessible to all users without the need for registration. Simply visit the website and start generating links immediately.",
    },
    {
      question: "Is my data secure when using this tool?",
      answer:
        "Yes, we prioritize user data security. The tool operates on the client side, and we do not collect or store any information. Your Terabox credentials and data remain private.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <p className="faq-question">
              <strong>Q: {faq.question}</strong>
            </p>
            <p className="faq-answer">A: {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
