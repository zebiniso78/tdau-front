import React, { useEffect, useState } from 'react';
import { ProfileSection, ProfileBody, ProfilePaper } from './ProfileStyle';
import { Container } from '../../common/grid';
import { Alert, Button, Col, Row } from 'antd';
import { admissionApi } from 'services/api/pagesApi';
import { useHistory } from 'react-router-dom';
function Profile() {
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
            <ProfilePaper>
              {data?.sts === 1 ? (
                <Alert
                  message="Your admission has been sent!"
                  description="Your admissions will be reviewed and replied soon!   If your request is left unanswered for a long time, please
                 contact our support center."
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
                      Support center
                    </Button>
                  }
                />
              ) : data?.sts === 2 ? (
                <>
                  {/* Accepted  */}
                  <div className="row align-items-center">
                    <div className="col-12">
                      <Alert
                        message="Your admission accepted!"
                        description="You have been successfully admitted to the student body! you have been provided with a login and password to log in!"
                        type="success"
                        showIcon
                        banner
                      />
                    </div>
                    {/* <div className="col-6 col-md-4 col-lg-3 ">
                      <Alert
                        message={`Login : ${data?.username} `}
                        description={`Password : ${data?.password}`}
                        type="info"
                        banner
                        showIcon={false}
                      />
                    </div> */}
                  </div>
                  {/* Accepted end */}
                </>
              ) : data?.sts === 3 ? (
                <>
                  {' '}
                  {/* Rejected  */}
                  <div className="row align-items-center">
                    <div className="col-6 col-md-8">
                      <Alert
                        message="Your admission rejected!"
                        description="You can write to our support center"
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
                            Support center
                          </Button>
                        }
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <Alert
                        message={`Comment:`}
                        description={`${data?.comment}`}
                        type="error"
                        banner
                        showIcon={false}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 style={{ textAlign: 'center' }}>
                    Your data is in standby mode.
                  </h4>
                  <Row align="middle" justify="space-between" gutter={[16, 16]}>
                    <Col span={24} md={16}>
                      If you want, you can select the desired direction and fill
                      out the application again.
                    </Col>
                    <Col span={24} md={7}>
                      <Button onClick={() => restartFunc()}>Restart</Button>
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
