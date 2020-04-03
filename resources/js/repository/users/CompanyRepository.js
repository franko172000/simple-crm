import apiService from '../../services/ApiService';
const resources  = '/company/';
export default {
    getCompanies(){
        return apiService.get(resources+'get-all')
    },
    addCompany(data){
        return apiService.post(resources+'create',data)
    },
    updateCompany(data){
        return apiService.put(resources+'update',data)
    },
    deleteCompany(id){
        return apiService.delete(resources+'delete/'+id)
    },
    getProfile(id){
        return apiService.get(resources+'get-profile')
    },
    uploadPhoto(data){
        return apiService.post(resources+'upload-logo',data)
    },
    getPublicCompanies(){
        return apiService.get('public/get-companies')
    },
}
