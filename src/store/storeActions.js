export default {
  getStoredResources({ commit }) {
    commit('getStoredResources');
  },

  setSelectedTab({ commit }, payload) {
    commit('setSelectedTab', payload);
  },

  addResource({ commit }, payload) {
    commit({
      type: 'addResource',
      title: payload.title,
      url: payload.url,
      description: payload.description
    });
  },

  deleteResource({ commit }, payload) {
    commit('deleteResource', payload);
  },

  openEditModal({ commit }) {
    commit('openEditModal');
  },
  closeEditModal({ commit }) {
    commit('closeEditModal');
  },
  setSelectedResourceId({ commit }, payload) {
    commit('setSelectedResourceId', payload);
  }
};