import React from 'react'
import { Player, BigPlayButton } from 'video-react';


export function VideoPlayer({ url }) {
   console.log(url, 'url')
   return (
      <Player
         playsInline
         poster="/assets/poster.png"
         src={`${process.env.REACT_APP_API_SECOND_ROOT}` + url}
      >
         <BigPlayButton position="center" />
      </Player>
   )

}

