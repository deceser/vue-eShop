<template>
  <div class="home-page">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProductCard from "../components/ProductCard.vue";

export default defineComponent({
  components: {
    ProductCard,
  },
});
</script>

<style scoped lang="scss">
.home-page {
  width: 100%;
  justify-items: center;

  margin-top: 50px;

  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
}
</style>
