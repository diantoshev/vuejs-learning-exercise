export default {
  // Fn() to change tab view:
  setSelectedTab(state, payload) {
    state.selectedTab = payload;
  },

  // Fn() to add a new resource to global state:
  addResource(state, payload) {
    const newResource = {
      id: new Date().toISOString(),
      title: payload.title,
      description: payload.description,
      link: payload.url
    };
    state.storedResources.unshift(newResource);
    state.selectedTab = 'stored-resources';
  },

  deleteResource(state, payload) {
    const resIndex = state.storedResources.findIndex(res => res.id === payload);
    state.storedResources.splice(resIndex, 1);
  },
  openEditModal(state) {
    state.isEditModalOpen = true;
  },
  closeEditModal(state) {
    state.isEditModalOpen = false;
  },
  setSelectedResourceId(state, payload) {
    state.selectedResourceId = payload;
  }
}