import * as THREE from 'three';
import { React, useEffect, useState, useRef, } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import Media from './Media'
import gsap from 'gsap'
import normalizeWheel from 'normalize-wheel'
import useTouchEvents from '../hooks/useTouchEvents'


export default function Gallery({textures}){

  const canvasRef = useRef([...document.getElementsByTagName("canvas")][0])
  const [gallery, setGallery] = useState(null)
  const [medias, setMedias] = useState(null)
  const [texts, setTexts] = useState(null)
  const [focusedTile, setFocusedTile] = useState(null)
  

  const [focus, setFocus] = useState({
    index: null,
    prevIndex: null,
    state: false,
  })

  const isDown = useRef(false)
  const hit = useRef() // used to detect click events in three

  const scroll = useRef({
    x : {
    target: 0,
    current: 0,
    ease: 0.1,
    last: 0,
    position: 0,
    start: 0,
    direction: 'right'
  },
  y : {
    target: 0,
    current: 0,
    ease: 0.1,
    last: 0,
    position: 0,
    start: 0,
    direction: 'bottom'
  }
})

const planeGeometry = new THREE.PlaneGeometry(1, 1, 20, 20);
const {scene, camera, raycaster, pointer} = useThree()

  useEffect(()=>{
    setGallery(document.querySelector('.js-grid-bounds'))
    setMedias([...document.querySelectorAll('.js-tile')])
    setFocusedTile(document.querySelector('.js-grid-focused'))
    setTexts([...document.querySelectorAll('.js-grid-text')])
  },[])

  useFrame(()=>{

    scroll.current.y.current = gsap.utils.interpolate(
      scroll.current.y.current,
      scroll.current.y.target,
      scroll.current.y.ease
    ) 

    scroll.current.x.current = gsap.utils.interpolate(
      scroll.current.x.current,
      scroll.current.x.target,
      scroll.current.x.ease
    ) 
    
    if (scroll.current.x.current > scroll.current.x.last) {
      scroll.current.x.direction = 'left';
    } else if (scroll.current.x.current < scroll.current.x.last) {
      scroll.current.x.direction = 'right';
    }
    scroll.current.x.last = scroll.current.x.current

    if (scroll.current.y.current > scroll.current.y.last) {
      scroll.current.y.direction = 'top';
    } else if (scroll.current.y.current < scroll.current.y.last) {
      scroll.current.y.direction = 'bottom';

    }
    scroll.current.y.last = scroll.current.y.current
  })

  
  const onWheel = (event) =>{
    if(focus.state) return

    const { pixelY, pixelX } = normalizeWheel(event)

    scroll.current.y.target += pixelY / 6
    scroll.current.x.target -= pixelX / 6
  }

  const onTouchDown = (event) => {
    isDown.current = true

    scroll.current.x.position = scroll.current.x.current
    scroll.current.y.position = scroll.current.y.current


    scroll.current.x.start  = event.touches
    ? event.touches[0].clientX
    : event.clientX

    scroll.current.y.start  = event.touches
      ? event.touches[0].clientY
      : event.clientY


  }

  const onTouchMove = (event) =>{
    if (!isDown.current || focus.state) return

    const x = event.touches
    ? event.touches[0].clientX
    : event.clientX
    
    const y = event.touches
    ? event.touches[0].clientY
    : event.clientY

    const distanceX = scroll.current.x.start - x
    const distanceY = scroll.current.y.start - y

    scroll.current.x.target = (scroll.current.x.position + -distanceX)
    scroll.current.y.target = (scroll.current.y.position + distanceY)

  }

  const onTouchUp = () =>{
    isDown.current = false

    const targeta = Math.round(scroll.current.x.target)
    const position = Math.round(scroll.current.x.position)
    
    if(targeta === position){
      raycaster.setFromCamera(pointer, camera)
      const intersects = raycaster.intersectObjects(scene.children)

      if(intersects.length > 0){
        const obj = intersects[0].object
        hit.current = obj.index
  
        // initially focus state is false
        !focus.state ? onOpen(hit.current) : onClose()
      }else{
        onClose()
      }

    }
  }

  const onOpen = (index) => {
    setFocus({
      index, 
      prevIndex: null,
      state: true,
    })
  }
  
  const onClose = () =>{
    setFocus({
      prevIndex: focus.index,
      index: null,
      state: false,
    })
  }

  useTouchEvents(canvasRef, onWheel, onTouchDown, onTouchMove, onTouchUp)
  if (medias == null) return null;
  
  return <>
     {medias.map((media, index) =>
      <Media
        key={index}
        index={index}
        element={media}
        text={texts[index]}
        focusElement={focusedTile}
        galleryElement={gallery}
        geometry={planeGeometry}
        texture={textures[index]}
        scroll={scroll.current}
        column = {index % 6}
        focus ={focus}
      />
    )} 
  </>
}