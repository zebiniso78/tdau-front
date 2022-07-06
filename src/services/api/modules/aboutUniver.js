import Api from '../index';

class AboutUniver extends Api {
  getAbout() {
    return this.execute('get', '/about_us');
  }
  getBranches() {
    return this.execute('get', '/all_branches');
  }
  getProgs() {
    return this.execute('get', '/all_progs');
  }
  getFacs() {
    return this.execute('get', '/all_facs');
  }
  getBrancheById(id) {
    return this.execute('get', `/get_branch?id=${id}`);
  }
  getProgById(id) {
    return this.execute('get', `/get_prog?id=${id}`);
  }
  getFacById(id) {
    return this.execute('get', `/get_fac?id=${id}`);
  }
}

export default AboutUniver;
