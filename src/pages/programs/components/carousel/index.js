import { CustomCarouselComponent } from 'components/customCarousel';
import { ProgramProvider } from 'pages/programs/style';
import React from 'react';

export default function CarouselComponents({ id, picture, title, text }) {
  return (
    <ProgramProvider>
      <CustomCarouselComponent
        id={id}
        first={picture}
        title={title}
        text={text}
      />
    </ProgramProvider>
  );
}
