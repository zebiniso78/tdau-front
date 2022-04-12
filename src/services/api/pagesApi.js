
import Auth from '../api/modules/auth';
import Admissions from './modules/admissions';

const authApi = new Auth();
const admissionApi = new Admissions()

export {
  authApi,
  admissionApi
};
