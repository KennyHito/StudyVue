import axios from 'axios';
//封装请求方法
async function formatReq(type, url, data) {
  return new Promise((reslove, reject,) => {
    axios({
      method: type,
      url: `${url}`,
      data: data,
    }).then(r => {
      reslove(r)
    }).catch(e => {
      reject(e);
    });
  });
}

const Http = {
  get: (url, data) => formatReq('get', url, data),
  post: (url, data) => formatReq('post', url, data),
  put: (url, data) => formatReq('put', url, data),
  patch: (url, data) => formatReq('patch', url, data),
  delete: (url, data) => formatReq('delete', url, data)
};

export default Http;
