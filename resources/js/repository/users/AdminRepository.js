import apiService from '../../services/ApiService';
const resources  = '/admin/';
export default {
    getUsers(){
        return apiService.get(resources+'get-all-users')
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
}
