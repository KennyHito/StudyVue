import axios from 'axios';

const service = axios.create({
  baseURL: '/', // 与Mock.js规则路径一致
  timeout: 10000
});

export const getUserList = (params = {}) => {
  return service.post('/api/users', {
    page: params.page || 1,
    pageSize: params.pageSize || 10,
    keyword: params.keyword || ''
  });
};