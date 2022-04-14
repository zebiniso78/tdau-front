import { useMemo } from "react"
import { useTranslation } from "react-i18next"


export function useList() {
   const { t } = useTranslation()
   const timelineList = useMemo(() => [
      {
         id: 1,
         pathName: '/personal-info',
         name: ' Персональные данные'
      },
      {
         id: 2,
         pathName: '/academic-info',
         name: 'Академическая информация'
      },
      {
         id: 3,
         pathName: '/passport-info',
         name: 'Паспортная информация'
      },
      {
         id: 4,
         pathName: '/address-info',
         name: 'Адресаная информация'
      },
      {
         id: 5,
         pathName: '/education-qualifications',
         name: 'Образование и квалификации'
      },
      {
         id: 6,
         pathName: '/supporting-info',
         name: 'Вспомогательная информация'
      },
      {
         id: 7,
         pathName: '/references',
         name: 'Использованная литература'
      },
      {
         id: 8,
         pathName: '/additional-info',
         name: 'Дополнительная информация'
      },
   ], [t])

   return { timelineList }
}