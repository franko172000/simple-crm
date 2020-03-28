<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="loginUser">{{buttonText}}</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
</template>
<script>
  import userRepo from '../repository/users/UserRepository'
  import tokenService from '../services/TokenService'
  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: '',
          password: ''
        },
        buttonText : "Sign in"
      }
    },
    methods:{
        loginUser(){
            this.buttonText = "Loggin in...";
            userRepo.login(this.model)
            .then(res=>{
                this.buttonText = "Sign in";
                let userData = res.data.data.user;
                    tokenService.setUserData({
                        name : userData.name,
                    });
                this.$router.push('./')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
  }
</script>
<style>
</style>
