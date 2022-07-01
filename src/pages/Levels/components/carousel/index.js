import { CustomCarouselComponent } from 'components/customCarousel';
import React from 'react';
import { LevelProvider } from '../style';

export default function CarouselLevels({ id, picture, title, text }) {
  return (
    <LevelProvider>
      <CustomCarouselComponent
        id={id}
        first={picture}
        title={title}
        text={text}
      />
    </LevelProvider>
  );
}
