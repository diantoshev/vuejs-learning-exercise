<template>
  <the-header title='Vue.js Learning Resources App'></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader/TheHeader.vue';
import TheResources from '@/components/learning-resources/TheResources/TheResources.vue';
export default {
  name: 'App',
  components: {
    TheResources,
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import 'App.css';
</style>