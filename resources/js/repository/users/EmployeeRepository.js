import apiService from '../../services/ApiService';
const resources  = '/employee/';
export default {
    getEmployee(){
        return apiService.get(resources+'get-all')
    },
    addEmployee(data){
        return apiService.post(resources+'create', data)
    },
    updateEmployee(data){
        return apiService.put(resources+'update', data)
    },
    deleteEmployee(id){
        return apiService.delete(resources+'delete/'+id)
    },
    getProfile(id){
        return apiService.get(resources+'get-profile')
    },
    uploadPhoto(data){
        return apiService.post(resources+'upload-logo',data)
    },
}
