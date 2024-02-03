import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobView from "../views/JobView.vue";
import JobDescriptionView from "../views/JobDescriptionView.vue";
import ApplyJobView from "../views/ApplyJobView.vue";
import creteJobView from "../views/company/creteJobView.vue";
import UserProfilePageView from '../views/profile/user/UserProfilePageView.vue';
import AccountTypeView from '../views/authentication/AccountTypeView.vue';
import loginView from '../views/authentication/loginView.vue';
import SignUpView from '../views/authentication/user/SignUpView.vue';
import SignUpViewCompany from '../views/authentication/company/SignUpView.vue';
import detailsView from '../views/authentication/company/detailsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },
    {
      path: "/jobs/job",
      name: "job",
      component: JobDescriptionView,
    },
    {
      path: "/jobs/job/apply",
      name: "apply",
      component: ApplyJobView,
    },
    {
      path: "/jobs/create",
      name: "create",
      component: creteJobView,
    },
    {
      path: '/jobs/user/profile' , 
      name: 'profile',
      component : UserProfilePageView

    } , 
    {
      path: '/AccountType' , 
      name: 'AccountType',
      component : AccountTypeView

    } , 
      {
      path: '/AccountType/usersignup' , 
      name: 'signup',
      component :SignUpView
    } , 
      {
      path: '/AccountType/companysignup' , 
      name: 'SignUpViewCompany',
      component :SignUpViewCompany
    } , 
    {
      path: '/AccountType/companysignup/details' , 
      name: 'detailsView',
      component :detailsView
    } , 
     {
      path: '/login' , 
      name: 'login',
      component : loginView

    } , 
  ],
});

export default router;
