import axios from 'axios';

/**
 *
 * @param {any} method
 * @param {any} url
 * @param {any} data
 * @param {any} headers
 */
function request(method, url, data, config, disallowCustomHeader) {
  // more config options for axios, please refer to this link:
  // https://www.npmjs.com/package/axios#axiosrequestconfig
  let headers = {};
  let passHeader = true;
  if (disallowCustomHeader !== undefined) {
    if (disallowCustomHeader !== null && disallowCustomHeader) {
      passHeader = false;
    }
  }
  if (passHeader) {
    headers['Cache-Control'] = 'no-cache';
  }
  return axios({
    method,
    url: url,
    data,
    headers: headers,
    ...config,
  }).then(function (response) {
    return response;
  });
}

export function get(url, data, config, disallowCustomHeader) {
  return request('get', url, data, config, disallowCustomHeader);
}

export function post(url, data, config, disallowCustomHeader) {
  return request('post', url, data, config, disallowCustomHeader);
}

export function del(url, data, config, disallowCustomHeader) {
  return request('delete', url, data, config, disallowCustomHeader);
}

export function put(url, data, config, disallowCustomHeader) {
  return request('put', url, data, config, disallowCustomHeader);
}
