const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      { path: "/home", component: () => import("pages/HomePage.vue") },
      {
        path: "/detail/:id",
        component: () => import("pages/ItemDetailPage.vue"),
      },
      {
        path: "/cart",
        component: () => import("pages/CartPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
