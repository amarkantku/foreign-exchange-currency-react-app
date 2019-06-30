import axios from 'axios';
import Qs from 'qs';

const instance = axios.create();
instance.defaults.timeout = process.env.REACT_APP_TIMEOUT;

const Api = {
    cancelableGet: () => {},
    get: (url, params, format = 'brackets') => instance.get(url, {
        params,
        paramsSerializer: function (params) {
            return Qs.stringify(params, {
                arrayFormat: format
            });
        },
    })
    .then(response => response.data)
    .catch(error => error),
};

export default Api;