import Api from '../index';

class RectorMessage extends Api {
  getMessage() {
    return this.execute('get', 'get_rector_msg');
  }
}

export default RectorMessage;
