import { createStore } from 'vuex';
import storeGetters from '@/store/storeGetters';
import storeActions from '@/store/storeActions';
import storeMutations from '@/store/storeMutations';

const store = createStore({
  state() {
    return {
      selectedTab: 'stored-resources',
      isEditModalOpen: false,
      selectedResourceId: '',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Vue.js Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'vue-style-guide',
          title: 'Vue.js Style Guide',
          description: 'The official Vue.js style guide',
          link: 'https://v2.vuejs.org/v2/style-guide/?redirect=true#Empty-lines-in-component-instance-options-recommended'
        }
      ]
    };
  },
  getters: storeGetters,
  actions: storeActions,
  mutations: storeMutations
});

export default store;