import React from 'react'
import '../../../App.css';
import coverImage from './cover.png'; 

const SocialMedia = () => {
  return (
    /* Header */
    <div className="social-media-header" style={{ backgroundImage: `url(${coverImage})` }}>
        <div className="social-media-container">
          <h1 className="social-media-title">Social Media</h1>
        </div>
    </div>
  );
};
      
export default SocialMedia;
