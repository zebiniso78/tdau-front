import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Image, CarouselLayout } from './style'

const contentStyle = {
   width: '100vw',
   height: '100vh',
   color: 'red',
   lineHeight: '160px',
   textAlign: 'center',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
};

export function CarouselComponent({ first, second, third, four }) {
   return (
      <Carousel autoplay effect="fade">
         <div>
            <CarouselLayout style={contentStyle}>
               <Image src={first} alt='first' />
            </CarouselLayout>
         </div>
         <div>
            <CarouselLayout style={contentStyle}>
               <Image src={second} alt='second' />
            </CarouselLayout>
         </div>
         <div>
            <CarouselLayout style={contentStyle}>
               <Image src={third} alt="third" />
            </CarouselLayout>
         </div>
         <div>
            <CarouselLayout style={contentStyle}>
               <Image src={four} alt="four" />
            </CarouselLayout>
         </div>
      </Carousel>
   )
}
