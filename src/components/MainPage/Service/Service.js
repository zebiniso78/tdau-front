import React from 'react';
import ServiceCard from '../../ServiceCard';
import { Cards, MyContainer } from './ServiceStyle';
import './ServiceStyle';
import Bachelor from '../../../assets/Bachelor.svg';
import Master from '../../../assets/Master.svg';
import Programs from '../../../assets/Programs.svg';

function Service() {
  const CardInfo = [
    {
      image: Bachelor,
      title: 'Бакалавриат',
      text: 'Mi massa fringilla sit aliquet felis id sed. Facilisis massa etiam faucibus elementum. Aliquam ornare nisi, rhoncus diam. Elementum, integer at adipiscing quisque donec. Sit vene.',
      link: 'google.com',
    },
    {
      image: Master,
      title: 'Магистратура',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam penatibus maecenas consequat faucibus est orci. Quis integer facilisis proin lectus nisi,tellus aliquet in..',
      link: 'google.com',
    },
    {
      image: Programs,
      title: 'Совместные программы',
      text: 'Ultrices eu lorem amet porttitor sed. Dictumst id sit eget est, non. Velit quam iaculis sed id vel molestie nulla ultricies id. Tortor sed enim curabitur venenatis molestie quis dignissim faucibus. Amet.',
      link: 'google.com',
    },
    {
      image: Bachelor,
      title: 'Бакалавриат',
      text: 'Mi massa fringilla sit aliquet felis id sed. Facilisis massa etiam faucibus elementum. Aliquam ornare nisi, rhoncus diam. Elementum, integer at adipiscing quisque donec. Sit vene.',
      link: 'google.com',
    },
    {
      image: Master,
      title: 'Магистратура',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam penatibus maecenas consequat faucibus est orci. Quis integer facilisis proin lectus nisi,tellus aliquet in..',
      link: 'google.com',
    },
    {
      image: Programs,
      title: 'Совместные программы',
      text: 'Ultrices eu lorem amet porttitor sed. Dictumst id sit eget est, non. Velit quam iaculis sed id vel molestie nulla ultricies id. Tortor sed enim curabitur venenatis molestie quis dignissim faucibus. Amet.',
      link: 'google.com',
    },
  ];
  return (
    <>
      <MyContainer>
        <h2>Наши сервисы</h2>
        <Cards>
          {CardInfo.map((e) => (
            <ServiceCard
              image={e.image}
              title={e.title}
              text={e.text}
              link={e.link}
            />
          ))}
        </Cards>
      </MyContainer>
    </>
  );
}

export default Service;
