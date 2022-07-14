import React, { useEffect, useState } from 'react';
import { ProfileSection, ProfileBody, ProfilePaper } from './ProfileStyle';
import { Container } from '../../common/grid';
import { Alert, Button, Col, Row } from 'antd';
import { admissionApi } from 'services/api/pagesApi';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Profile() {
  const { t } = useTranslation();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(undefined);
  async function Notification() {
    try {
      if (localStorage.getItem('university_id')) {
        const response = await admissionApi.profileGetForeign();
        console.log(response);
        setData(response);
      } else {
        const response = await admissionApi.profileGet();
        console.log(response);
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function restartFunc() {
    history.push('/');
    localStorage.removeItem('step');
  }

  useEffect(() => {
    Notification();
  }, []);
  return (
    <>
      <ProfileSection>
        {/* <Navbar /> */}
        <ProfileBody>
          <Container className="profile-container">
            <ProfilePaper data-aos="fade-up">
              {data?.sts === 1 ? (
                <Alert
                  message={t('admission-sent-message')}
                  description={t('admission-sent-message-text')}
                  type="info"
                  showIcon
                  banner
                  action={
                    <Button
                      onClick={() => {
                        setIsModalVisible(true);
                      }}
                      size="small"
                      type="warning"
                    >
                      {t('support-center')}
                    </Button>
                  }
                />
              ) : data?.sts === 2 ? (
                <>
                  {/* Accepted  */}
                  <div className="row align-items-center">
                    <div className="col-12">
                      <Alert
                        message={t('admission-accepted-message')}
                        description={t('admission-accepted-message-text')}
                        type="success"
                        showIcon
                        banner
                        action={
                          <Button
                            size="small"
                            type="warning"
                            onClick={() => restartFunc()}
                          >
                            {t('restart')}
                          </Button>
                        }
                      />
                    </div>
                  </div>
                  {/* Accepted end */}
                </>
              ) : data?.sts === 3 ? (
                <>
                  {' '}
                  {/* Rejected  */}
                  <div className="row align-items-center">
                    <div className="col-12 col-md-8">
                      <Alert
                        message={t('admission-rejected-message')}
                        description={t('admission-rejected-message-text')}
                        type="error"
                        showIcon
                        banner
                        action={
                          <Button
                            onClick={() => {
                              setIsModalVisible(true);
                            }}
                            size="small"
                            danger
                          >
                            {t('support-center')}
                          </Button>
                        }
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <Alert
                        message={`Comment:`}
                        description={`${data?.comment}`}
                        type="error"
                        banner
                        showIcon={false}
                        action={
                          <Button size="small" onClick={() => restartFunc()}>
                            {t('restart')}
                          </Button>
                        }
                      />
                      <Button onClick={() => restartFunc()}>
                        {t('restart')}
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 style={{ textAlign: 'center' }}>
                    {t('admission-error')}
                  </h4>
                  <br />
                  <Row align="middle" justify="center" gutter={[16, 16]}>
                    <Col span={24} md={20}>
                      {/* <Alert
                        description={t('resent-admission')}
                        type="info"
                        banner
                        showIcon={true}
                      />
                      <br /> */}
                      <Alert
                        description={t('resent-admission')}
                        type="error"
                        banner
                        showIcon={false}
                        action={
                          <Button size="small" onClick={() => restartFunc()}>
                            {t('restart')}
                          </Button>
                        }
                      />
                    </Col>
                  </Row>
                </>
              )}
            </ProfilePaper>
          </Container>
        </ProfileBody>
      </ProfileSection>
    </>
  );
}

export default Profile;
