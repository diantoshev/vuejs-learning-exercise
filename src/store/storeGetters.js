export default {
  getStoredResources(state) {
    return state.storedResources;
  },
  getSelectedTab(state) {
    return state.selectedTab;
  },
  getEditModalState(state) {
    return state.isEditModalOpen;
  },
  getSelectedResourceId(state) {
    return state.selectedResourceId;
  }
}