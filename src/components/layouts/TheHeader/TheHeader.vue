<template>
  <header>
    <h1>{{ props.title }}</h1>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #10580d;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  margin: 0;
}
</style>