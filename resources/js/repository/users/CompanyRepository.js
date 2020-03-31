import apiService from '../../services/ApiService';
const resources  = '/company/';
export default {
    getCompanies(){
        return apiService.get(resources+'get-all')
    },
}
