import React from 'react'
import { Circle, Svg, Wrapper } from './style';

export function FirebaseLoader(props) {
   return (
      <Wrapper {...props}>
         <Svg
            width="30px"
            height="30px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
         >
            <Circle
               fill="none"
               strokeWidth="6"
               strokeLinecap="round"
               cx="33"
               cy="33"
               r="30"
            />
         </Svg>
      </Wrapper>
   )
}
