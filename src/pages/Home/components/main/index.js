import React, { useState } from 'react'
import {
  MainWrapper, MainLeft,
  MainRight, MainInfo,
  MainInfoTitle, MainInfoDescription,
  MainBtnWrap, MainBtn, MainFooter, MainFooterLeft, MainFooterRight, TopTour
} from './style'
import RightImage from "assets/main/right.svg"
import FooterImage from 'assets/main/footer_image.png'
import { MainLayoutProvider } from 'styles/globalStyle'
import { Login } from 'components/MainPage/Navbar/login'
import { Registration } from 'components/MainPage/Navbar/registration'
import { Verify } from 'components/MainPage/Navbar/verify'
import { useHistory } from 'react-router-dom'

export function MainSection() {
  const history = useHistory()
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);
  const [confirmModel, setConfirmModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const showModal = () => {
    if (localStorage.getItem('token')) {
      history.push("/personal-info")
    } else {
      setIsModalVisible(true);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <MainLayoutProvider>
        <MainWrapper>
          <MainLeft>
            <MainInfo>
              <TopTour>360° VR tour</TopTour>
              <MainInfoTitle>
                Tashkent State Agrarian University
              </MainInfoTitle>
              <MainInfoDescription>
                Applications are now Open for the Academic year 2022-2023 for  Undergraduate and Postgraduate courses!
              </MainInfoDescription>
            </MainInfo>
            <MainBtnWrap>
              <MainBtn
                type='button'
                onClick={showModal}>Apply</MainBtn>
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
        <Login
          setModal={setModal}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleCancel={handleCancel}
          modal={modal}
          setRegisterModel={setRegisterModel}
        />
        <Registration
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          handleCancel={handleCancel}
          registerModel={registerModel}
          setPhoneNumber={setPhoneNumber}
        />
        <Verify
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          confirmModel={confirmModel}
          phoneNumber={phoneNumber}
          handleCancel={handleCancel}
        />
      </MainLayoutProvider>
    </>
  )
}
