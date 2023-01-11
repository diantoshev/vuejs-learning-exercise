export default {
  getStoredResources(context) {
    context.commit('getStoredResources');
  },

  setSelectedTab(context, payload){
    context.commit('setSelectedTab', payload);
  },

  addResource(context, payload) {
    context.commit({
      type: 'addResource',
      title: payload.title,
      url: payload.url,
      description: payload.description
    })
  },

  deleteResource(context, payload) {
    context.commit({
      type: 'deleteResource',
      id: payload
    })
  }
};