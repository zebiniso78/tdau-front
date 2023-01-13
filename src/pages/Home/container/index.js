import React from "react";
import { Container } from "styles/globalStyle";
import {
  EventCalendar,
  Indicator,
  News,
  Partners,
  Subscribe,
} from "../components";
import { MainSection } from "../components/main";

export default function Home() {
  return (
    <>
      <MainSection />
      <Container>
        <Partners />
        {/* <News />
        <Indicator />
        <EventCalendar /> */}
        <Subscribe />
      </Container>
    </>
  );
}
