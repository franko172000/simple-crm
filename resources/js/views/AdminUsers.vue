<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                 
                    <div class="card shadow">
                      <div class="card-header border-0">
                        <div class="row align-items-center">
                          <div class="col">
                            <h3 class="mb-0">
                              {{title}}
                            </h3>
                          </div>
                          <div class="col text-right">
                            <base-button type="primary" size="sm" @click="showModal = true">Add Users</base-button>
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive">
                              <base-table class="table align-items-center table-flush"
                                :thead-classes="'thead-light'"
                                tbody-classes="list"
                                :data="users">
                                <template slot="columns">
                                  <th>First name</th>
                                  <th>Last name</th>
                                  <th>Role</th>
                                  <th>Email</th>
                                  <th></th>
                                </template>

                                <template slot-scope="{row}">
                                  <th scope="row">
                                    <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="Image placeholder" :src="row.profile_photo === null ? 'https://dummyimage.com/300.png/09f/fff': 'profile-pic/admin/'+row.profile_photo" >
                                        
                                      </a>
                                      <div class="media-body">
                                        <span class="name mb-0 text-sm">{{row.first_name}}</span>
                                      </div>
                                    </div>
                                  </th>
                                  <td class="budget">
                                    {{row.last_name}}
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">
                                      
                                      <span class="status">{{row.role}}</span>
                                    </badge>
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">
                                      
                                      <span class="status">{{row.email}}</span>
                                    </badge>
                                  </td>
                                <td class="text-right">
                                    <base-button type="primary" size="sm" @click="editUser(row)" >Edit</base-button>
                                    <base-button type="danger" size="sm" @click="deleteUser(row)" >Delete</base-button>
                                  </td>

                                </template>

                              </base-table>
                            </div>

              
                            </div>
                          </div>
                      </div>
                </div>

          <modal :show="showModal">
            <h2 class="text-center">{{editMode ? 'Edit User' : 'Add User'}}</h2>
              <form role="form">
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="First name"
                                    v-model="model.first_name">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Last name"
                                    v-model="model.last_name">
                        </base-input>

                        <select class="form-control mt-2" v-model="model.role">
                            <option value="">Select role</option>
                            <option value="admin">Admin</option>
                            <option value="sub-admin">Sub Admin</option>
                            
                        </select>

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    v-model="model.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    v-model="model.password">
                        </base-input>


                        <div class="text-muted mt-2" v-show="!editMode">
                            <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="logo" :src="logoSrc" />
                                      </a>
                                      <div class="media-body">
                                        <input type="file" ref="filePic" name="profile_photo" @change="onSelectedPhoto" v-show="false" />
                                        <base-button type="info" @click="triggerUpload" v-show="!showremoveBtn" class="my-4 btn-sm">Select Logo</base-button>
                                        <base-button type="danger" @click="removePhoto" v-show="showremoveBtn" class="my-4 btn-sm">Remove Logo</base-button>
                                      </div>
                                    </div>
                            
                        </div>
                        <div class="text-center">
                            <base-button type="primary" @click.prevent="updateUser" v-show="editMode" class="my-4">{{submitProgress ? 'Updating users...' : 'Update User'}}</base-button><br />
                            <base-button type="primary" @click.prevent="addUser" v-show="!editMode" class="my-4">{{submitProgress ? 'Adding users...' : 'Create User'}}</base-button><br />
                            <a href="#" @click.prevent="closeForm">Close form</a>
                        </div>
              </form>
          </modal>

    </div>
</template>
<script>
  import adminRepo from '../repository/users/AdminRepository';
  export default {
    data() {
      return {
        employees:[],
        users:[],
        title:'Admin Users',
        model:{first_name:"",last_name:"",role:"", email:"", password:"",user_id:""},
        showModal : false,
        editMode : false,
        submitProgress:false,
        showremoveBtn: false,
        logoSrc: null
      }
    },
    methods: {
        editUser(row){
            this.model.first_name = row.first_name
            this.model.last_name = row.last_name
            this.model.email = row.email
            this.model.user_id = row.user_id
            this.showModal = true;
            this.editMode = true;
        },
        closeForm(){
          this.showModal = false,
          this.editMode = this.editMode ? false : true;
        },
        getUsers(){
            adminRepo.getUsers()
            .then(res=>{
                this.users = res.data.data.users;
            })
        },
        triggerUpload(){
            this.$refs.filePic.click();
        },
        onSelectedPhoto(e){
            this.logoSrc =  URL.createObjectURL(e.target.files[0]);
            this.showremoveBtn = true
        },
        removePhoto(){
            this.showremoveBtn = false;
            this.logoSrc = null;
        },
        addUser(){
          let data = new FormData();
          data.append('profile_logo', this.$refs.filePic.files[0]);
            for(let field in this.model){
                data.append(field, this.model[field]);
            }
            this.submitProgress = true;
            adminRepo.addUser(data)
            .then(res=>{
                this.getUsers();
                this.showModal = false;
                this.submitProgress = false;
                this.$notify({
                  type: 'success',
                  title: 'User added successfully'
                })
            })
            .catch(err=>{
                if(err.status === 422){
                    this.$notify({
                        type: 'danger',
                        title: err.data.message
                    })
                }
                this.submitProgress = false;
            })
        },
        updateUser(){
          let data = new FormData();
          let file = this.$refs.filePic.files[0];
            this.submitProgress = true;
            adminRepo.updateUser(this.model)
            .then(res=>{
                this.getUsers();
                this.showModal = false;
                this.submitProgress = false;

                this.model.first_name = ""
                this.model.last_name = ""
                this.model.email = ""
                this.model.user_id = ""
                this.showModal = false;
                this.editMode = false;

                this.$notify({
                  type: 'success',
                  title: 'User updated successfully'
                })
          })
        },
        deleteUser(row){
          let __this = this;
          this.$alertify.confirm('Delete user?',function(){
              adminRepo.deleteUser(row.user_id)
              .then(res=>{
                let index = __this.users.indexOf(row);
                __this.users.splice(index,1);
                __this.$notify({
                      type: 'success',
                      title: 'user deleted'
                    })
              })
          })
        }
    },
    mounted(){
      this.getUsers();
    }
  };
</script>
<style></style>
