import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { LatestNewsProvider, NewsTitle, ImageLayout, Wrap } from './style'
import { fetchData } from 'hooks/useFetch'
import { newsApi } from 'services/api/pagesApi'
import UniversityImage from 'assets/news/layout-one.png'
import Professors from 'assets/news/layout-second.png'
import AgroInnovation from 'assets/news/layout-third.png'
import Diploms from 'assets/news/layout-four.png'
import Rankings from 'assets/news/layout-five.png'


export function News() {
  const [isFetch, setIsFetch] = useState(false)
  const [news, setNews] = useState(undefined)
  useEffect(() => {
    fetchData(newsApi.readNews(null), setNews, setIsFetch)
  }, [])
  return (
    <LatestNewsProvider>
      <NewsTitle>Latest news</NewsTitle>
      <Row gutter={[16, 16]} style={{ marginBottom: '65px' }}>
        {
          news ? news[0]?.map((item, index) => (
            <Col span={24} md={(index === 2 || index === 3) ? 6 : 12} xxs={12} key={item?.id} className='news-col'>
              <ImageLayout className={(index === 2 || index === 3 || index === 4) && 'image-layout'}>
                <Wrap></Wrap>
                <img src={`${process.env.REACT_APP_API_SECOND_ROOT}/static/images/${item?.picture}`} alt='university' />
                {
                  (index === 2 || index === 3) ?
                    <>
                      <h3>{item?.title_news}</h3>
                      <h5>05 May 2022</h5>
                    </> :
                    <>
                      <h1>{item?.title_news}</h1>
                      <h4>05 May 2022</h4>
                    </>
                }
              </ImageLayout>
            </Col>
          )
          ) : <p>no data</p>
        }
      </Row>
      {/* <Row gutter={[16, 16]} style={{ marginBottom: '65px' }}>
        <Col span={24} md={12}>
          <ImageLayout>
            <Wrap></Wrap>
            <img src={UniversityImage} alt='university' />
            <h1>International conference started at Tashkent State Agrarian University</h1>
            <h4>05 May 2022</h4>
          </ImageLayout>
        </Col>
        <Col span={24} md={12}>
          <ImageLayout>
            <Wrap></Wrap>
            <img src={Professors} alt="professors" />
            <h1>Professors and teachers of the TSAU visited Samarkand</h1>
            <h4>05 May 2022</h4>
          </ImageLayout>
        </Col>
        <Col span={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={24} md={12}>
              <ImageLayout className='image-layout'>
                <Wrap></Wrap>
                <img src={AgroInnovation} alt="agro-innovation" />
                <h3>Professors and students of TSAU took part in the Agroinnovation program</h3>
                <h5>05 May 2022</h5>
              </ImageLayout>
            </Col>
            <Col span={24} md={12}>
              <ImageLayout className='image-layout'>
                <Wrap></Wrap>
                <img src={Diploms} alt="diploms" />
                <h3>The Kibray district stage of the "Funny and Smart" competition was held at TSAU.</h3>
                <h5>05 May 2022</h5>
              </ImageLayout>
            </Col>
          </Row>
        </Col>
        <Col span={24} md={12}>
          <ImageLayout className='image-layout'>
            <Wrap></Wrap>
            <img src={Rankings} alt="rankings" />
            <h1>TSAU - IMPACT RANKINGS 2022: FIRST AMONG UZBEK UNIVERSITIES</h1>
            <h4>29 March 2022</h4>
          </ImageLayout>
        </Col>
      </Row> */}
    </LatestNewsProvider>
  )
}
