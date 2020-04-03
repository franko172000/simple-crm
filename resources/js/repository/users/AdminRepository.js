import apiService from '../../services/ApiService';
const resources  = '/admin/';
export default {
    getUsers(){
        return apiService.get(resources+'get-all-users')
    },
    getProfile(id){
        return apiService.get(resources+'get-profile')
    },
    addUser(data){
        return apiService.post(resources+'create-user', data)
    },
    updateUser(data){
        return apiService.put(resources+'update', data)
    },
    deleteUser(id){
        return apiService.delete(resources+'delete/'+id)
    },
    uploadPhoto(data){
        return apiService.post(resources+'upload-photo',data)
    },
}
