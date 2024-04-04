"use client"
import { React, useEffect, useState } from 'react';
import { Canvas, } from '@react-three/fiber';
import * as THREE from 'three';
import Gallery from './Gallery';
import FPSStats from "react-fps-stats";


export default function Scene({url}) {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const loadedTextures = url.map((element) =>
      textureLoader.load(element.card_image.url)
    )
    
    setTextures(loadedTextures);
  }, []);

  return <>
    <div>
      <FPSStats />
    </div>
    <div className="absolute h-full w-full">
      <Canvas
          className='gl'
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
  </>
}

