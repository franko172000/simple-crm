import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import TokenService from '@/services/TokenService'
Vue.use(Router)
const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "demo" */ './views/Home.vue')
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          meta:{
            requiresAuth:true,
          },
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/employees',
          name: 'Employees',
          meta:{
            requiresAuth:true,
          },
          component: () => import(/* webpackChunkName: "demo" */ './views/Employee.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          meta:{
            requiresAuth:true,
          },
          component: () => {
            let type = TokenService.getUserData().type
            let component = "";
            switch(type){
              case "admin":
                component = "UserProfile.vue";
              break;
              case "employee":
                component = "EmployeeProfile.vue";
              break;
              case "company":
                component = "CompanyProfile.vue";
              break;
            }
            return import(/* webpackChunkName: "demo" */ './views/profile/'+component);
          }
        },
        {
          path: '/companies',
          name: 'maps',
          requiresAuth:true,
          component: () => import(/* webpackChunkName: "demo" */ './views/Company')
        },
        {
          path: '/admin-users',
          name: 'tables',
          meta:{
            requiresAuth:true,
          },
          component: () => import(/* webpackChunkName: "demo" */ './views/AdminUsers')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
      ]
    },
    {
      path: '/logout',
      name: 'Logout',
      meta:{
        logout:true
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
      if(TokenService.getAccessToken() === null || TokenService.getAccessToken() === undefined){
          next({
              path:'./login',
              params : {nextUrl : to.fullPath}
          })
      }else{
          next()
      }
  }else if(to.matched.some(record=>record.meta.logout)){
      //remove access token
      TokenService.removeAccessToken();
      //redirect to login
      window.location.href = './login'
  }
  else{
      next()
  }
})

export default router