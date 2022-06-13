import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import {
  Image,
  CarouselLayout,
  TextContent,
  LeftContent,
  RightContent,
} from './style';
import 'antd/dist/antd.css';
import { MainBtn, MainBtnWrap } from 'pages/Home/components/main/style';
import { ReactComponent as Facebook } from 'assets/carousel/icon/f.svg';
import { ReactComponent as Telegram } from 'assets/carousel/icon/tg.svg';
import { ReactComponent as Instagram } from 'assets/carousel/icon/intagram.svg';
import { useHistory } from 'react-router-dom'
import { Login } from 'components/MainPage/Navbar/login';
import { Registration } from 'components/MainPage/Navbar/registration';
import { Verify } from 'components/MainPage/Navbar/verify';
import { fetchData } from 'hooks/useFetch';
import { admissionApi } from 'services/api/pagesApi';
import Cookies from 'js-cookie';
const contentStyle = {
  width: '100vw',
  // minHeight: '100vh',
  // color: 'red',
  lineHeight: '160px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function CarouselComponent({ first, second, third, four }) {
  let token = localStorage.getItem('token');
  const [modal, setModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);
  const [confirmModel, setConfirmModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [entityID, setEntityID] = useState([])
  const [loader, setLoader] = useState(false);
  const history = useHistory()
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function apply(id) {
    console.log(id)
    localStorage.setItem('university_id', JSON.stringify(id));
    if (token && localStorage.getItem('university_id')) {
      history.push('/university-admissions/personal-info');
    } else {
      showModal()
      // localStorage.setItem('university_id', JSON.stringify(id));
    }
  }
  useEffect(() => {
    fetchData(admissionApi.allUniversityID(null), setEntityID, setLoader)
  }, [])

  return (
    <>

      <Carousel autoplay effect="fade">
        <CarouselLayout style={contentStyle}>
          <Image src={first} alt="first" />
          <TextContent className="tdau-item">
            <LeftContent>
              <h2>WSB University in Poland</h2>
              <p>
                Applications are now Open for the Academic year 2022-2023 for
                Undergraduate and Postgraduate courses!
              </p>
              <MainBtnWrap style={{ marginTop: '16px' }}>

                <MainBtn type="button" onClick={() => apply(entityID ? entityID[0]?.id : 22)}>Apply</MainBtn>
              </MainBtnWrap>
            </LeftContent>
            <RightContent className="tdau-item-two">
              <div className="item">
                <a href="https://www.facebook.com/asadbek.azamov.399">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/azamov_9909/">
                  <Instagram />
                </a>
                <a href="https://t.me/AsadbekAzamov01">
                  <Telegram />
                </a>
                <div className="line"></div>
              </div>
            </RightContent>
          </TextContent>
        </CarouselLayout>

        <CarouselLayout style={contentStyle}>
          <Image src={second} alt="second" />
          <TextContent className="tdau-item">
            <LeftContent>
              <h2>Vytautas Magnus University</h2>
              <p>
                Applications are now Open for the Academic year 2022-2023 for
                Undergraduate and Postgraduate courses!
              </p>
              <MainBtnWrap style={{ marginTop: '16px' }}>
                <MainBtn type="button" onClick={() => apply(entityID ? entityID[1]?.id : 22)}>Apply</MainBtn>
              </MainBtnWrap>
            </LeftContent>
            <RightContent className="tdau-item-two">
              <div className="item">
                <a href="https://www.facebook.com/asadbek.azamov.399">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/azamov_9909/">
                  <Instagram />
                </a>
                <a href="https://t.me/AsadbekAzamov01">
                  <Telegram />
                </a>
                <div className="line"></div>
              </div>
            </RightContent>
          </TextContent>
        </CarouselLayout>

        <CarouselLayout style={contentStyle}>
          <Image src={third} alt="third" />
          <TextContent className="tdau-item">
            <LeftContent>
              <h2>Volgograd State Agricultural University</h2>
              <p>
                Applications are now Open for the Academic year 2022-2023 for
                Undergraduate and Postgraduate courses!
              </p>
              <MainBtnWrap style={{ marginTop: '16px' }}>
                <MainBtn type="button" onClick={() => apply(entityID ? entityID[2]?.id : 22)}>Apply</MainBtn>
              </MainBtnWrap>
            </LeftContent>
            <RightContent className="tdau-item-two">
              <div className="item">
                <a href="https://www.facebook.com/asadbek.azamov.399">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/azamov_9909/">
                  <Instagram />
                </a>
                <a href="https://t.me/AsadbekAzamov01">
                  <Telegram />
                </a>
                <div className="line"></div>
              </div>
            </RightContent>
          </TextContent>
        </CarouselLayout>

        <CarouselLayout style={contentStyle}>
          <Image src={four} alt="four" />
          <TextContent className="tdau-item">
            <LeftContent>
              <h2>Moscow Timiryazev Agricultural Academy</h2>
              <p>
                Applications are now Open for the Academic year 2022-2023 for
                Undergraduate and Postgraduate courses!
              </p>
              <MainBtnWrap style={{ marginTop: '16px' }}>
                <MainBtn type="button" onClick={() => apply(entityID ? entityID[3]?.id : 22)}>Apply</MainBtn>
              </MainBtnWrap>
            </LeftContent>
            <RightContent className="tdau-item-two">
              <div className="item">
                <a href="https://www.facebook.com/asadbek.azamov.399">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/azamov_9909/">
                  <Instagram />
                </a>
                <a href="https://t.me/AsadbekAzamov01">
                  <Telegram />
                </a>
                <div className="line"></div>
              </div>
            </RightContent>
          </TextContent>
        </CarouselLayout>

      </Carousel>
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
        setModal={setModal}
        registerModel={registerModel}
        setPhoneNumber={setPhoneNumber}
        isModalVisible={isModalVisible}
      />
      <Verify
        setConfirmModel={setConfirmModel}
        setRegisterModel={setRegisterModel}
        confirmModel={confirmModel}
        phoneNumber={phoneNumber}
      />
    </>

  );
}
