import React, { useState } from 'react';
import { ProfileSection, ProfileBody, ProfilePaper } from './ProfileStyle';
import { Container } from '../../common/grid';
import SupportComponent from './support';
import { Alert, Button } from 'antd';
function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ProfileSection>
        {/* <Navbar /> */}
        <ProfileBody>
          <Container className="profile-container">
            <ProfilePaper>
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

              {/* Accepted  */}

              <div className="row align-items-center">
                <div className="col-6 col-md-8 col-lg-9">
                  <Alert
                    message="Your admission accepted!"
                    description="You have been successfully admitted to the student body! you have been provided with a login and password to log in!"
                    type="success"
                    showIcon
                    banner
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-3 ">
                  <Alert
                    message={`Login : login `}
                    description={`Password : password `}
                    type="info"
                    banner
                    showIcon={false}
                  />
                </div>
              </div>

              {/* Accepted end */}

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
                    description={`Your DTM card is incomplete!`}
                    type="error"
                    banner
                    showIcon={false}
                  />
                </div>
              </div>

              {/* Rejected end */}
              <SupportComponent
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </ProfilePaper>

            {/* <div className="user-card">
              <PersonalCard title="Абдурахимов Абдувохид Абдумалик ўғли" />
            </div> */}
            {/* <div className="inputs-card">
              <InputsCard title="Личная информация" />
            </div> */}
          </Container>
        </ProfileBody>
        {/* <Footer /> */}
      </ProfileSection>
    </>
  );
}

export default Profile;
