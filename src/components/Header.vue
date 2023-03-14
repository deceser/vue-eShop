<template>
  <header class="header">
    <div class="logo">
      <LogoSvg />
    </div>
    <div class="search-input">
      <SearchSvg />
      <input type="text" placeholder="Search..." />
    </div>
    <div class="avatar">A</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LogoSvg from "../assets/svg/LogoSvg.vue";
import SearchSvg from "../assets/svg/SerachSvg.vue";

export default defineComponent({
  components: {
    LogoSvg,
    SearchSvg,
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 20px;
  border-bottom: 1px solid #cccccc;

  .logo {
    width: 40px;
    height: 40px;
  }

  .search-input {
    display: flex;
    align-items: center;
    background: #f7f7f7;
    border-radius: 32px;

    padding-left: 10px;
    padding-top: 4px;

    cursor: pointer;

    input {
      padding: 15px;
      width: 500px;
      height: 40px;

      background: transparent;
      border: none;
      outline: none;
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;

    border-radius: 50px;
    background-color: #f7f7f7;
  }
}
</style>
