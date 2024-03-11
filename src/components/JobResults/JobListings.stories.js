import JobListings from "./JobListings.vue";
import JobView from "../../views/JobView.vue";
import JobResultsView from "../../views/JobResultsView.vue";
import { vueRouter } from "storybook-vue3-router";

const routes = [
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

export default {
  component: JobListings,
  title: "JobListings",
  tags: ["autodocs"],
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
    vueRouter(routes),
  ],
  argTypes: {},
  excludeStories: /.*Data$/,
};

export const Default = {};
