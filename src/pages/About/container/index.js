import React from 'react';
import { AboutMain, Article, Discover, ImageComponent } from '../components';
import WSBImage from 'assets/dynamicImage/1.png';
import { AboutContainer } from './style';
import { Video } from '../components/video';

export default function About() {
  let siteBlog = JSON.parse(localStorage.getItem('blog'));
  console.log(siteBlog?.texts);
  return (
    <div style={{ msOverflowX: 'hidden' }}>
      <AboutMain />
      <AboutContainer type="video">
        <Discover type="magnusUniversity" firstInfo={siteBlog?.description} />
      </AboutContainer>
      <Video url={siteBlog?.videos} />
      <AboutContainer className="my-5">
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
