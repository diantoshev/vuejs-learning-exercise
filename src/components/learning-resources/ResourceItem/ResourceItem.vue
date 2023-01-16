<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <div>
          <base-button mode='red' @click='deleteResource(id)'>Delete</base-button>
          <base-button mode='blue' @click='openEditModal'>Edit</base-button>
        </div>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href='resourceLink'>View Resources</a>
      </nav>
    </base-card>
  </li>
</template>

<script setup>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import { useStore } from 'vuex';
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true,
    default: 'Default title'
  },

  description: {
    type: String,
    required: true,
    default: 'Default resource description'
  },

  resourceLink: {
    type: String,
    required: true,
    default: ''
  }
});
const store = useStore();

//Methods:
const openEditModal = function() {
  store.dispatch('openEditModal');
  store.dispatch('setSelectedResourceId', props.id);
};
const deleteResource = function() {
  store.dispatch('deleteResource', props.id);
};
</script>

<style scoped>
@import "ResourceItem.css";
</style>