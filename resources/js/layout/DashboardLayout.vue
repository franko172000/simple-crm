<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
        v-show="userType === 'admin'"
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        <sidebar-item v-show="userType === 'admin' || userType === 'company'" :link="{name: 'Employees', icon: 'ni ni-planet text-blue', path: '/employees'}"/>
        <sidebar-item v-show="userType === 'admin'" :link="{name: 'Companies', icon: 'ni ni-pin-3 text-orange', path: '/companies'}"/>
        <sidebar-item v-show="userType === 'admin'" :link="{name: 'Admin Users', icon: 'ni ni-bullet-list-67 text-red', path: '/admin-users'}"/>
        <sidebar-item v-show="userType === 'admin' || userType === 'company' || userType === 'employee'" :link="{name: 'Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Logout', icon: 'ni ni-key-25 text-info', path: '/logout'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import TokenService from '../services/TokenService';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue',
        userType: TokenService.getUserData().type //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
