import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  // const createHistory = process.env.SERVER
  //   ? createMemoryHistory
  //   : process.env.VUE_ROUTER_MODE === "history"
  //   ? createWebHistory
  //   : createWebHashHistory;

  const Router = createRouter({
    history: createWebHistory(
      // import.meta.env.BASE_URL
      "/engine-management/"
    ),
    routes
  });

  return Router;
});
