import { CardComponent } from 'components/card'
import React, { useEffect, useState } from 'react'
import CardOne from "assets/cards/card-one.png"
import CardSecond from "assets/cards/card-second.png"
import CardThree from "assets/cards/card-three.png"
import CardFour from "assets/cards/card-four.png"
import { CardProvider, CardWrap } from "./style"
import { LandingTitle } from 'styles/globalStyle'
import Academia from "assets/cards/academiya.png"
import MagnusUniversity from "assets/cards/magnus_university.png"
import RussianUniversity from "assets/cards/russian_university.png"
import { Col, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import { fetchData } from 'hooks/useFetch'
import { partnersApi } from 'services/api/pagesApi'
import YouTube, { UniversitySkeleton } from 'components/skeleton'



export function Cards() {
   const history = useHistory()
   const [loader, setLoader] = useState(true)
   const [partners, setPartners] = useState(undefined)
   const [data, setData] = useState([])
   useEffect(() => {
      fetchData(partnersApi.readPartners(null), setPartners, setLoader)
      setData(partners?.all)
   }, [])
   useEffect(() => {
      if (partners !== undefined) {
         setData(partners?.all)
      }
   }, [partners])
   return (
      <CardProvider>
         <LandingTitle>PARTNER UNIVERSITIES</LandingTitle>
         <CardWrap style={{ justifyContent: 'center' }}>
            {
               !loader ?
                  <Row gutter={[16, 16]}>
                     {
                        data?.map((item) => (
                           <Col key={item?.id} span={24} xl={6} sm={12}>
                              <CardComponent
                                 type='university'
                                 onClick={() => history.push(`/partner-universities/blog/${item?.id}`)}
                                 image={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.picture}`}
                                 cardLogo={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.logo}`}
                                 title={item?.title} />
                           </Col>
                        ))
                     }
                     {/* <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardOne}
                     cardLogo={Academia}
                     title='WSB University  in Poland' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     onClick={() => history.push("/about")}
                     image={CardSecond}
                     cardLogo={MagnusUniversity}
                     title='Vytautas Magnus university in Litva' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardThree}
                     cardLogo={RussianUniversity}
                     title='Volgograd State Agricultural
                     University in Russia' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     image={CardFour}
                     cardLogo={RussianUniversity}
                     title='Russian State Agrarian University
                     Moscow Timiryazev Agricultural Academy
                     ' />
               </Col> */}
                  </Row> : <UniversitySkeleton />
            }

         </CardWrap>
      </CardProvider>
   )
}
