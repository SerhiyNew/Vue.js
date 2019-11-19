import Vue from "vue";
import Router from "vue-router";
import Greeting from "./views/Greeting.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "greeting",
      component: Greeting
    },
    {
      path: "/personCard",
      name: "personCard",
      component: () => import("./views/PersonCard.vue")
    },
    {
      path: "/skillsCard",
      name: "skillsCard",
      component: () => import("./views/SkillsCard.vue")
    }
  ]
});
