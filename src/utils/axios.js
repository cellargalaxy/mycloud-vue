import axios from 'axios';
import qs from 'qs';
import util from './util'

var baseURL = 'http://localhost:8080'
var token = util.getCookie('Authorization')

function getToken() {
  return token;
}

function setToken(t) {
  token = t;
}

var baseAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

var simpleAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
simpleAxios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': getToken(),
    };
    return config
  }
);

var instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
instance.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': getToken(),
    };
    return config
  },
  error => {
    console.log(error);
    alert('网络异常:' + error);
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    alert('网络异常:' + error);
    return Promise.reject(error);
  }
);

export default {
  baseAxios: baseAxios,
  simpleAxios: simpleAxios,
  instance: instance,
  baseURL: baseURL,
  getToken: getToken,
  setToken: setToken,
};
