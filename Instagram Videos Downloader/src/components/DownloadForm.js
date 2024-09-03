import React, { useState } from "react";
import "../styles/DownloadForm.css";
import { NavLink } from "react-router-dom";

function DownloadForm() {
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleDownload = async () => {
    if (!link) {
      setMessage("Please enter instagram reel url");
      return;
    }

    setMessage("Processing...");

    try {
      const response = await fetch("http://localhost:5000/download-reel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to fetch reel");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      setVideoUrl(downloadUrl);

      setMessage("Reel Fetched Successfully");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="download-section">
        <h1>Download Instagram Reels & Videos</h1>
        <p>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            The Reels Downloader<span> </span>
          </NavLink>
          simplifies instagram reels and videos downloads. Skip instagram login,
          download directly from servers, ensuring privacy.
        </p>
        <input
          type="text"
          placeholder="Enter Terabox link here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit" onClick={handleDownload}>
          Download
        </button>
      </div>
      <div className="video-container">
        {videoUrl && (
          <div className="main-video-container">
            <video controls className="video-player">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <a
              href={videoUrl}
              download="instagram-reel.mp4"
              className="download-button"
            >
              Download Video
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default DownloadForm;
