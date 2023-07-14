<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped></style>
