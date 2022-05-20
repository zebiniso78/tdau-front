import { CardComponent } from 'components/card'
import React from 'react'
import CardOne from "assets/cards/card-one.png"
import CardSecond from "assets/cards/card-second.png"
import CardThree from "assets/cards/card-three.png"
import CardFour from "assets/cards/card-four.png"
import { CardProvider, CardWrap } from "./style"
import { LandingTitle } from 'styles/globalStyle'
import Academia from "assets/cards/academiya.png"
import MagnusUniversity from "assets/cards/magnus_university.png"
import RussianUniversity from "assets/cards/russian_university.png"
import { Col, Row } from 'antd'



export function Cards() {
   return (
      <CardProvider>
         <LandingTitle>PARTNER UNIVERSITIES</LandingTitle>
         <CardWrap style={{justifyContent:'center'}}>
            <Row gutter={[16, 16]}>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardOne}
                     cardLogo={Academia}
                     title='WSB University  in Poland' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardSecond}
                     cardLogo={MagnusUniversity}
                     title='Vytautas Magnus university in Litva' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardThree}
                     cardLogo={RussianUniversity}
                     title='Volgograd State Agricultural
                     University in Russia' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardFour}
                     cardLogo={RussianUniversity}
                     title='Russian State Agrarian University
                     Moscow Timiryazev Agricultural Academy
                     ' />
               </Col>
            </Row>
         </CardWrap>
      </CardProvider>
   )
}
