import React from 'react';
import { MainWrapper, MainCard, CarouselH2 } from './style';



function SecondCarouselItem(props) {
    return (
        <MainWrapper backgroundImage={`https://picsum.photos/1400/800?random=${props.nomeric}`}>
            <MainCard>
                <CarouselH2>Carousel page {props.nomeric}</CarouselH2>
            </MainCard>
        </MainWrapper>
    );
}

export default SecondCarouselItem;