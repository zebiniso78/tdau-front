import React from 'react'
import { Player, BigPlayButton } from 'video-react';
import ReactPlayer from 'react-player'
import Poster from 'assets/poster/poster.png'
import { PlayerProvider } from './style'

export function VideoPlayer({ url }) {
   return (
      <>
         {
            url?.includes('youtube.com') ?
               <PlayerProvider>
                  <ReactPlayer url={`${process.env.REACT_APP_API_SECOND_ROOT}/` + url} />
               </PlayerProvider>
               :
               <Player
                  playsInline
                  poster={Poster}
                  src={`${process.env.REACT_APP_API_SECOND_ROOT}/` + url}
               // src='https://www.youtube.com/watch?v=Y6eD0V2e2k4'
               // src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
               // src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
               >
                  <BigPlayButton position="center" />
               </Player>
         }

      </>

   )

}

