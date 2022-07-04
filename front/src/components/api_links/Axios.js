const Axios = require("axios").default;

Axios.defaults.baseURL = "http://localhost:3000";
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.timeout = 5000;
// Axios.defaults.withCredentials = true;

const setRequestConfig = (queryParams) => {
  // const token = require.headers("JWT");
  const token = localStorage.getItem('Token');
  // console.log(source.token, queryParams);
  let config = {
    // cancelToken: source.token,
    params: {},
  };
  if (token) {
    config.params = queryParams;
  }

  return config;
};

export const GET = async (url, queryParams = null) => {
  return await Axios.get(url, { ...setRequestConfig(queryParams) });
};

export const POST = async (url, data = null, queryParams = null) => {
  return await Axios.post(url, data, { ...setRequestConfig(queryParams) });
};

export const DELETE = async (url, queryParams = null) => {
  return await Axios.delete(url, { ...setRequestConfig(queryParams) });
};

export const PUT = async (url, data = null, queryParams = null) => {
  return await Axios.put(url, data, { ...setRequestConfig(queryParams) });
};