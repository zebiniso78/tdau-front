import Api from '../index';

class Admissions extends Api {
  admissionPost(data) {
    return this.execute('post', '/admission_form', data);
  }
  admissionPostForign(data) {
    return this.execute('post', '/admission_form_foreign', data);
  }
  admissionGetForign() {
    return this.execute('get', '/admission_form_foreign');
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
  admissionConfirmForeign(data) {
    return this.execute('post', `/admission_confirm_foreign`, data);
  }
  allUniversityID() {
    return this.execute('get', `/list_admissions`);
  }
  profileGet() {
    return this.execute('get', `/profile`);
  }
  profileGetForeign() {
    return this.execute('get', `/profile_foreign`);
  }
  facultiesForeignByID(data) {
    return this.execute('post', `/faculties_foreign_by_id`, data);
  }

}

export default Admissions;
