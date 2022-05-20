import React from 'react'
import { Container } from 'styles/globalStyle'
import { EventCalendar, Indicator, News, Partners, Subscribe } from '../components'


export function Home() {
  return (
    <Container>
      <Partners />
      <News />
      <Indicator />
      <EventCalendar />
      <Subscribe />
    </Container>
  )
}
