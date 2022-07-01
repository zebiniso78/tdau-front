import { Video } from 'pages/About/components/video';
import React from 'react';
import CarouselComponents from './components/carousel';
import AboutComponents from './components/about';
import Programs from './components/programs';
import Branches from './components/branches';
import ProgramPic from 'assets/program.png';
export default function ProgramsPage() {
  return (
    <div>
      <CarouselComponents
        id={'tdau'}
        picture={ProgramPic}
        title="Tashkent State Agrarian University"
        text="Applications are now Open for the Academic year 2022-2023
for Undergraduate and Postgraduate courses!"
      />
      <AboutComponents />
      <Video url="https://www.youtube.com/watch?v=RRaZwB56djI&ab_channel=NevoMusic" />
      <Programs />
      <Branches />
    </div>
  );
}
