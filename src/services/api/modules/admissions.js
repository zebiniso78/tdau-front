import Api from '../index';

class Admissions extends Api {
  admissionPost(data) {
    return this.execute('post', '/admission_form', data);
  }
  nationality() {
    return this.execute('get', '/nationalities');
  }
  countries() {
    return this.execute('get', '/countries');
  }
  genders() {
    return this.execute('get', '/genders');
  }
  
}

export default Admissions;
