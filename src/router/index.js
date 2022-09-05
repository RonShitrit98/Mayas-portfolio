import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "../views/main-page.vue";
import artDetails from "../components/art-details.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-page",
      component: mainPage,
      children: [
        {
          path: ":id",
          component: artDetails,
        },
      ],
    },
  ],
});

export default router;
