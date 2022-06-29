import Api from '../index';

class StructureApi extends Api {
  getStructure() {
    return this.execute('get', 'get_structure');
  }
}

export default StructureApi;
