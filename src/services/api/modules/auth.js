import Api from '../index';

class Auth extends Api {
  login(data) {
    return this.execute('post', '/login', data);
  }
  registration(data) {
    return this.execute('post', '/registration', data);
  }
  verify(data) {
    return this.execute('post', '/registration/code', data)
  }
}

export default Auth;
