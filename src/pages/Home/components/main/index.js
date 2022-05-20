import React from 'react'
import {
  MainWrapper, MainLeft,
  MainRight, MainInfo,
  MainInfoTitle, MainInfoDescription,
  MainBtnWrap, MainBtn, MainFooter, MainFooterLeft, MainFooterRight
} from './style'
import RightImage from "assets/main/right.svg"
import FooterImage from 'assets/main/footer_image.png'

export function MainSection() {
  return (
    <>
      <MainWrapper>
        <MainLeft>
          <MainInfo>
            <MainInfoTitle>
              Tashkent State Agrarian University
            </MainInfoTitle>
            <MainInfoDescription>
              Applications are now Open for the Academic year 2022-2023 for  Undergraduate and Postgraduate courses!
            </MainInfoDescription>
          </MainInfo>
          <MainBtnWrap>
            <MainBtn type='button'>Apply</MainBtn>
          </MainBtnWrap>
        </MainLeft>
        <MainRight>
          <img src={RightImage} alt='right-image' />
        </MainRight>
        <MainFooter>
          <MainFooterLeft>
            <img src={FooterImage} alt="mainFooter" />
          </MainFooterLeft>
          <MainFooterRight>
            <p>Our knowledge forms the foundation of a sustainable, thriving and better world. </p>
          </MainFooterRight>
        </MainFooter>
      </MainWrapper>
    </>
  )
}
