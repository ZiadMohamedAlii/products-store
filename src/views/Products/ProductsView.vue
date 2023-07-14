<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "../../components/products/Products-list.vue";

export default {
  name: "ProductsView",
  components: {
    ProductsList,
  },
};
</script>

<style lang="scss" scoped></style>
