
import Auth from '../api/modules/auth';
import Admissions from './modules/admissions';
import News from './modules/news';
import Partners from './modules/partners';

const authApi = new Auth();
const admissionApi = new Admissions()
const partnersApi = new Partners()
const newsApi = new News()

export {
  authApi,
  admissionApi,
  partnersApi,
  newsApi
};
