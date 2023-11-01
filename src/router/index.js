import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TeamsView from "@/views/TeamsView.vue";
import LocationsView from "@/views/LocationsView.vue";
import LifeView from "@/views/LifeView.vue";
import HowWeHireView from "@/views/HowWeHireView.vue";
import StudentsView from "@/views/StudentsView.vue";
import JobResultsView from "@/views/JobResultsView.vue";
import JobView from "@/views/JobView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
  {
    path: "/locations",
    name: "Locations",
    component: LocationsView,
  },
  {
    path: "/life-at-bobo-careers",
    name: "Life",
    component: LifeView,
  },
  {
    path: "/how-we-hire",
    name: "Hire",
    component: HowWeHireView,
  },
  {
    path: "/students",
    name: "Students",
    component: StudentsView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes, // alternatively only "routes" (ES6)
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
