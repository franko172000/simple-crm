<template>
<div>
          <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="img/crmLogo.png" class="navbar-brand-img" alt="..."></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron " style="margin-top:7em;">
      <h1 class="display-3" style="color:#ffffff;">Welcome to CRM </h1>
      
    </header>

    <!-- Page Features -->
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(company,index) in companies" :key="index">
        <div class="card h-100">
          <img class="card-img-top" style="width:80%; margin:auto;" :src="company.company_logo">
          <div class="card-body">
            <h4 class="card-title">{{company.name}}</h4>
            
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">View More</a>
          </div>
        </div>
      </div>
    </div>

    <a href="#" class="btn btn-sm btn-primary">Prev</a> <a href="#" class="btn btn-sm btn-primary">Next</a>
    <!-- /.row -->

  </div>
  <!-- /.container -->

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; CRM</p>
    </div>
    <!-- /.container -->
  </footer>

    </div>
</template>

<script>
import companyRepo from '../repository/users/CompanyRepository';
export default {
    data() {
      return {
        companies:[],
        title:'Company List',
      }
    },
    methods: {
        getcompanies(){
            companyRepo.getPublicCompanies()
            .then(res=>{
                this.companies = res.data.data.companies;
            })
        }
    },
    mounted(){
      this.getcompanies();
    }
}
</script>

<style scoped>
.bg-light {
    background-color: #e9ecef !important;
}
.display-3{
    color: white;
}
.jumbotron {
    color: white;
	background-color: #be70dc;
	border-radius: 0.4375rem;
}
.navbar-brand-img {
    width: 60px;
    height: 50px;
}
.btn-primary:hover {
	color: #fff;
	background-color: #be70dc;
	border-color: #be70dc;
}
.btn-primary {
	color: #fff;
	background-color: #be70dc;
	border-color: #be70dc;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.navbar-dark .navbar-nav .nav-link {
	color: rgb(14, 13, 13);
}
</style>