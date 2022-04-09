import React from 'react';
import UniPhoto from '../../../assets/uniPhoto.png';
import { BsPlayFill } from 'react-icons/bs';
import { MyContainer, MyCol6 } from './AboutStyle';

function About() {
  return (
    <>
      <section>
        <MyContainer>
          <MyCol6 className="about-left">
            <div className="rectangle">
              <img src={UniPhoto} alt="University Pic" />
            </div>
          </MyCol6>
          <MyCol6 className="about-right">
            <h2>Ташкентский государственный аграрный университет</h2>
            <p>
              Этот центр был создан на территории знаменитого комплекса
              Хастимом, где великие исламские ученые, ученые и мыслители,
              выросшие в нашей стране, внесли свой вклад в развитие мировой
              культуры.
            </p>
            <div className="buttons-wrapper">
              <button className="more-button">Подробнее</button>
              <a href="youtube.com">
                <button className="play-button">
                  <BsPlayFill />
                </button>
                Видео о нас
              </a>
            </div>
          </MyCol6>
        </MyContainer>
      </section>
    </>
  );
}

export default About;
