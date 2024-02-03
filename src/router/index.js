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
import UserProfilePageView from "../views/profile/user/UserProfilePageView.vue";
import CompanyProfilePageView from '../views/profile/company.vue/CompanyProfilePageView.vue';
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

    },
    {
      path: '/jobs/companyprofile' , 
      name: 'profile',
      component : CompanyProfilePageView

    }
  ],
});

export default router;
