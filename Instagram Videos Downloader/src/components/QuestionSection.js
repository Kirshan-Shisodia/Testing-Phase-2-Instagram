import React from "react";
import "../styles/QuestionSection.css";

function QuestionSection() {
  return (
    <div className="questionSection">
      <div className="question-one">
        <h2>What is Terabox ?</h2>
        <p>
          TeraBox is a free cloud storage tool, offers 1TB of secure storage for
          documents, file sharing, and videos.You can easily transfer files
          across devices and share with friends. Simply register an account,
          upload your data through the web, desktop, or mobile app, and access
          it from any connected device.
        </p>
        <p>
          It ensures data safety with regular backups, either automatic or
          manual. You can manage your files effortlessly with features like
          folders for organization, version control for tracking changes, and
          easy file sharing. TeraBox simplifies cloud storage, providing
          accessible and secure data archiving.
        </p>
      </div>
      <div className="question-two">
        <h2>What is TeraDownloader.com?</h2>
        <p>
          TeraDownloader.com is a helpful tool for downloading files and videos
          shared through Terabox links. Normally, Terabox requires you to log in
          to access these files. However, with our Terabox downloader, you can
          easily download videos and files directly from terabox servers. It's
          important to note that we don&apos;t store any files or data. Our goal
          is to provide a user-friendly solution for downloading content.
          Download your desired files with TeraDownloader.com.
        </p>
      </div>
    </div>
  );
}

export default QuestionSection;
