import Api from '../index';

class Partners extends Api {
   readPartners() {
      return this.execute('get', '/get_foreign_universities');
   }
}

export default Partners;
