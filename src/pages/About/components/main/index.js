import { CarouselComponent } from 'components/carousel';
import React from 'react';
import { MainProvider } from './style';
import { useParams } from 'react-router-dom';
import MainImage from 'assets/navbar/main.png';
import CarouselFirst from 'assets/carousel/carousel-one.png';
import CarouselThird from 'assets/carousel/carousel-third.png';
import CarouselFour from 'assets/carousel/carousel-four.png';

export function AboutMain() {
  const { id } = useParams();
  return (
    <MainProvider data-aos="zoom-in">
      <CarouselComponent
        id={id}
        first={CarouselFirst}
        second={MainImage}
        third={CarouselThird}
        four={CarouselFour}
      />
    </MainProvider>
  );
}
