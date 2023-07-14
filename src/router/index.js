import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/Products/ProductsView.vue";
import AddProductView from "../views/Products/AddProductView.vue";
// import EditProductView from "../views/Products/EditProductView.vue";
import ProductDetailsView from "../views/Products/ProductDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: HomeView,
    },
    {
      path: "/products",
      component: ProductsView,
    },
    {
      path: "/add-product",
      name: "Add",
      component: AddProductView,
    },
    // {
    //   path: "/products",
    //   component: ProductsView,
    // },
    {
      path: "/products/:name/:id",
      name: "Details",
      component: ProductDetailsView,
    },
  ],
});

export default router;
