import React from 'react';
import GalleryCard from '../../GalleryCard';
import { MyContainer } from './MediaGalleryStyle';
import OwlCarousel from 'react-owl-carousel';

function Service() {
  const CarouselData = [
    {
      title:
        'Пора серьезно задуматься о будущем» — Ботиржон Шермухаммад о смыслах трудовой миграции в Россию',
      date: '03',
      month: 'НОЯ',
      year: '2022',
    },
    {
      title:
        'Шавкат Мирзиёев и Реджеп Эрдоган посетили комплекс Ичан-кала в Хиве',
      date: '02',
      month: 'НОЯ',
      year: '2022',
    },
    {
      title: 'В фотоловушку попал снежный барс',
      date: '28',
      month: 'НОЯ',
      year: '2022',
    },
    {
      title:
        'Таможенники обнаружили более 154 кг наркотиков, замаскированных под картофель',
      date: '21',
      month: 'НОЯ',
      year: '2022',
    },
    {
      title:
        'Цена, продолжительность и качество обслуживания - население страдает от сжиженного газа.',
      date: '15',
      month: 'НОЯ',
      year: '2022',
    },
  ];
  return (
    <>
      <MyContainer>
        <h2>Медиагалерея</h2>
        <div class="switch-button">
          <input class="switch-button-checkbox" type="checkbox"></input>
          <label class="switch-button-label" for="">
            <span class="switch-button-label-span">Видеогалерея</span>
          </label>
        </div>
        <OwlCarousel className="owl-theme" loop margin={5} nav>
          {CarouselData.map((e) => (
            <div class="item">
              <GalleryCard
                title={e.title}
                date={e.date}
                month={e.month}
                year={e.year}
              />
            </div>
          ))}
        </OwlCarousel>
      </MyContainer>
    </>
  );
}

export default Service;
