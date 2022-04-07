import React from 'react'
import { AcademicInfoProvider, AcademicInfoTitle, AcademicInfo } from "./style"

export function AcademicInformation() {
   return (
      <AcademicInfoProvider>
         <AcademicInfoTitle>Академическая информация</AcademicInfoTitle>
         <AcademicInfo>
            <p>Вы не можете подать заявку на онлайн-степени Международного
               сельскохозяйственного университета, используя эту форму.
               Пожалуйста, ознакомьтесь с информацией о наших онлайн-программах
               на получение степени на http://www.iau.uz/study/online/</p>
            <p><strong>
               Поля ниже должны быть заполнены в том порядке,
               в котором они появляются, поскольку каждый
               предоставленный вами ответ будет заполнять
               доступные варианты в следующем поле.</strong></p>
         </AcademicInfo>
      </AcademicInfoProvider>
   )
}
