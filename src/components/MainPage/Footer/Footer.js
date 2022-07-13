import React from 'react';
import { Container } from '../../../common/grid';
import { MyFooter } from './FooterStyle';
import { FiFacebook } from 'react-icons/fi';
import { RiYoutubeLine } from 'react-icons/ri';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import Collect from '../../../assets/collect.png';
import DataCenter from '../../../assets/dataCenter.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const ContactData = [
    {
      title: t('address'),
      text: '100174, Тошкент шаҳри, Олмазор тумани Университет кўчаси, 7-уй',
    },
    {
      title: t('phone'),
      text: '0 (371) 207-1700',
    },
    {
      title: t('fax'),
      text: '0 (371) 207-1700',
    },
    {
      title: t('email'),
      text: 'info@innofund.uz',
    },
    {
      title: t('our-social'),
      text: [
        <FiFacebook />,
        <BsInstagram />,
        <BsTelegram />,
        <RiYoutubeLine />,
      ],
    },
  ];
  return (
    <>
      <MyFooter>
        <Container>
          <h2>{t('contact')}</h2>

          <ul>
            {ContactData.map((e) => (
              <li>
                <h4>{e.title}: </h4>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>
          <div className="days">
            <div className="working-days">
              <h4>{t('working-day')}:</h4>
              <div>
                <p>
                  <span>Душ-Жум:</span>9:00 — 18:00
                </p>
                <p>
                  <span>{t('Lunch')}:</span>13:00 — 14:00
                </p>
              </div>
            </div>
            <div className="add-days">
              <h4>{t('reseption-day')} :</h4>
              <div>
                <p>
                  <span>Пятница:</span>9:00 — 18:00
                </p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.533237449984!2d69.33994761502979!3d41.36249810550131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3840f7be271%3A0xdb32d0828ee7ab8c!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JDQs9GA0LDRgNC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sru!2s!4v1649230583182!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="additional">
            <p>© 2022 {t('all-reserved')} | Smart Campus Team</p>
            <div>
              <img src={DataCenter} alt="Data Center" />
              <img src={Collect} alt="Collect" />
            </div>
          </div>
        </Container>
      </MyFooter>
    </>
  );
}

export default Footer;
