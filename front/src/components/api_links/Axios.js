const axios = require("axios").default;


axios.defaults.baseURL = "http://localhost:4200";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;

const setRequestConfig = (queryParams) => {
  // const token = require.headers("JWT");
  const token = localStorage.getItem('Token');
  // console.log(localStorage);
  let config = {
    params: {},
  };
  if (token) {
    // config.params = queryParams;
    if(!config.headers) config.headers =  {};
    config.headers.Authorization = `Bearer ${token}`;
  };
  if(queryParams){
    config.params = queryParams
  }


  return config
};

export const GET = async (url, queryParams = null) => {
  return await axios.GET(url, { ...setRequestConfig(queryParams) });
};

export const POST = async (url, data = null, queryParams = null) => {
  return await axios.POST(url, data, { ...setRequestConfig(queryParams) });
};

export const DELETE = async (url, queryParams = null) => {
  return await axios.DELETE(url, { ...setRequestConfig(queryParams) });
};

export const PUT = async (url, data = null, queryParams = null) => {
  return await axios.PUT(url, data, { ...setRequestConfig(queryParams) });
};