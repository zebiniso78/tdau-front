import React from 'react';
import { LayoutProvider, DocumentCard, DocumentCardProvider } from './style';
import 'antd/dist/antd.css';
import TimeLine from './timeline';
import { Route } from 'react-router-dom';
import { PersonalInfo } from '../personal_information';
import { AcademicInformation } from '../academic_information';
import { PassportInformation } from '../passport_information';
import { AddressInformation } from '../address_information';
import { AdditionalInformation } from '../additional_information';
import { References } from '../references';
import { Education } from '../education';
import { EnglishLanguage } from '../english_language';
import { SupportingInformation } from '../supporting-information';


export function Layout() {
   return (
      <LayoutProvider>
         <div className='container'>
            <div className='row'>
               <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                  <DocumentCardProvider>
                     <TimeLine />
                  </DocumentCardProvider>
               </div>
               <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
                  <DocumentCard className='right-side'>
                     <Route path='/personal-info' component={PersonalInfo} />
                     <Route path='/academic-info' component={AcademicInformation} />
                     <Route path='/passport-info' component={PassportInformation} />
                     <Route path='/address-info' component={AddressInformation} />
                     <Route path='/education-qualifications' component={Education} />
                     {/* <Route path='/english-language' component={EnglishLanguage} /> */}
                     <Route path='/supporting-info' component={SupportingInformation} />
                     <Route path='/references' component={References} />
                     <Route path='/additional-info' component={AdditionalInformation} />
                  </DocumentCard>
               </div>
            </div>
         </div>
      </LayoutProvider>
   )
}
