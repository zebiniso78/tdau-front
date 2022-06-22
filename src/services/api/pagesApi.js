import Auth from '../api/modules/auth';
import Admissions from './modules/admissions';
import News from './modules/news';
import Partners from './modules/partners';
import RectorMessage from './modules/rector-message';

const authApi = new Auth();
const admissionApi = new Admissions();
const partnersApi = new Partners();
const newsApi = new News();
const messageApi = new RectorMessage();

export { authApi, admissionApi, partnersApi, newsApi, messageApi };
