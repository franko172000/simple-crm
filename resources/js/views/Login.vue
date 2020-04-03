<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        :class="{'is-invalid':errors.has('email')}" 
                                        v-validate="'required|email'" 
                                        name="email"
                                        v-model="model.email">
                            </base-input>
                            <span class="is_invalid" v-show="errors.has('email')">{{errors.first('email')}}</span>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        :class="{'is-invalid':errors.has('password')}" 
                                        v-validate="'required'" 
                                        name="password"
                                        v-model="model.password">
                            </base-input>
                             <span class="is_invalid" v-show="errors.has('password')">{{errors.first('password')}}</span>

                            
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
  import ToastF from '../plugins/ToastF'
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
            this.$validator.validate().then(valid => {
                    if(valid){
                        this.buttonText = "Loggin in...";
                        userRepo.login(this.model)
                        .then(res=>{
                            this.buttonText = "Sign in";
                            let userData = res.data.data.user;
                                tokenService.setUserData({
                                    name : userData.name,
                                    acct_type: userData.acct_type
                                });
                                tokenService.setAccessToken(res.data.data.token)

                             ToastF({
                                message:"Login successful",
                                type:'success',
                                animation:'slide'
                            });
                            if(userData.acct_type === "admin"){
                                window.location.href = "./dashboard"
                            }else{
                                window.location.href = "./profile"
                                //this.$router.push('./profile')
                            }
                        })
                        .catch(err=>{
                            if(err.status === 404){
                                ToastF({
                                    message:"Account not found",
                                    type:'danger',
                                    animation:'slide'
                                })
                            }
                            if(err.status === 401){
                                ToastF({
                                    message:"Invalid login",
                                    type:'danger',
                                    animation:'slide'
                                })
                            }
                            this.buttonText = "Sign in";
                        })
                    }
                })
        },
        customValidator(){
                return {
                    custom:{
                        email:{
                            required:"Please enter email",
                        },
                        password:{
                            required:"Please enter password",
                        }
                    }
                }
            },
    },
    mounted(){
        //initilaize the validator
        this.$validator.localize('en',this.customValidator());
    }
  }
</script>
<style>
    .is_invalid{
        font-size: 11px;
        color: red;
    }
</style>
