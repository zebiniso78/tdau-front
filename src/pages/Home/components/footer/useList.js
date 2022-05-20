import { useMemo } from "react";


export function useList() {
   const footerList = useMemo(() => [
      {
         id: 1,
         name: 'lorem ipsum'
      },
      {
         id: 2,
         name: 'University',
         section1: 'Information about university',
         section2: 'University structure',
         section3: 'History of university',
         section4: 'Vacancies'
      },
      {
         id: 3,
         name: 'Interactive service',
         section1: 'Section 1',
         section2: 'Section 2',
         section3: 'Section 3',
         section4: 'Section 4'
      },
      {
         id: 4,
         name: 'International partners',
         section1: 'WSB University',
         section2: 'Vytautas Magnus University',
         section3: 'State Volgograd Agrarian University',
         section4: 'Russian State Agrarian University - K.A. Timiryazev'
      },
      {
         id: 5,
         name: 'Admisson',
         section1: 'Section 1',
         section2: 'Section 2',
         section3: 'Section 3',
         section4: 'Section 4'
      },
      {
         id: 6,
         name: 'Contacts',
         section1: 'Section 1',
         section2: 'Section 2',
         section3: 'Section 3',
         section4: 'Section 4'
      }
   ], [])
   return { footerList }
}