import React from 'react'
import { Container } from 'styles/globalStyle'
import { EventCalendar } from '../components/event-calendar'
import { Indicator } from '../components/indicator'
import { Partners } from '../components/partners/container'
import { Subscribe } from '../components/subscribe'

export function Home() {
  return (
    <Container>
      <Partners />
      <Indicator />
      <EventCalendar />
      <Subscribe />
    </Container>
  )
}
