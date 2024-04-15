import React from 'react';
import './design-modeling.css';

export default function Design () {
  const publicUrl = process.env.PUBLIC_URL;
  const bannerUrl = publicUrl + '/banners/design.png';
  const kylieUrl = publicUrl + '/eboard photos/kylie-headshot.JPG';
  const samaraUrl = publicUrl + '/eboard photos/samara-headshot.JPG';
  const christianUrl = publicUrl + '/eboard photos/christian-headshot.JPG';

  return(
    <div>
      <div className="banner" style={{backgroundImage: `url(${bannerUrl})`}}>
        <h1 className="design">Design</h1>
      </div>

      <div className="underlinedText">
        <span>Design Chairmen</span>
      </div>

      {/* <div className="chairmanImage">
        <div>
          <img src={kylieUrl} alt="Kylie Knickerbocker" />
          <div className="subtitle">Kylie Knickerbocker</div>
        </div>
        <div>
          <img src={samaraUrl} alt="Samara Dyal" />
          <div className="subtitle">Samara Dyal</div>
        </div>
        <div>
          <img src={christianUrl} alt="Christian Perry" />
          <div className="subtitle">Christian Perry</div>
        </div>
      </div> */}

      <div className="chairmanImage">
        <img src={kylieUrl} alt="Kylie Knickerbocker" />
        <img src={samaraUrl} alt="Samara Dyal" />
        <img src={christianUrl} alt="Christian Perry" />
      </div>
      <div className="chairmanSubtitle">
        <div className="subtitle">Kylie Knickerbocker</div>
        <div className="subtitle">Samara Dyal</div>
        <div className="subtitle">Christian Perry</div>
      </div>

    </div>
  )
}
