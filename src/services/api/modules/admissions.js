import Api from '../index';

class Admissions extends Api {
  admissionPost(data) {
    return this.execute('post', '/admission_form', data);
  }
  admissionGet(data) {
    return this.execute('get', '/admission_form', data);
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
  admissionConfirm(data) {
    return this.execute('post', `/admission_confirm`, data);
  }
  profileGet() {
    return this.execute('get', `/profile`);
  }
  facultyGet() {
    return this.execute('get', `/faculties`);
  }
}

export default Admissions;
