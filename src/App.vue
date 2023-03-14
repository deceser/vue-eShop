<script lang="ts">
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";

export default {
  components: {
    Header,
    Home,
  },
};
</script>

<template>
  <div class="app">
    <Header />
    <Home />
  </div>
  <RouterView />
</template>
