import React from 'react';
import './design-modeling.css';

export default function Design () {
  const bannerUrl = process.env.PUBLIC_URL + '/banners/design.png';

  return(
    <div>
      <div className="banner" style={{backgroundImage: `url(${bannerUrl})`}}>
           <h1 className="design">Design</h1>
      </div>

      {/* <div className="chairmen">
           <h1 className="underlined">Design Chairmen</h1>
      </div> */}
    </div>
  )
}
