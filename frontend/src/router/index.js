import Vue from "vue";
import Router from "vue-router";
import DiceApp from "@/components/DiceApp";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "DiceApp",
      component: DiceApp,
      props: true,
    },
    {
      path: "/implicit/callback",
    },
  ],
});

export default router;
