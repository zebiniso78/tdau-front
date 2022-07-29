import React from 'react';
import {CaruselWrapper} from './style';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { MainCarousel } from './components';
import SecondCarouselItem from './components/secondCarouselItem';

export function MainSection() {
  return (

    <CaruselWrapper>
      <Carousel autoplay dots={'false'} >
      <MainCarousel/>
      <SecondCarouselItem nomeric={2}/>
      <SecondCarouselItem nomeric={3} />
      <SecondCarouselItem nomeric={4} />
    </Carousel>
    </CaruselWrapper>

  );
}
