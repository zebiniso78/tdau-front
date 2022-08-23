import React, { useState } from 'react';
import { MainFooterImage } from './style';

import { MainLayoutProvider } from 'styles/globalStyle';
import { Login } from 'components/MainPage/Navbar/login';
import { Registration } from 'components/MainPage/Navbar/registration';
import { Verify } from 'components/MainPage/Navbar/verify';
import { useHistory } from 'react-router-dom';
import Ellipse from 'assets/rectangles/ellipse_top.png';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';
import HomeCarousel from 'components/homeCarousel';

export function MainSection() {
  const { t } = useTranslation();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);
  const [confirmModel, setConfirmModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const showModal = () => {
    Modal.info({
      title: t('alert-no-working-apply-title'),
      content: (
        <div>
          <p>{t('alert-no-working-apply')}</p>
        </div>
      ),

      onOk() {},
    });

    // if (localStorage.getItem('token')) {
    //   history.push('/personal-info');
    // } else {
    //   setIsModalVisible(true);
    // }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <MainLayoutProvider>
        <HomeCarousel />
        {/* <MainWrapper>
          <MainLeft data-aos="fade-right">
            <MainInfo>
              <TopTour>
                <p>{t('vr-tour')}</p>
              </TopTour>
              <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              <MainInfoDescription>
                {t('app-academic-year')} 2022-2023{' '}
                {t('upgraduate-postgraduate')}
              </MainInfoDescription>
            </MainInfo>
            <MainBtnWrap>
              <MainBtn type="button" onClick={showModal}>
                {t('apply')}
              </MainBtn>
            </MainBtnWrap>
          </MainLeft>
          <MainRight data-aos="fade-left">
            <img src={RightImage} alt="right-image" />
          </MainRight>
          <MainFooter>
            <MainFooterLeft>
              <img src={FooterImage} alt="mainFooter" />
            </MainFooterLeft>
            <MainFooterRight>
              <p style={{ marginBottom: 0 }}>{t('home-desc')}</p>
            </MainFooterRight>
          </MainFooter>
        </MainWrapper> */}
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
          // handleCancel={handleCancel}
        />
        <MainFooterImage>
          {/* <img src={Ellipse} alt="ellipse" /> */}
        </MainFooterImage>
      </MainLayoutProvider>
    </>
  );
}
