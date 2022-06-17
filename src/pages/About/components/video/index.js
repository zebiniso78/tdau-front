import { VideoPlayer } from 'components/videoPlayer';
import React from 'react';

export function Video({ url }) {
  return (
    <>
      <VideoPlayer url={url} />
    </>
  );
}
