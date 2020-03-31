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
}
