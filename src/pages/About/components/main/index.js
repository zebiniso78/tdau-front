import { CarouselComponent } from 'components/carousel';
import React from 'react';
import { MainProvider } from './style';
import MainImage from 'assets/navbar/main.png';
import CarouselFirst from 'assets/carousel/carousel-one.png';
import CarouselThird from 'assets/carousel/carousel-third.png';
import CarouselFour from 'assets/carousel/carousel-four.png';

export function AboutMain() {
  return (
    <MainProvider>
      <CarouselComponent
        first={CarouselFirst}
        second={MainImage}
        third={CarouselThird}
        four={CarouselFour}
      />
    </MainProvider>
  );
}
