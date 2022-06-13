import React from 'react'
import ReactPlayer from 'react-player'
import { VideoPlayerProvider } from './style'

export function VideoPlayer({ url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U', type }) {
   return (
      <VideoPlayerProvider type={type}>
         <ReactPlayer
            // url={`${process.env.REACT_APP_API_SECOND_ROOT}/${url}`}
            url='https://youtu.be/07Swr7YVwXk'
         />
      </VideoPlayerProvider>
   )
}
