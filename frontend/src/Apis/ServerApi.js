import axios from 'axios';

const ServerApi = axios.create({
  baseURL: 'http://docker.for.win.localhost:8080/api/v1',
});

export default ServerApi;
