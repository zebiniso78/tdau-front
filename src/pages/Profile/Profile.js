import React, { useState } from 'react';
import Navbar from '../../components/MainPage/Navbar/Navbar';
import Footer from '../../components/MainPage/Footer/Footer';
import { ProfileSection, ProfileBody, ProfilePaper } from './ProfileStyle';
import PersonalCard from '../../components/PersonalCard';
import InputsCard from '../../components/InputsCard';
import { Container } from '../../common/grid';
import SupportComponent from './support';

function Profile() {
  const [support, setSupport] = useState(false);
  return (
    <>
      <ProfileSection>
        {/* <Navbar /> */}
        <ProfileBody>
          <Container className="profile-container">
            <ProfilePaper>
              <div class="alert alert-primary" role="alert">
                <h4 class="alert-heading">Your admission has been sent!</h4>
                <p>Your admissions will be reviewed and replied soon</p>
                <hr />
                <p class="mb-0">
                  If your request is left unanswered for a long time, please
                  contact our{' '}
                  <a
                    onClick={() => setSupport(!support)}
                    href="#"
                    class="alert-link"
                  >
                    support center.
                  </a>
                </p>
              </div>
              {support ? <SupportComponent /> : null}
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
