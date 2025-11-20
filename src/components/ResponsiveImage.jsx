import React, { useState } from 'react'

const fallbackSVG = (title = 'image') => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500' role='img' aria-label='${title} placeholder'>\n  <defs>\n    <linearGradient id='g' x1='0' x2='1'>\n      <stop offset='0' stop-color='#f3f4f6'/>\n      <stop offset='1' stop-color='#e6eefc'/>\n    </linearGradient>\n  </defs>\n  <rect width='100%' height='100%' fill='url(#g)'/>\n  <g fill='#cbd5e1' transform='translate(80,120)'>\n    <rect x='0' y='0' width='200' height='150' rx='8'/>\n    <rect x='230' y='0' width='480' height='30' rx='6'/>\n    <rect x='230' y='50' width='360' height='20' rx='6'/>\n    <rect x='230' y='90' width='320' height='20' rx='6'/>\n  </g>\n</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const ResponsiveImage = ({ src, alt = '', className = '', width, height }) => {
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = () => {
    setImgSrc(fallbackSVG(alt || 'placeholder'))
  }

  // Provide sensible defaults for width/height when not passed
  const style = {}
  if (width) style.width = width
  if (height) style.height = height

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
      style={style}
    />
  )
}

export default ResponsiveImage
