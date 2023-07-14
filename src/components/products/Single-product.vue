<template>
  <div class="card h-100">
    <img :src="product.thumbnail" class="card-img-top" :alt="product.title" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.description }}
      </p>
      <RouterLink
        :to="{
          name: 'Details',
          params: { name: product.title, id: product.id },
        }"
        class="btn btn-primary mt-auto"
        >Go to Details</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SingleProduct",
  props: ["product"],
};
</script>

<style scoped>
img {
  height: 150px;
}
</style>
