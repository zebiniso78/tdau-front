import Auth from '../api/modules/auth';
import AboutUniver from './modules/aboutUniver';
import Admissions from './modules/admissions';
import News from './modules/news';
import Partners from './modules/partners';
import RectorMessage from './modules/rector-message';
import StructureApi from './modules/structure';

const authApi = new Auth();
const admissionApi = new Admissions();
const partnersApi = new Partners();
const newsApi = new News();
const messageApi = new RectorMessage();
const structureApi = new StructureApi();
const aboutUniver = new AboutUniver();

export {
  authApi,
  admissionApi,
  partnersApi,
  newsApi,
  messageApi,
  structureApi,
  aboutUniver,
};
