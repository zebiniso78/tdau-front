import React from 'react'
import { ImageProvider, ImageTitle, Image } from './style'

export function ImageComponent({ title, image, alt }) {
   return (
      <ImageProvider>
         <ImageTitle>{title}</ImageTitle>
         <Image src={image} alt={alt} />
      </ImageProvider>
   )
}
