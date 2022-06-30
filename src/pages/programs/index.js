import { Video } from 'pages/About/components/video';
import React from 'react';
import CarouselComponents from './components/carousel';
import AboutComponents from './components/about';
import Programs from './components/programs';
import Branches from './components/branches';
export default function ProgramsPage() {
  return (
    <div>
      <CarouselComponents />
      <AboutComponents />
      <Video url="https://www.youtube.com/watch?v=RRaZwB56djI&ab_channel=NevoMusic" />
      <Programs />
      <Branches />
    </div>
  );
}
