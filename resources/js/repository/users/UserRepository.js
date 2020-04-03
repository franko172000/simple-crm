import apiService from '../../services/ApiService';
const resources  = '/user/';
export default {
    login(data){
        return apiService.post(resources+'login',data)
    },
    getTotalUsers(){
        return apiService.get(resources+'get-total')
    }
}
