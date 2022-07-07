import React from 'react';
import { AboutMain, Article, Discover, ImageComponent } from '../components';
import { AboutContainer } from './style';
import { Video } from '../components/video';

export default function About() {
  let siteBlog = JSON.parse(localStorage.getItem('blog'));
  return (
    <div style={{ msOverflowX: 'hidden' }}>
      <AboutMain />
      <AboutContainer data-aos="fade-up" type="video">
        <Discover type="magnusUniversity" firstInfo={siteBlog?.description} />
      </AboutContainer>
      <Video url={siteBlog?.videos} />
      <AboutContainer data-aos="fade-up" className="my-5">
        <ImageComponent
          title="Why WSB University?"
          image={
            `${process.env.REACT_APP_API_SECOND_ROOT}/` + siteBlog?.picture_desc
          }
          alt="WSB University"
        />
        <Article articles={siteBlog?.texts} />
      </AboutContainer>
    </div>
  );
}
