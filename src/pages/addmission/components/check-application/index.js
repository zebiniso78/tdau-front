import { Col, Row } from 'antd';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { ButtonsProvider } from 'components/buttons/style';
import { LoaderComponent } from 'components/loader';
import { fetchData } from 'hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { admissionApi } from 'services/api/pagesApi';
import { Attachments } from './attachments';
import { Items } from './Items';
import { CheckApplicationProvider, ApplicationTitle } from './style'
import { useHistory } from 'react-router-dom'

export default function CheckApplication() {
   const history = useHistory()
   const [allAdmission, setAllAdmission] = useState(undefined);
   const [loader, setLoader] = useState(true)
   useEffect(() => {
      fetchData(admissionApi.admissionGetForign(null), setAllAdmission, setLoader)
   }, [])

   return (
      <CheckApplicationProvider className="container">
         <ApplicationTitle>Проверьте ваше приложение</ApplicationTitle>
         {
            !loader ?
               <>
                  <Row gutter={[16, 16]} justify='space-between' align='top'>
                     <Items title='Nationality' info={allAdmission?.nationality} />
                     <Items title='Full name' info={allAdmission?.name + ' ' + allAdmission?.surname + ' ' + allAdmission?.middle_name} />
                     <Items title='School' info={allAdmission?.school} />
                     <Items title='GPA' info={allAdmission?.GPA} />
                     <Items title='Accept deadline' info={allAdmission?.accept_deadline} />
                     <Items title='Address 1' info={allAdmission?.adress1} />
                     <Items title='Address 2' info={allAdmission?.adress2} />
                     <Items title='Application type' info={allAdmission?.aplication_type} />
                     <Items title='Country birth date' info={allAdmission?.country_birth} />
                     <Items title='Country permanent' info={allAdmission?.country_permanent} />
                     <Items title='Current country' info={allAdmission?.current_country} />
                     <Items title='District' info={allAdmission?.district} />
                     <Items title='Dtm' info={allAdmission?.dtm} />
                     <Items title='Email' info={allAdmission?.email} />
                     <Items title='Passport expiry' info={allAdmission?.passport_expiry} />
                     <Items title='Passport number' info={allAdmission?.passport_number} />
                     <Items title='Second phone' info={allAdmission?.phone_a} />
                     <Items title='Pnfl' info={allAdmission?.pnfl} />
                     <Items title='Post Address 1' info={allAdmission?.post_adress1} />
                     <Items title='Post Address 2' info={allAdmission?.post_adress2} />
                     <Items title='Post District' info={allAdmission?.post_district} />
                     <Items title='Post Index' info={allAdmission?.post_index} />
                     <Items title='Post Index 2' info={allAdmission?.post_index_2} />
                     <Items title='Post Region' info={allAdmission?.post_region} />
                     <Items title='Qualification' info={allAdmission?.qualification} />
                     <Items title='Qualification2' info={allAdmission?.qualification2} />
                     <Items title='Region' info={allAdmission?.region} />
                  </Row>
                  <ApplicationTitle type='attachments'>Attachments</ApplicationTitle>
                  <Row>
                     {
                        allAdmission?.attachments?.map((item) => {
                           return (
                              <Attachments key={item?.id} ext={item?.ext} title={item?.info} path={item?.path} />
                           )
                        })
                     }
                  </Row>
                  <ButtonsProvider>
                     <CancelBtnComponent
                        name="Назад"
                        className="prev-btn"
                        onClick={() => history.push('/university-admissions/references')}
                        type="button"
                     />
                     <NextBtnComponent
                        name="Продолжить"
                        className="next-btn"
                        onClick={() => history.push('/university-admissions/additional-info')}
                     />
                  </ButtonsProvider>
               </> : <LoaderComponent />
         }

      </CheckApplicationProvider>
   )
}
