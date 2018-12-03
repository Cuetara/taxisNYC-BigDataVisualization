import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Mockups from "./views/Mockups.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import SectionNavbar from "./layout/SectionNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/mockups",
      name: "mockups",
      components: { default: Mockups, header: SectionNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 50 },
        footer: { backgroundColor: "white" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
