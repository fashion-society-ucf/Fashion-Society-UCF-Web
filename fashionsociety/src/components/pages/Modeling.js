import React from 'react';
import './design-modeling.css';

export default function Modeling () {
  const bannerUrl = process.env.PUBLIC_URL + '/banners/modeling.png';

  return(
      <div className="banner" style={{backgroundImage: `url(${bannerUrl})`}}>
           <h1 className="modeling">Modeling</h1>
      </div>
  )
}
