<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const incCount = ref(0);
const decCoutn = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="incCount++">count is {{ incCount }}</button>
    <button type="button" @click="decCoutn--">count is {{ decCoutn }}</button>
  </div>
</template>
