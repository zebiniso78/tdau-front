import React from 'react'
import {
  ArticleLeft,
  ArticleProvider,
  ArticleRight,
  ArticleLeftTitle,
  ArticleDescription,
  RightContent,
  ContentTitle,
  ContentInfo
} from './style'

export function Article({ articles }) {
  return (
    <ArticleProvider>
      <ArticleLeft>
        <ArticleLeftTitle>it labaratories</ArticleLeftTitle>
        <ArticleDescription>The IT laboratories contain high-tech computers and other
          specialized devices. Translation laboratory enables the development and training
          of prospective translators. The trainers of translation and interpreting can simulate
          real-life situations which often are challenging and generate problems. Thus, the practice
          becomes a priceless experience. Multiple Internet posts and wi-fi Internet are also at students’
          disposal. Class schedules, dates of tests and exams, and other announcements are published online in an
          information service for students called Wirtualny Dziekanat (Virtual Dean’s Office). Modern technology is
          also present in language laboratories where teachers use interactive whiteboards, professional software and
          online materials during their classes and lectures. Moreover as one of a few univeristies WSB University has
          virtual laboratories based on claud solutions what gives possibility to provide education fully remotelly.
        </ArticleDescription>
      </ArticleLeft>
      <ArticleRight>
        <RightContent>
          <ContentTitle>
            AMIGO STUDENT CLUB
          </ContentTitle>
          <ContentInfo>
            AMIGO Student Club is a place where students can meet up during breaks or have a meal during
            a long day of classes. AMIGO Club offers tasty homemade food with a variety of snacks and drinks.
          </ContentInfo>
        </RightContent>
        <RightContent>
          <ContentTitle>
            THE DISABLED-FRIENDLY UNIVERSITY PREMISES
          </ContentTitle>
          <ContentInfo>
            The disabled-friendly premises of WSB University is designed to meet the needs of the disabled.
            Students with vision and hearing impairment or limb dysfunction are given support with specialised
            software including Braille notebooks and printer
          </ContentInfo>
        </RightContent>
        <RightContent>
          <ContentTitle>
            library
          </ContentTitle>
          <ContentInfo>
            The library is equipped with all necessary books and scientific magazines, collections of digital
            media such as films. audiobooks, library software, and multimedia reading room at student’s disposal.
          </ContentInfo>
        </RightContent>
      </ArticleRight>
    </ArticleProvider>
  )
}
