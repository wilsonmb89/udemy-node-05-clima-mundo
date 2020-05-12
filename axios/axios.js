const axios = require('axios');

const createInstance = (url, headers) => {
  return axios.create({
    baseURL: url,
    headers
  });
};

const getHeadersHttp = (url, headers) => {
  const instance = createInstance(url, headers);
  return new Promise(async (resolve, reject) => {
    await instance.get()
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const getSimple = (url) => {
  return new Promise(async (resolve, reject) => {
    await axios.get(url)
      .then(res => {
        if (res.status === 200) {
          return resolve(res.data);
        }
        return reject(res);
      })
      .catch(err => reject(err));
  });
};

module.exports = {
  getHeadersHttp,
  getSimple
};