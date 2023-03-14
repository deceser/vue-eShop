<script lang="ts">
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";

export default {
  components: {
    Header,
    Home,
    Product,
  },
};
</script>

<template>
  <Header />
  <Home />
  <Product />
</template>
