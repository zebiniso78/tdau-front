import React from 'react'
import { AboutMain, Article, Discover, ImageComponent } from '../components'
import WSBImage from 'assets/dynamicImage/1.png'
import { AboutContainer } from './style'
import { Video } from '../components/video'

export default function About() {
   let siteBlog = JSON.parse(localStorage.getItem('blog'))
   return (
      <>
         <AboutMain />
         <AboutContainer type='video'>
            <Discover
               type='magnusUniversity'
               firstInfo='WSB University not only sets the standards of education on the Polish market,
               but has also consolidated its position on foreign markets, becoming a strong
               institutional partner in the field of education and research. This is confirmed
               by the high University’s 2nd place in the internationalization ranking in Poland.
               WSB University has been and still is at the forefront of private universities in Poland for many years.
               The possibility of carrying out part of the studies abroad, foreign internships, programs allowing to
               obtain two diplomas simultaneously - Polish and foreign ones, participation in many international projects,
               are just some of many opportunities we offer our students.
               '
               secondInfo='Today, WSB University is one of the Polish universities most frequently chosen by foreign candidates.
               Nearly 2,000 foreign students from 60 countries around the world study at our campuses. WSB University
               offers bachelor, master, PhD and postgraduate programmes. One can choose from 15 fields of study and over
               130 specialties. Our educational offer has been designed to meet the requirements of modern labour market
               so that our graduates become competitive on the labour market and have the opportunity to pursue successful
               careers. As a modern, research-driven university WSB University in involved in various scientific networks and
               internationally acreditted by the Foundation for the Promotion and Accreditation of Economic Sciences EPOQUS;
               international CEEMAN IQA Accreditation (for 6 years by CEEMAN - International Association for Management
               Development in Dynamic Societies); EUR-ACE® Label granted to the University for 5 years by Accreditation
               Commission of Universities of Technology (KAUT); and has been positively awarded with The HR Excellence in
               Research Award.' />
         </AboutContainer>
         <Video url={siteBlog?.video} />
         <AboutContainer>
            <ImageComponent
               title='Why WSB University?'
               image={WSBImage}
               alt='WSB University'
            />
            <Article />
         </AboutContainer>
      </>
   )
}
