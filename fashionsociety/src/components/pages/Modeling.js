import React from 'react';
import './design-modeling.css';

export default function Modeling () {
  const publicUrl = process.env.PUBLIC_URL;
  const bannerUrl = publicUrl + '/banners/modeling.png';
  const eleonoraUrl = publicUrl + '/eboard photos/eleonora-headshot.JPG';
  const robinUrl = publicUrl + '/eboard photos/robin-headshot.JPG';
  const avalonUrl = publicUrl + '/eboard photos/avalon-headshot.JPG';

  return(
    <div>
      <div className="banner" style={{backgroundImage: `url(${bannerUrl})`}}>
           <h1 className="modeling">Modeling</h1>
      </div>

      <div className="underlinedText">
        <span>Modeling Chairmen</span>
      </div>

      {/* <div className="chairmanImage">
        <div>
          <img src={eleonoraUrl} alt="Eleonora Yordanova" />
          <div className="subtitle">Eleonora Yordanova</div>
        </div>
        <div>
          <img src={robinUrl} alt="Robin Thomas" />
          <div className="subtitle">Robin Thomas</div>
        </div>
        <div>
          <img src={avalonUrl} alt="Avalon Ramsey" />
          <div className="subtitle">Avalon Ramsey</div>
        </div>
      </div> */}

      <div className="chairmanImage">
        <img src={eleonoraUrl} alt="Eleonora Yordanova" />
        <img src={robinUrl} alt="Robin Thomas" />
        <img src={avalonUrl} alt="Avalon Ramsey" />
      </div>
      <div className="chairmanSubtitle">
        <div className="subtitle">Eleonora Yordanova</div>
        <div className="subtitle">Robin Thomas</div>
        <div className="subtitle">Avalon Ramsey</div>
      </div>
      
    </div>
  )
}
