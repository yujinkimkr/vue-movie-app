import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./HomePage.vue";
import About from "./AboutPage.vue";
import Movie from "./MoviePage.vue";
import NotFound from "./NotFound.vue";

export default createRouter({
  // Hash, History
  // Hash모드
  history: createWebHashHistory(),
  // page들을 구분하는 기능
  // https://googole.com
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});
