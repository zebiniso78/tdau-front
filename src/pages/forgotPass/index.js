import { Container } from 'common/grid';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { authApi } from 'services/api/pagesApi';
import MainContent from './components/main';
import Stepper from './components/stepper';
import { Paper, WrapperChangePAss } from './style';

export default function ForgotPassworPage() {
  const [myState, setMyState] = useState({
    step: 0,
    phone: undefined,
    code: undefined,
    password: undefined,
    token: undefined,
  });

  const history = useHistory();
  const { t } = useTranslation();
  async function HandleOk(info, type) {
    try {
      const formData = new FormData();
      switch (type) {
        case 'phone':
          if (!info?.includes('_')) {
            formData.append('phone', info);
            await authApi?.editLogin(formData);
            setMyState({ ...myState, step: 1 });
          } else {
            setMyState({ ...myState, step: 0 });
            toast.error(t('required field change'));
          }
          break;
        case 'code':
          if (info?.length > 3) {
            formData.append('phone', myState?.phone);
            formData.append('code', info);
            const res = await authApi?.editCode(formData);
            setMyState({ ...myState, step: 2, token: res?.token });
            localStorage.setItem('token', res?.token);
          } else {
            setMyState({ ...myState, step: 1 });
            toast.error(t('required field change'));
          }
          break;
        case 'password':
          if (info?.length > 5) {
            formData.append('password', info);
            await authApi?.editPassword(formData);
            setMyState({ ...myState, step: 3 });
            toast.success(t('successfully changed'));
            history.push('/');
          } else {
            setMyState({ ...myState, step: 2 });
            toast.error(t('required field change') + ' min: 6');
          }
          break;

        default:
          toast.error('error');
          break;
      }
    } catch (error) {
      setMyState({ ...myState, step: 0 });

      toast.error(error?.msg || error || 'error');
    }
  }

  return (
    <WrapperChangePAss>
      <Container>
        <Paper>
          <br />
          <Stepper myState={myState} />
          <br />
          <br />

          <MainContent
            myState={myState}
            handleOk={HandleOk}
            setMyState={setMyState}
          />
        </Paper>
      </Container>
    </WrapperChangePAss>
  );
}