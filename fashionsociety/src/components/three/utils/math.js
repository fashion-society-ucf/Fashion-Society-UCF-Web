export function offset(index){
  let stagger
  0 === index ? stagger = 1.1 : 1 === index ? stagger = 1.15 : 2 === index ? stagger = 1.2 : 3 === index ? stagger = 1.25 : 4 === index ? stagger  = 1.3 : 5 === index ? stagger = 1.35 : null
  return stagger
}

export function findX(width, scale, left, size, extra, x = 0){
  return (((-width / 2 + (scale / 2) + ((left + x) / size) * width + extra)))
}

export function findY(height, scale, top, size, extra, stagger, y = 0){
  return((((height / 2 - (scale / 2) - ((top - y  * stagger) / size) * height + extra))))
}

// (((-viewport.width / 2 + (mesh.current.scale.x / 2) + ((bounds.current.left + x) / size.width) * viewport.width + extra.current.x)))
