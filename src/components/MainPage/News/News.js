import React from 'react';
import { MyContainer } from './NewsStyle';
import NewsCard from '../../NewsCard';
import NewsPost from '../../NewsPost';
import { AiOutlineRight } from 'react-icons/ai';
import CardImage1 from '../../../assets/cardImage1.png';
import CardImage2 from '../../../assets/cardImage2.png';
import CardImage3 from '../../../assets/cardImage3.png';
import CardImage4 from '../../../assets/cardImage4.png';
import CardImage5 from '../../../assets/cardImage5.png';

function News() {
  const CardData = [
    {
      image: CardImage2,
      date: '10 января 2021',
      seen: '268 743',
      title:
        'Цена, продолжительность и качество обслуживания - по вопросам, которые волнуют насел...',
      hash: 'узбекистане',
      hash2: 'семинары',
    },
    {
      image: CardImage3,
      date: '10 января 2021',
      seen: '268 743',
      title:
        'Реджеп Тайип Эрдоган и первая леди Турции Эмине Эрдоган прибыли в Узбекистан',
      hash: 'узбекистане',
      hash2: 'конференции',
    },
    {
      image: CardImage4,
      date: '10 января 2021',
      seen: '268 743',
      title:
        'Со следующего месяца в Узбекистане повысят один из видов пенсий и введут новое пособие',
      hash: 'узбекистане',
      hash2: 'тендер',
    },
    {
      image: CardImage5,
      date: '10 января 2021',
      seen: '268 743',
      title:
        'Обнародован список правонарушений, за сообщения о которых можно заработать',
      hash: 'узбекистане',
      hash2: 'эълон',
    },
  ];

  const PostData = [
    {
      date: '10 января 2021',
      seen: '268 473',
      title:
        'Члены конгресса Международной федерации футбола (ФИФА) почтили мину...',
    },
    {
      date: '10 января 2021',
      seen: '268 473',
      title: 'Президент прокомментировал рост цен на сахар',
    },
    {
      date: '10 января 2021',
      seen: '268 473',
      title: 'ЦБ опубликовал курс валют на 1 апреля',
    },
    {
      date: '10 января 2021',
      seen: '268 473',
      title:
        'В ГНК уточнили, как осуществляется налоговое администрирование на региона...',
    },
    {
      date: '10 января 2021',
      seen: '268 473',
      title:
        'Путин заявил, что условия для прекращения огня в Украине еще не созрели',
    },
  ];
  return (
    <>
      <MyContainer>
        <div className="news-title__wrapper">
          <h2>Новости</h2>
          <a href="wikipedia.com">
            Все новости <AiOutlineRight />
          </a>
        </div>
        <div className="news-card__wrapper">
          <div className="one-card__wrapper">
            <NewsCard
              image={CardImage1}
              date="10 января 2021"
              seen="268 743"
              title="Сложности с получением водительских прав за границей: падают необразованные, нет возможности..."
              text="В развитых странах водительское удостоверение выдается только тем, кто досконально освоил правила вождения. Своим опытом поделились люди, непосредственно знакомые с процессом получения водительских прав, как в Узбекистане, так и за рубежом."
              hash="узбекистане"
              hash2="новости"
            />
          </div>
          <div className="several-cards__wrapper">
            {CardData.map((e) => (
              <NewsCard
                className="small-cards"
                image={e.image}
                date={e.date}
                seen={e.seen}
                title={e.title}
                hash={e.hash}
                hash2={e.hash2}
              />
            ))}
          </div>
          <div className="news-posts__wrapper">
            {PostData.map((e) => (
              <NewsPost date={e.date} seen={e.seen} title={e.title} />
            ))}
          </div>
        </div>
      </MyContainer>
    </>
  );
}

export default News;
