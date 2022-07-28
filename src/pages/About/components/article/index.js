import { Col, Row } from 'antd';
import React from 'react';
import {
  ArticleLeft,
  ArticleProvider,
  ArticleRight,
  ArticleLeftTitle,
  ArticleDescription,
  RightContent,
  ContentTitle,
  ContentInfo,
} from './style';

export function Article({ articles }) {
  console.log(articles);
  return (
    <ArticleProvider>
      <Row align={[16, 16]} justify="space-between">
        {articles?.map(
          (article, index) => (
            <Col key={index} span={24}>
              <ArticleLeftTitle>{article?.title}</ArticleLeftTitle>
              <ArticleDescription>{article?.text}</ArticleDescription>
            </Col>
          )

          // index === 0 ? (
          //   <ArticleLeft key={index} data-aos="fade-right">
          //     <ArticleLeftTitle>{article?.title}</ArticleLeftTitle>
          //     <ArticleDescription>{article?.text}</ArticleDescription>
          //   </ArticleLeft>
          // ) : (
          //   <ArticleRight key={index} data-aos="fade-left">
          //     <RightContent>
          //       <ContentTitle>{article?.title}</ContentTitle>
          //       <ContentInfo>{article?.text}</ContentInfo>
          //     </RightContent>
          //   </ArticleRight>
          // )
        )}
      </Row>
    </ArticleProvider>
  );
}
