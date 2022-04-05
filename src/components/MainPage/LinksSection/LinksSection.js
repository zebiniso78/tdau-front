import React from 'react';
import { MyContainer, Cards } from './LinksSectionStyle';
import LinksCard from '../../LinksCard';

import Link1 from '../../../assets/Link1.png';
import Link2 from '../../../assets/Link2.png';
import Link3 from '../../../assets/Link3.png';
import Link4 from '../../../assets/Link4.png';
import Link5 from '../../../assets/Link5.png';
import Link6 from '../../../assets/Link6.png';
import Link7 from '../../../assets/Link7.png';

function LinksSection() {
  const CardInfo = [
    {
      href: 'google.com',
      image: Link1,
      title: 'Ўзбекистон Республикаси очиқ маълумотлар портали',
    },
    {
      href: 'google.com',
      image: Link2,
      title: 'Ўзбекистон Республикаси Президентининг расмий веб-сайти',
    },
    {
      href: 'google.com',
      image: Link3,
      title:
        'Ўзбекистон Республикаси норматив ҳуқуқий ҳужжатларнинг муҳокамаси',
    },
    {
      href: 'google.com',
      image: Link2,
      title: 'Ўзбекистон Республикаси Президенти виртуал қабулхонаси',
    },
    {
      href: 'google.com',
      image: Link4,
      title: 'Ягона интерактиф давлат хизматлари портали',
    },
    {
      href: 'google.com',
      image: Link5,
      title: 'Ўзбекистон Республикаси Қонунчилик маълумотлари миллий базаси',
    },
    {
      href: 'google.com',
      image: Link6,
      title: 'Ўзбекистон Республикаси Миллий ҳуқуқий интернет портали',
    },
    {
      href: 'google.com',
      image: Link2,
      title: 'Ўзбекистон Республикаси Ҳукумат портали',
    },
    {
      href: 'google.com',
      image: Link7,
      title:
        'Ўзбекистон Республикаси Президенти ҳузуридаги Давлат бошқаруви академияси',
    },
  ];
  return (
    <>
      <MyContainer>
        <h2>Полезные ссылки</h2>
        <Cards>
          {CardInfo.map((e) => (
            <LinksCard href={e.href} image={e.image} title={e.title} />
          ))}
        </Cards>
      </MyContainer>
    </>
  );
}

export default LinksSection;
