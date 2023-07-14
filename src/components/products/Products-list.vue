<template>
  <Spinner class="mt-5" v-if="!products.length" />
  <div class="row mt-5" v-else>
    <div class="col-3 mb-3" v-for="product of products" :key="product.id">
      <!-- single product -->
      <SingleProduct :product="product" />
    </div>
  </div>
</template>

<script>
import SingleProduct from "./Single-product.vue";
import Spinner from "../Spinner.vue";

import axios from "axios";

export default {
  name: "Product-list",
  data() {
    return {
      products: [],
    };
  },
  components: {
    SingleProduct,
    Spinner,
  },

  mounted() {
    axios("https://dummyjson.com/products").then((res) => {
      const {
        data: { products: data },
      } = res;

      this.products = data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
