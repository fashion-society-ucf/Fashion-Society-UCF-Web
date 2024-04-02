import React from 'react';
import '../../App.css';

// function ImageSlider() {
//  return (
//    <div className="image-slider">
//      {/* Your slider implementation */}
//    </div>
//  );
//}


function Beauty() {
  return (
    <div>
      {/* Header */}
      <div className="beauty-header" style={{ backgroundImage: 'url(/committees/beauty.png)' }}> 
        <div className="beauty-container">
          <h1 className="beauty-title">Beauty</h1>
        </div>
        </div>

      {/* Description Box */ }
      <div className="des-container">
        <div className="des-box">
            <p className="description">The beauty committee is an inclusive group that celebrates 
                self-expression and empowers members through all things beauty. We explore makeup 
                artistry, history, nail techniques, and hairstyling trends while fostering a 
                supportive community where enthusiasts of all levels can share, learn, and grow together.
            </p>
        </div>
      </div>

      {/* Gallery */ }
      <div className="gallery-box">

      </div>

    </div>
  );
}

export default Beauty;