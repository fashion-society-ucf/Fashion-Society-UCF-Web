import React, { useEffect, useState } from 'react'
import { urls } from '../../data/gallery.js'
import Gallery from '../three/Gallery/Gallery.jsx'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import FPSStats from "react-fps-stats";
import '../../index.css'

export default function Home() {
  const data = urls;
  const [textures, setTextures] = useState([]);


  useEffect(() => {
    const textureLoader = new THREE.TextureLoader(); // Create instance of texture loader
    const array = [...document.querySelectorAll('.js-tile')];
    const loadedTextures = array.map((element) =>
      textureLoader.load(element.getAttribute('data-src'))
    );
    setTextures(loadedTextures);
  }, []);
  
  return <>
      <main>
      <article>
        <div className="fixed bottom-0 left-0 h-extra-screen w-full pt-40 flex items-center justify-center bg-white overflow-hidden rounded-t-[4rem] js-t-mask js-grid">
          <div className="absolute inset-x-[-150%] s:inset-x-[-50%] l:inset-x-[-30%] xl:inset-x-[-17.5%] top-0 grid grid-cols-6 cursor-move js-grid-bounds">
          {data.map((media, index)=>(
              <div 
                key={index} 
                data-index={index} 
                className="relative">
                <div className="aspect"  ></div>
                <div className="absolute inset-5 js-tile " data-index={index} data-src={media.src}></div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none	 relative z-10 flex flex-col items-center justify-center">
            <img src="./k/focus_image.jpg" className="invisible pointer-events-none h-[60rem] w-auto grid-focused js-grid-focused"/>
            <div className="relative min-w-[24rem] h-[5rem] js-grid-content">
              {data.map((media, index)=>{
                return <p  key={index} className="absolute top-0 left-0 w-full text-18 opacity-0 text-center js-grid-text">{media.description}</p>
              })}
            </div>
          </div>
          <div>
            <FPSStats />
          </div>
          <div className="absolute h-full w-full">
            <Canvas
              className='gl z-5'
              camera={
                {
                  fov: 45,
                  zoom: 1 
                }
              }
            >
              <Gallery
                textures={textures}
              />
            </Canvas>
          </div>
        </div>
      </article>
    </main>
  </>
}
