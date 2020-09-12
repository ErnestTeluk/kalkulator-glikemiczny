import axios from 'axios';

const ServerApi = axios.create({
  baseURL: 'http://server:8080/api/v1',
});

export default ServerApi;
