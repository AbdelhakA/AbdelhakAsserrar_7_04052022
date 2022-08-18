const axios = require("axios").default;


axios.defaults.baseURL = "http://localhost:4200";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;

const setRequestConfig = (queryParams, headers) => {
  const token = localStorage.getItem('Token');
  let config = {
    params: {},
  };

  if(queryParams){
    config.params = queryParams;
  }
  if(headers) {
    config.headers = headers;
  }

  if (token) {
    if (!config.headers) {
      config.headers={};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config
};

export const GET = async (url, queryParams = null, headers = null) => {
  return await axios.get(url, { ...setRequestConfig(queryParams, headers)});
};

export const POST = async (url, data = null, queryParams = null, headers = null) => {
  return await axios.post(url, data, { ...setRequestConfig(queryParams, headers)});
};

export const DELETE = async (url, queryParams = null) => {
  return await axios.delete(url, { ...setRequestConfig(queryParams) });
};

export const PUT = async (url, data = null, queryParams = null) => {
  return await axios.put(url, data, { ...setRequestConfig(queryParams) });
};