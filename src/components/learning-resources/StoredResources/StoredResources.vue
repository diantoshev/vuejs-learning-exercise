<template>
  <ul>
    <resource-item
      v-for='resource in storedResources'
      :id='resource.id'
      :key='resource.id'
      :title='resource.title'
      :description='resource.description'
      :resource-link='resource.link'
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from '@/components/learning-resources/ResourceItem/ResourceItem.vue';
import { useStore } from 'vuex';
// import { computed } from 'vue';

export default {
  name: 'StoredResources',
  components: { ResourceItem },
  setup() {
    const store = useStore();
    const storedResources = store.getters.getStoredResources;

    return {
      storedResources
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>