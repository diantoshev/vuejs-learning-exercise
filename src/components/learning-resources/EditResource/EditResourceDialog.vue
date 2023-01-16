<template>
  <base-dialog
    :id='selectedResource.id'
    :key='selectedResource.id'
    headerBackground='header-edit'
    open
    title='Edit resource'
    @close='closeEditModal'
  >
    <template #dialog-content>
      <p v-if='errorDescription' class='errorDescription'>{{ errorDescription }}</p>
      <resource-form>
        <template #formContent>
          <text-input
            :id='selectedResource.id'
            :initial-value='selectedResource.title'
            input-label-text='Edit resource title...'
            input-type='text'
            placeholder='Edit resource title...'
            @get-text-input='saveTitle'></text-input>
          <text-area-input
            id='resourceDescription'
            :initial-value='selectedResource.description'
            placeholder='Edit the resource description...'
            rows='4'
            textarea-label-text='Edit resource description:'
            @get-description='saveDescription'></text-area-input>
          <text-input
            id='resourceLink'
            :initial-value='linkInput'
            input-label-text='Edit resource link:'
            input-type='url'
            placeholder='Edit the resource link...'
            @get-text-input='saveURLInput'></text-input>
        </template>
      </resource-form>
    </template>
    <template #actions>
      <base-button mode='red' @click='closeEditModal'> Cancel</base-button>
      <base-button mode='blue' type='submit' @click='submitData'> Save</base-button>
    </template>
  </base-dialog>
</template>

<script setup>
// Imports:
import BaseDialog from '@/components/UI/BaseDialog.vue';
import ResourceForm from '@/components/learning-resources/ResourceForm/ResourceForm.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import TextInput from '@/components/learning-resources/ResourceForm/TextInput.vue';
import TextAreaInput from '@/components/learning-resources/ResourceForm/TextAreaInput.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import useValidateUrl from '../../../composables/validateURL.js';
import useValidateInput from '../../../composables/validateForm.js';

// Variables:
let errorDescription = ref('');
const store = useStore();
const storedResources = computed(() => store.getters.getStoredResources);
const selectedResourceId = computed(() => store.getters.getSelectedResourceId);
const selectedResource = storedResources.value.find(resource => resource.id === selectedResourceId.value);
const linkInput = ref(selectedResource.link);
const titleInput = ref(selectedResource.title);
const descriptionInput = ref(selectedResource.description);
const inputIsInvalid = ref(false);

// Methods:
const closeEditModal = function() {
  store.dispatch('closeEditModal');
  errorDescription.value = '';
};

const saveDescription = (value) => {
  descriptionInput.value = value;
};

const saveTitle = (value) => {
  titleInput.value = value;
};

const saveURLInput = (value) => {
  linkInput.value = value;
};

const submitData = function() {
  if (useValidateInput(titleInput, descriptionInput, linkInput)) {
    inputIsInvalid.value = true;
    errorDescription.value = 'All fields must be populated, in order to add resource. Please make sure you have populated all fields.';
  } else {
    if (useValidateUrl(linkInput.value)) {
      store.dispatch('addResource', {
        title: titleInput.value,
        description: descriptionInput.value,
        url: linkInput.value
      });
      store.dispatch('deleteResource', selectedResourceId);
      titleInput.value = '';
      descriptionInput.value = '';
      linkInput.value = '';
      closeEditModal();
    } else {
      inputIsInvalid.value = true;
      errorDescription.value = 'The provided url is not valid. Please make sure the URL to the resource is valid. Example - https://www.your-resource.com';
    }
  }
};
</script>

<style scoped>

</style>