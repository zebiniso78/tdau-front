import React from 'react';
import { DiscoverProvider, DiscoverLeft, DiscoverRight, Title } from './style';

export function Discover({ type, firstInfo, secondInfo }) {
  return (
    <DiscoverProvider>
      <DiscoverLeft data-aos="fade-right">
        <Title data-aos="fade-right"></Title>
      </DiscoverLeft>
      <DiscoverRight data-aos="fade-up" discoverType={type}>
        <p>{firstInfo}</p>
        <p>{secondInfo}</p>
      </DiscoverRight>
    </DiscoverProvider>
  );
}
