<template>
  <edit-resource-dialog
    v-if='isEditModalOpen'

  ></edit-resource-dialog>
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

<script setup>
import ResourceItem from '@/components/learning-resources/ResourceItem/ResourceItem.vue';
import { useStore } from 'vuex';
import EditResourceDialog from '@/components/learning-resources/EditResource/EditResourceDialog.vue';
import { computed } from 'vue';

const store = useStore();
const storedResources = store.getters.getStoredResources;
const isEditModalOpen = computed(() => store.getters.getEditModalState);
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>