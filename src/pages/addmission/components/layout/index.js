import React, { lazy, Suspense, useEffect } from 'react';
import { LayoutProvider, DocumentCard, DocumentCardProvider } from './style';
import 'antd/dist/antd.css';
import TimeLine from './timeline';
import { Route, useHistory } from 'react-router-dom';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';

const PersonalInfo = lazy(() => import('../personal_information'));
const AcademicInformation = lazy(() => import('../academic_information'));
const PassportInformation = lazy(() => import('../passport_information'));
const AddressInformation = lazy(() => import('../address_information'));
const References = lazy(() => import('../references'));
const Education = lazy(() => import('../education'));
const SupportingInformation = lazy(() => import('../supporting-information'));
const AdditionalInformation = lazy(() => import('../additional_information'));
const CheckApplication = lazy(() => import('../check-application'));
const { confirm } = Modal;

export function Layout() {
  const { t } = useTranslation();
  const history = useHistory();
  const showDeleteConfirm = () => {
    confirm({
      title: 'Do you really want to leave the site?',
      // icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        logOut();
      },

      onCancel() {
        console.log('Cancel');
      },
    });
  };

  function logOut() {
    localStorage.removeItem('token');
    history.push('/');
  }

  useEffect(() => {
    if (localStorage.getItem('step') == 8) {
      history.push('/admission');
    }
  }, []);
  return (
    <LayoutProvider>
      <div className="container">
        <div className="row">
          <div
            style={{ paddingTop: 30 }}
            className="col-lg-3 col-md-12 col-sm-12 col-12"
          >
            <DocumentCardProvider>
              <TimeLine />
            </DocumentCardProvider>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div style={{ textAlign: 'end' }}>
              <CancelBtnComponent
                name={t('logout')}
                className="logout"
                onClick={() => showDeleteConfirm()}
              />
            </div>
            <DocumentCard className="right-side">
              <Suspense fallback={null}>
                <Route
                  path="/university-admissions/personal-info"
                  component={PersonalInfo}
                />
                <Route
                  path="/university-admissions/academic-info"
                  component={AcademicInformation}
                />
                <Route
                  path="/university-admissions/passport-info"
                  component={PassportInformation}
                />
                <Route
                  path="/university-admissions/address-info"
                  component={AddressInformation}
                />
                <Route
                  path="/university-admissions/education-qualifications"
                  component={Education}
                />
                {/* <Route path='/english-language' component={EnglishLanguage} /> */}
                <Route
                  path="/university-admissions/supporting-info"
                  component={SupportingInformation}
                />
                <Route
                  path="/university-admissions/references"
                  component={References}
                />
                <Route
                  path="/university-admissions/check-your-application"
                  component={CheckApplication}
                />
                <Route
                  path="/university-admissions/additional-info"
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
