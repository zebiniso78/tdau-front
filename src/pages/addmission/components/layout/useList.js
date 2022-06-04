import { useMemo } from "react"
import { useTranslation } from "react-i18next"


export function useList() {
   const { t } = useTranslation()
   const timelineList = useMemo(() => [
      {
         id: 1,
         pathName: '/university-admissions/personal-info',
         name: ' Персональные данные'
      },
      {
         id: 2,
         pathName: '/university-admissions/academic-info',
         name: 'Академическая информация'
      },
      {
         id: 3,
         pathName: '/university-admissions/passport-info',
         name: 'Паспортная информация'
      },
      {
         id: 4,
         pathName: '/university-admissions/address-info',
         name: 'Адресаная информация'
      },
      {
         id: 5,
         pathName: '/university-admissions/education-qualifications',
         name: 'Образование и квалификации'
      },
      {
         id: 6,
         pathName: '/university-admissions/supporting-info',
         name: 'Вспомогательная информация'
      },
      {
         id: 7,
         pathName: '/university-admissions/references',
         name: 'Использованная литература'
      },
      {
         id: 8,
         pathName: '/university-admissions/additional-info',
         name: 'Дополнительная информация'
      },
   ], [t])

   return { timelineList }
}