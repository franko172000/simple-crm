<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
           
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-if="logoSrc !== null" :src="logoSrc" class="rounded-circle">
                                        <img v-if="logoSrc === null" :src="model.logo === null ? 'https://dummyimage.com/300.png/09f/fff': 'profile-pic/company/'+model.logo" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            <div class="d-flex justify-content-between">
                                <!-- <base-button size="sm" type="danger" class="mr-4" @click="triggerClick" v-show="showremoveBtn">Remove</base-button> -->
                                <base-button size="sm" type="info" class="mr-4" @click="triggerClick" v-show="!showremoveBtn">{{uploadImgProgress ? "Uploading...":"Change"}}</base-button>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My Profile</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary" @click.prevent="updateUser">{{submitProgress ? 'Updating profile...' : 'Update profile'}}</a>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Company information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Name"
                                                        placeholder="Name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Contact Person"
                                                        placeholder="Contact Person"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.contact_person"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Url"
                                                        placeholder="Url"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.url"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder="Email"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Password"
                                                        placeholder=""
                                                        type="password"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.password"
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                               <input type="file" ref="filePic" name="profile_photo" @change="onSelectedPhoto" v-show="false" />
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import companyRepo from '../../repository/users/CompanyRepository';
  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          email: '',
          name: '',
          contact_person: '',
          password: '',
          url: '',
          logo: '',
          user_id: '',
        },
        submitProgress:false,
        showremoveBtn: false,
        uploadImgProgress: false,
        logoSrc: null,
      }
    },
    methods:{
            updateUser(){
                this.submitProgress = true;
                companyRepo.updateCompany(this.model)
                .then(res=>{
                    this.getUser();
                    this.showModal = false;
                    this.submitProgress = false;
                    this.$notify({
                        type: 'success',
                        title: 'Profile updated successfully'
                    })
            })
        },
        getUser(){
                companyRepo.getProfile()
                .then(res=>{
                    let user = res.data.data.user;
                    this.model.name = user.name
                    this.model.contact_person = user.contact_person
                    this.model.email = user.email
                    this.model.user_id = user.companyid;
                    this.model.url = user.url;
                    this.model.logo = user.company_logo;
                })
        },
        triggerClick(){
            this.$refs.filePic.click();
        },
        onSelectedPhoto(e){
            this.logoSrc =  URL.createObjectURL(e.target.files[0]);
            let data = new FormData();
            data.append('logo', this.$refs.filePic.files[0]);
             this.uploadImgProgress = true
             companyRepo.uploadPhoto(data)
            .then(res=>{
                this.$notify({
                    type: 'success',
                    title: 'Logo updated successfully'
                })
                 this.uploadImgProgress = false
            })
           
        },
    },
    mounted(){
        this.getUser();
    }
    
  };
</script>
<style></style>
