import React from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What is an Instagram Video Downloader?",
      answer:
        "It’s an online tool (web application) that lets you download Instagram videos, reels, photos, IGTV and carousel (album). In case you need to use it later offline. The FastDl Instagram downloader is the best tool for downloading from Instagram.",
    },
    {
      question:
        "What type of file formats does thereelsdownloader support for downloading?",
      answer:
        "The most convenient these days is the jpg file format for downloading images. As for the videos, the .mp4 file format is still considered the most popular worldwide, ensuring high quality and a small video file size.",
    },
    {
      question: "Which devices can I use the thereelsdownloader Downloader on?",
      answer:
        "The thereelsdownloader Downloader works seamlessly on any device equipped with a browser. Whether you're using a mobile phone, smartphone, tablet, notebook, laptop, or PC, you can access thereelsdownloader. It's compatible with operating systems such as Mac OS, Windows, iOS, and Linux. The tool has been thoroughly tested on multiple browsers including Chrome, Firefox, Opera, Safari, and Chromium, supporting both desktop and mobile versions.",
    },
    {
      question: "Are there any limits on the number of videos I can download?",
      answer:
        "There are absolutely no limits on the number of videos you can download from our platform. Whether you're downloading a few videos or a large collection, our service is designed to handle all your needs without any restrictions. You can freely save Instagram Reels, Stories, and videos at any time, ensuring you have access to the content you love whenever you need it.",
    },
    {
      question: "Can I save other than video content on this site?",
      answer:
        "Sure! Photos, Videos, Reels, and IGTV can be downloaded from Instagram for free. thereelsdownloader supports only Instagram, and other sources are not supported.",
    },
    {
      question: "Can I Download Photos and Videos from Any User?",
      answer:
        "Yes! But only from public accounts. We respect the user’s privacy/copyright. Downloading private videos through FastDl is not available and will not be. But we are working on a new browser extension for desktop browsers to help you download private posts directly from Instagram.",
    },
    {
      question:
        "What is the highest quality of images and videos I can download?",
      answer:
        "The quality of photos and videos depends on the original uploaded image. Still, usually, the highest image resolution is 1080x1350 pixels, which is the limit of Instagram. As for the video, it is HD (720p) in most cases.",
    },
    {
      question: "Instagram Reels download is allowed?",
      answer:
        "The short answer is: Yes, from personal posts, it's possible to download Instagram Reels. You can easily download Instagram Reels from your account to your smartphone. You can only download reels for personal use. Downloading Instagram Reels Videos is allowed as long as they are not utilized for commercial purposes.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions (FAQ)</h1>
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
