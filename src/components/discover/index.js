import React from 'react'
import { DiscoverProvider, DiscoverLeft, DiscoverRight, Title } from './style'

export function Discover({type, firstInfo, secondInfo}) {
   return (
      <DiscoverProvider>
         <DiscoverLeft>
            <Title>About.</Title>
         </DiscoverLeft>
         <DiscoverRight discoverType={type}>
            <p>
               {firstInfo}
            </p>
            <p>{secondInfo}</p>
         </DiscoverRight>
      </DiscoverProvider>
   )
}
