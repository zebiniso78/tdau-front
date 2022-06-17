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
      {articles?.map((article, index) =>
        index === 0 ? (
          <ArticleLeft>
            <ArticleLeftTitle>{article?.title}</ArticleLeftTitle>
            <ArticleDescription>{article?.text}</ArticleDescription>
          </ArticleLeft>
        ) : (
          <ArticleRight>
            <RightContent>
              <ContentTitle>{article?.title}</ContentTitle>
              <ContentInfo>{article?.text}</ContentInfo>
            </RightContent>
          </ArticleRight>
        )
      )}
    </ArticleProvider>
  );
}
