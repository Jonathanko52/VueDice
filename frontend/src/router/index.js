import Vue from "vue";
import Router from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import DiceApp from "@/components/DiceApp";

Vue.use(Router);
Vue.use(VueAxios, axios)


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
