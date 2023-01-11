<template>
  <base-card class='resourceButton__container'>
    <base-button @click="setSelectedTab('stored-resources')" :mode='storedResourceButtonMode()'>
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode='addResourceButtonMode()'>Add
      resource
    </base-button>
  </base-card>
  <keep-alive>
   <component :is='selectedTab'></component>
  </keep-alive>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import StoredResources from '@/components/learning-resources/StoredResources/StoredResources.vue';
import AddResource from '@/components/learning-resources/AddResource/AddResource.vue';
import { useStore } from 'vuex';
import {computed} from 'vue';

export default {
  name: 'TheResources',
  components: {
    BaseCard,
    BaseButton,
    AddResource,
    StoredResources
  },
  setup() {
    const store = useStore();
    const selectedTab = computed(function(){
      return store.getters.getSelectedTab;
    });

    const setSelectedTab = (value) => {
      store.dispatch('setSelectedTab', value);
    };
    const addResourceButtonMode = function() {
      return selectedTab.value === 'add-resource' ? 'selectedButton' : null;
    };

    const storedResourceButtonMode = function() {
      console.log(selectedTab);
      return selectedTab.value === 'stored-resources' ? 'selectedButton' : null;
    };

    return {
      selectedTab,
      addResourceButtonMode,
      storedResourceButtonMode,
      setSelectedTab,
      StoredResources
    };
  }
};
</script>

<style scoped>
@import './TheResources.css';
</style>