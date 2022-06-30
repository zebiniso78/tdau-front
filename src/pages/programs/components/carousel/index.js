import { CarouselComponent } from 'components/carousel';
import { CustomCarouselComponent } from 'components/customCarousel';
import { ProgramProvider } from 'pages/programs/style';
import React from 'react';
import MainImage from 'assets/navbar/main.png';
import CarouselFirst from 'assets/carousel/carousel-one.png';
import CarouselThird from 'assets/carousel/carousel-third.png';
import CarouselFour from 'assets/carousel/carousel-four.png';

export default function CarouselComponents() {
  return (
    <ProgramProvider>
      <CustomCarouselComponent
        //   id={id}
        first={CarouselFirst}
        second={MainImage}
        third={CarouselThird}
        four={CarouselFour}
      />
    </ProgramProvider>
  );
}
