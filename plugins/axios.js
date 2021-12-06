import axios from 'axios';
axios.interceptors.request.use(config => {
    if (config.method === 'POST' || config.method === 'PATCH' || config.method === 'PUT')
        config.headers['Content-Type'] = 'application/json;charset=utf-8';

    const accessToken = AuthService.getAccessToken();
    if (accessToken) config.headers.Authorization = 'Bearer ' + accessToken;

    return config;
});