import React, { lazy, Suspense, useEffect } from 'react';
import { LayoutProvider, DocumentCard, DocumentCardProvider } from './style';
import 'antd/dist/antd.css';
import TimeLine from './timeline';
import { Route, useHistory } from 'react-router-dom';

const PersonalInfo = lazy(() => import('../personal_information'));
const AcademicInformation = lazy(() => import('../academic_information'));
const PassportInformation = lazy(() => import('../passport_information'));
const AddressInformation = lazy(() => import('../address_information'));
const References = lazy(() => import('../references'));
const Education = lazy(() => import('../education'));
const SupportingInformation = lazy(() => import('../supporting-information'));
const AdditionalInformation = lazy(() => import('../additional_information'));

export function Layout() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('step') == 8) {
      history.push('/admission');
    }
  }, []);

  return (
    <LayoutProvider>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <DocumentCardProvider>
              <TimeLine />
            </DocumentCardProvider>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <DocumentCard className="right-side">
              <Suspense fallback={null}>
                <Route path="/personal-info" component={PersonalInfo} />
                <Route path="/academic-info" component={AcademicInformation} />
                <Route path="/passport-info" component={PassportInformation} />
                <Route path="/address-info" component={AddressInformation} />
                <Route path="/education-qualifications" component={Education} />
                {/* <Route path='/english-language' component={EnglishLanguage} /> */}
                <Route
                  path="/supporting-info"
                  component={SupportingInformation}
                />
                <Route path="/references" component={References} />
                <Route
                  path="/additional-info"
                  component={AdditionalInformation}
                />
              </Suspense>
            </DocumentCard>
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
}
