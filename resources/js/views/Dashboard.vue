<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Companies"
                                type="gradient-orange"
                                :sub-title="''+companies"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                       
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Employees"
                                type="gradient-green"
                                :sub-title="''+employee"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                       
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Admin Users"
                                type="gradient-info"
                                :sub-title="''+admin_users"
                                icon="ni ni-circle-08"
                                class="mb-4 mb-xl-0"
                    >

                        
                    </stats-card>
                </div>
            </div>
        </base-header>
    </div>
</template>
<script>
import userRepo from '../repository/users/UserRepository';
import employeeRepo from '../repository/users/EmployeeRepository';
import adminRepo from '../repository/users/AdminRepository';
import companyRepo from '../repository/users/CompanyRepository';

  export default {
    data() {
      return {
        employee:0,
        companies:0,
        users:0,
        admin_users:0,
      };
    },
    methods: {
      
    },
    mounted() {
        
        employeeRepo.getEmployee()
        .then(res=>{
          this.employee = res.data.data.employees.length;
        })
        adminRepo.getUsers()
        .then(res=>{
          this.admin_users = res.data.data.users.length;
        })
        companyRepo.getCompanies()
        .then(res=>{
          this.companies = res.data.data.companies.length;
        })
    }
  };
</script>
<style></style>
