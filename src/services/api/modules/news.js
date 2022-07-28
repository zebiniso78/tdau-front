import Api from '../index';

class News extends Api {
  readNews() {
    return this.execute('get', '/main');
  }
}

export default News;
