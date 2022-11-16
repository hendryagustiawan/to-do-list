import { createRouter, createWebHistory } from "vue-router";
import DashboardActivity from "../pages/DasahboardActivity.vue";
import ItemList from "../pages/ItemList.vue";
import AddActivity from "../pages/NewActivity.vue";
const routes = [
  { name: "addActivity", path: "/add-activity", component: AddActivity },
  { name: "dashboardActivity", path: "/", component: DashboardActivity },
  { name: "itemList", path: "/item-list/:id", component: ItemList },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
