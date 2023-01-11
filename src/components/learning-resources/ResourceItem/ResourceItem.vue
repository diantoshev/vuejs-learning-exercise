<template>
  <base-dialog
    open
    :key='id'
    :id='id'
    title='Edit resource'
    v-if='isEditModalOpen'
    @close='closeEditModal'
    headerBackground='header-edit'
  >
    <template #dialog-content>
      <p class='errorDescription' v-if='errorDescription'>{{ errorDescription }}</p>
      <form>
        <div class='form-control'>
          <label for='resourceTitle'>Edit resource title:</label>
          <input
            type='text'
            id='resourceTitle'
            placeholder='Add the resource title...'
            v-model='titleInput'
          >
        </div>
        <div class='form-control'>
          <label for='resourceDescription'>Edit resource description:</label>
          <textarea
            type='text'
            id='resourceDescription'
            name='resourceDescription'
            rows='4'
            placeholder='Add the resource description...'
            v-model='descriptionInput'
          ></textarea>
        </div>
        <div class='form-control'>
          <label for='resourceLink'>Edit resource link:</label>
          <input
            id='resourceLink'
            name='resourceLink'
            placeholder='Add the resource link...'
            type='url'
            v-model='linkInput'
          >
        </div>
      </form>
    </template>
    <template #actions>
      <base-button mode='red' @click='closeEditModal'> Cancel</base-button>
      <base-button mode='blue' @click='saveEdit(id)'> Save</base-button>
    </template>
  </base-dialog>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <div>
          <base-button mode='red' @click='deleteResource(id)'>Delete</base-button>
          <base-button mode='blue' @click='openEditModal(id)'>Edit</base-button>
        </div>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href='resourceLink'>View Resources</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  name: 'ResourceItem',
  components: { BaseDialog, BaseCard, BaseButton },
  props: {
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
  },

  setup(props) {
    const store = useStore();
    const storedResources = computed(() => store.getters.getStoredResources);
    const isEditModalOpen = ref(false);
    let inputIsInvalid = ref(false);
    let errorDescription = ref('');
    const linkInput = ref(props.resourceLink);
    const descriptionInput = ref(props.description);
    const titleInput = ref(props.title);

    //Methods:
    const openEditModal = function() {
      isEditModalOpen.value = true;
    };

    const closeEditModal = function() {
      isEditModalOpen.value = false;
      errorDescription.value = '';
    };

    const deleteResource = function() {
      store.dispatch('deleteResource');
    };

    const editResource = function(resourceId, title, description, url) {
      const resIndex = storedResources.value.findIndex(res => res.id === resourceId);
      storedResources.value.splice(resIndex, 1);
      store.dispatch('addResource', { title, description, url });
    };

    const saveEdit = function(id) {
      let editedDescription = descriptionInput.value;
      let editedLink = linkInput.value;
      let editedTitle = titleInput.value;

      if (descriptionInput.value.trim() === '' ||
        titleInput.value.trim() === '' ||
        linkInput.value.trim() === '') {
        inputIsInvalid.value = true;
        errorDescription.value = 'All fields must be populated, in order to add resource. Please make sure you have populated all fields.';
      } else {
        if (isUrlValid(editedLink)) {
          editResource(id, editedTitle, editedDescription, editedLink);
          titleInput.value = '';
          descriptionInput.value = '';
          linkInput.value = '';
          errorDescription.value = '';
        } else {
          inputIsInvalid.value = true;
          errorDescription.value = 'The provided url is not valid. Please make sure the URL to the resource is valid. Example - https://www.your-resource.com';
        }
      }
    };

    const isUrlValid = function(url) {
      const urlRegex = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
      );
      return urlRegex.test(url);
    };

    return {
      openEditModal,
      closeEditModal,
      deleteResource,
      editResource,
      saveEdit,
      isEditModalOpen,
      inputIsInvalid,
      errorDescription,
      linkInput,
      descriptionInput,
      titleInput
    };
  }
};


</script>

<style scoped>
@import "ResourceItem.css";
</style>