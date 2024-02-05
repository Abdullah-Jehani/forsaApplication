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
import CompanyProfilePageView from '../views/profile/company/CompanyProfilePageView.vue';

import AccountTypeView from '../views/authentication/AccountTypeView.vue';
import loginView from '../views/authentication/loginView.vue';
import SignUpView from '../views/authentication/user/SignUpView.vue';
import SignUpViewCompany from '../views/authentication/company/SignUpView.vue';
import detailsView from '../views/authentication/company/detailsView.vue';
import logoView from '../views/authentication/company/logoView.vue';
import UserDetailsView from '../views/authentication/user/UserDetailsView.vue';
import profilePictureView from '../views/authentication/user/profilePictureView.vue';

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
      path: '/jobs/userprofile' , 
      name: 'profile',
      component : UserProfilePageView

    } , 
    {
      path: '/AccountType' , 
      name: 'AccountType',
      component : AccountTypeView

    } , 
       {
      path: '/jobs/companyprofile' , 
      name: 'CompanyProfile',
      component : CompanyProfilePageView

    },
      {
      path: '/AccountType/usersignup' , 
      name: 'signup',
      component :SignUpView
    } , 
    {
      path: '/AccountType/usersignup/details' , 
      name: 'UserDetailsView',
      component :UserDetailsView
    },
    {
      path: '/AccountType/usersignup/details/photo' ,
      name: 'profilePictureView',
      component :profilePictureView
    },
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
      path: '/AccountType/companysignup/details/logo' , 
      name: 'logoView',
      component :logoView
    } , 
     {
      path: '/login' , 
      name: 'login',
      component : loginView

    } , 
  ],
});

export default router;