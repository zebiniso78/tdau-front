
import Auth from '../api/modules/auth';
import Admissions from './modules/admissions';
import Partners from './modules/partners';

const authApi = new Auth();
const admissionApi = new Admissions()
const partnersApi = new Partners()

export {
  authApi,
  admissionApi,
  partnersApi
};
