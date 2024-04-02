import React, { useEffect } from 'react';
import '../../App.css';

const SocialMedia = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="social-media-header" style={{ backgroundImage: 'url(/social-media-photos/cover_full.png)' }}>
        <div className="social-media-container">
          <h1 className="social-media-title">Social Media</h1>
        </div>
      </div>

      {/* Description Box */}
      <div className="social-media-section">
        <div className="social-media-description-box">
          <p>
            The Social Media committee is all media curated by Fashion Society
            that is put out online on the social media platforms, Instagram and
            TikTok. The goal is to establish a more prominent online presence while
            showcasing the amazing work Fashion Society does!
          </p>
        </div>

        {/* Social Media Box */}
        <div className="social-media-links-box">
            <div className="social-media-icon-group">
              <a href="https://www.instagram.com/fashionsocietyucf/" className="social-media-link">
                <img src="/social-media-photos/instagram_icon.png" alt="Instagram" />
              </a>
              <p className="instagram-handle">@fashionsocietyucf</p>
            </div>
            <div className="social-media-icon-group">
              <a href="https://www.tiktok.com/@fashionsocietyucf" className="social-media-link">
                <img src="/social-media-photos/tiktok_icon.webp" alt="TikTok" />
              </a>
              <p className="tiktok-handle">@fashionsocietyucf</p>
            </div>
        </div>
      </div>

      {/* Social Media Chairmen and Instagram Embed */}
      <div className="social-media-chairmen-container">
        <div className="smc-title-container">
          <h2 className="smc-title">Social Media Chairmen</h2>
          <div className="title-line"></div>
        </div>

        <div className="sm-chairmen">
          <div className="chairman-container" id="chairman-1">
            <img src="/social-media-photos/val_hopper.png" alt="Val Hopper" className="chairman-image" />
            <p className="chairman-name">Val Hopper</p>
          </div>
          <div className="chairman-container" id="chairman-2">
            <img src="/social-media-photos/tamar_payne.png" alt="Tamar Payne" className="chairman-image" />
            <p className="chairman-name">Tamar Payne</p>
          </div>
        </div>

        <div className="instagram-embed-container">
          {/* Instagram embed will go here */}
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-container">
        <div className="gallery-box">
          <div className="gallery-item"><img src="/social-media-photos/p1.png" alt="Description" /></div>
          <div className="gallery-item"><img src="/social-media-photos/p2.png" alt="Description" /></div>
          <div className="gallery-item"><img src="/social-media-photos/p3.png" alt="Description" /></div>
          <div className="gallery-item"><img src="/social-media-photos/p4.png" alt="Description" /></div>
          <div className="gallery-item"><img src="/social-media-photos/p5.png" alt="Description" /></div>
          <div className="gallery-item"><img src="/social-media-photos/p6.png" alt="Description" /></div>
        </div>

      </div>

      {/* Form Link Box */}
      <div className="form-box">
        {/* CHANGE TO FORM LINK */}
        <a href="https://ucf.campuslabs.com/engage/organization/fashionsociety" className="interest-form-link" target="_blank" rel="noopener noreferrer">
          Interested in Social Media Committee? Fill out our membership form!
        </a>
      </div>

    </div>
  );
};

export default SocialMedia;