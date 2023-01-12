<template>
  <the-header title='Vue.js Learning Resources App'></the-header>
  <resource-form></resource-form>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader/TheHeader.vue';
import TheResources from '@/components/learning-resources/TheResources/TheResources.vue';
import ResourceForm from '@/components/learning-resources/ResourceForm/ResourceForm.vue';
export default {
  name: 'App',
  components: {
    TheResources,
    TheHeader,
    ResourceForm
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import './App.css';
</style>