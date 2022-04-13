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
  educationForm() {
    return this.execute('get', '/education_form');
  }
  educationType() {
    return this.execute('get', '/education_type');
  }

  regions() {
    return this.execute('get', '/regions');
  }
  district(data) {
    return this.execute('get', `/districts?reg_id=${data?.name}`);
  }
  qualifications() {
    return this.execute('get', '/qualifications');
  }
}

export default Admissions;
