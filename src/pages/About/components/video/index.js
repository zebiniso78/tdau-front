import { VideoPlayer } from 'components/videoPlayer'
import React from 'react'

export function Video({ type, url }) {
   return (
      <>
         <VideoPlayer type={type} url={url} />
      </>
   )
}
