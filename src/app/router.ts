import { createWebHistory } from "@ionic/vue-router";
import { createRouter } from "@ionic/vue-router";
import { routes } from "~/pages";

export default createRouter({
  history: createWebHistory(),
  routes,
});
