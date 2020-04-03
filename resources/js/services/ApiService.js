import axios from 'axios'
import tokenService from './TokenService'
import constants from '../misc/constants'

const api = axios.create({
    baseURL : constants.MAIN_SITE_URL+"api/v1/",
    headers : {
        'Authorization': 'Bearer '+ tokenService.getAccessToken(),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': tokenService.getCsrfToken()
    }});

api.interceptors.response.use(response=>response, error=>{
    if(error.response.status === 401){
        window.location.href = './login'
    }
    return Promise.reject(error.response);
});

export default api
