import React from 'react'
import { LayoutProvider, DocumentCard } from './style'
import 'antd/dist/antd.css';
import TimeLine from './timeline';
import { Route } from 'react-router-dom';
import { PersonalInfo } from '../personal_information';
import { AcademicInformation } from '../academic_information';
import { PassportInformation } from '../passport_information';


export function Layout() {
   return (
      <LayoutProvider>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                  <TimeLine />
               </div>
               <div className='col-lg-9 col-md-6 col-sm-6 col-12'>
                  <DocumentCard className='right-side'>
                     <Route path='/personal-info' component={PersonalInfo} />
                     <Route path='/academic-info' component={AcademicInformation} />
                     <Route path='/passport-info' component={PassportInformation} />
                  </DocumentCard>
               </div>
            </div>
         </div>
      </LayoutProvider>
   )
}
