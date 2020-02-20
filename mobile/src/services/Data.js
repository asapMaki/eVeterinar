import axios from 'axios';
import env from 'react-native-config';

// Add a request interceptor
// Do something with request
// Do something with request error
axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

// Add a response interceptor
// Do something with response data
// Do something with response error
axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

// SERVICE KEY CAN BE USED WHEN WE HAVE MICROSEVICE BACKEND, USE KEY FOR ENV VARIABLES eg. USER key for userService
let dataService = (method = 'GET', serviceKey, url, {token, locale}, data = {}) => {
  let obj = {};
  if (Object.keys(data).length !== 0) obj.data = data;

  return axios({
    method,
    ...obj,
    url: env[serviceKey] + url,
    headers: {
      'Accept-Language': locale,
      Authorization: 'Bearer ' + token,
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'Accept-Encoding': 'gzip, deflate,br',
      Connection: 'keep-alive',
    },
  });
};

export default dataService;
