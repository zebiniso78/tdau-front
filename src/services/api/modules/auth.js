import Api from '../index';

class Auth extends Api {
  login(data) {
    return this.execute('post', '/login', data);
  }
  editLogin(data) {
    return this.execute('post', '/send_code', data);
  }
  editCode(data) {
    return this.execute('post', '/reset_password/code', data);
  }
  editPassword(data) {
    return this.execute('post', '/reset_password', data);
  }
  registration(data) {
    return this.execute('post', '/registration', data);
  }
  verify(data) {
    return this.execute('post', '/registration/code', data);
  }
}

export default Auth;
