import axios from "axios";
import toast from "react-hot-toast";
import {getToken} from "../../Token"

class ImageApi {
  constructor() {
    this.api2client = axios.create({
      baseURL: process.env.REACT_APP_API_UPLOAD_ROOT,
    });
    this.api2client.defaults.params = {};
    this.query = {};
    this.token = getToken();
    this.setInterceptors();
  }
  setInterceptors() {
    this.api2client.interceptors.response.use(
      (resp) => {
        if (resp.data) {
          if (typeof resp.data === "string") {
            resp.data = {
              data: resp.data,
              status: resp.status,
            };
          } else {
            resp.data.status = resp.status;
          }
        }
        return resp.data;
      },
      (err) => {
        throw err;
      }
    );
  }
  async execute(method, url, data, onUploadProgress) {
    const accessToken = getToken();
    let headers = {};
    if (accessToken) {
      headers = {
        Authorization: accessToken,
      };
    }
    try {
      const resp = await this.api2client({
        method,
        url,
        data,
        headers,
        onUploadProgress,
      });
      if (url.endsWith("paging")) {
        const params = this.makeQueryString(data);
        window.history.replaceState(
          null,
          "Comfort Oil",
          window.location.href.split("?")[0] + params
        );
      }


      return resp.data;
    } catch (err) {
      const error = err.response;
      if (error.code === 401) window.location.replace('/')
      console.log(error);
      if (!error) {
        toast.error("Internet connection error!");
        throw err;
      } else throw err.response.data;
    }
  }
  setQuery(key, value) {
    if (!this.query) {
      this.query = {};
    }
    this.query[key] = value;
    this.queryString = null;
    // eslint-disable-next-line
    for (const i in this.query) {
      if (this.queryString == null) {
        this.queryString = "?";
      } else {
        this.queryString += "&";
      }
      this.queryString += `${i}=${this.query[i]}`;
    }
  }
  makeQueryString(params) {
    let queryString = "";

    Object.keys(params).forEach((key) => {
      if (
        params[key] !== null &&
        params[key] !== "" &&
        params[key] !== undefined
      ) {
        let value = params[key];
        if (typeof value === "string") {
          value = encodeURI(value);
        }
        queryString = `${queryString + key}=${value}&`;
      }
    });
    queryString = queryString.slice(0, -1);
    queryString = queryString ? `?${queryString}` : queryString;

    return queryString;
  }
  existToken() {
    return this.token.exist();
  }
  clearToken() {
    this.token.clear();
  }
  /**
   * common api
   */

}
export default ImageApi;
