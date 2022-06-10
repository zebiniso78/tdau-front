import { useMemo } from "react"
import Calendar from "assets/cards/calendar.png"
import CardSecond from 'assets/cards/second_card.png'
import CardThird from 'assets/cards/third_card.png'
import CardFour from 'assets/cards/four_card.png'

export function useList() {
   const calendarList = useMemo(() => [
      {
         id: 1,
         image: `${Calendar}`,
         status: 'TRAINING',
         type: 'event_calendar',
         training_date: '12-may',
         title: 'YOU ARE CORDIALLY INVITED TO THE INTERACTIVE TRAINING SESSION FOR VOLUNTEERS WITH THE DIRECTOR OF',
         description: 'YOU ARE CORDIALLY INVITED TO THE INTERACTIVE TRAINING SESSION FOR VOLUNTEERS WITH THE DIRECTOR OF',
         starting_date: '15:00 PM'
      },
      {
         id: 2,
         image: `${CardSecond}`,
         status: 'EVENT',
         type: 'event_calendar',
         training_date: '11-may',
         title: 'Vytautas Magnus university in Litva',
         description: 'INTERNSHIP AND JOB OPPORTUNITIES AT UNDP',
         starting_date: '14:00 PM'
      },
      {
         id: 3,
         image: `${CardThird}`,
         status: 'EVENT',
         type: 'event_calendar',
         training_date: '7-may',
         title: 'Volgograd State Agricultural University in Russia',
         description: 'INFORMATION SESSION “ERASMUS+ OPPORTUNITIES FOR INSTITUTIONAL COOPERATION” ORGANIZED BY THE',
         starting_date: '17:06 PM'
      }, {
         id: 4,
         image: `${CardFour}`,
         status: 'FRIDAY TALK',
         type: 'event_calendar',
         training_date: '29-aprel',
         title: 'Russian State Agrarian University Moscow Timiryazev Agricultural Academy',
         description: 'FRIDAY TALK WITH A FAMOUS ACTOR AND SHOWMAN, MR ALISHER UZOKOV.',
         starting_date: '15:00 PM'
      },
      {
         id: 5,
         image: `${CardFour}`,
         status: 'FRIDAY TALK',
         type: 'event_calendar',
         training_date: '29-aprel',
         title: 'Russian State Agrarian University Moscow Timiryazev Agricultural Academy',
         description: 'FRIDAY TALK WITH A FAMOUS ACTOR AND SHOWMAN, MR ALISHER UZOKOV.',
         starting_date: '15:00 PM'
      },
   ], [])
   return { calendarList }
}