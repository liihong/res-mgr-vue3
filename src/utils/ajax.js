//引入axios
import axios from 'axios';

let cancel, promiseArr = {};
const CancelToken = axios.CancelToken;

axios.defaults.baseURL = '/api';
//设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
};
axios.defaults.timeout = 10000;

//请求拦截器
axios.interceptors.request.use(config => {
  // 发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消');
    promiseArr[config.url] = cancel;
  } else {
    promiseArr[config.url] = cancel;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求';
        break;
      case 401:
        err.message = '未授权，请重新登录';
        break;
      case 403:
        err.message = '拒绝访问';
        break;
      case 505:
        err.message = 'http版本不支持该请求';
        break;
      default:
        err.message = `连接错误${err.response.status}`;
    }
  } else {
    err.message = "连接到服务器失败";
  }
  return Promise.resolve(err.response);
});


axios.get = function (url, param) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: param,
      cancelToken: new CancelToken(c => {
        cancel = c;
      }),
    }).then(res => {
      if (res && res.status && res.status === 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  });
},
  axios.getBlob = function (url, param) {
    return new Promise((resolve, reject) => {
      return axios({
        url,
        method: 'GET',
        params: param,
        responseType: 'blob',
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  //post请求
  axios.post = function (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        }),
      }).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      });
    });
  };

  export default axios;