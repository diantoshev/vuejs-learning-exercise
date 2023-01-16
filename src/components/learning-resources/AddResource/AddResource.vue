<template>
  <base-dialog
    v-if='inputIsInvalid'
    title='Invalid Input'
    @close='closeDialog'
    headerBackground='header-error'
  >
    <template #dialog-content>
      <p>{{ errorDescription }}</p>
    </template>
    <template #actions>
      <base-button @click='closeDialog'>Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <resource-form @submit.prevent='submitData'>
      <template #formContent>
        <text-input
          id='resourceTitle'
          input-label-text='Add resource title...'
          input-type='text'
          placeholder='Add resource title...'
          @get-text-input='saveTitle'></text-input>
        <text-area-input
          rows='4'
          textarea-label-text='Add resource description:'
          id='resourceDescription'
          placeholder='Add the resource description...'
          @get-description='saveDescription'></text-area-input>
        <text-input
          id='resourceLink'
          :value='linkInput'
          placeholder='Add the resource link...'
          input-label-text='Add resource link:'
          input-type='url'
          @get-text-input='saveURLInput'></text-input>
        <div class='form-control'>
          <base-button>Save resource</base-button>
        </div>
      </template>
    </resource-form>
  </base-card>
</template>

<script setup>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import ResourceForm from '@/components/learning-resources/ResourceForm/ResourceForm.vue';
import TextInput from '@/components/learning-resources/ResourceForm/TextInput.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import TextAreaInput from '@/components/learning-resources/ResourceForm/TextAreaInput.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import useValidateUrl from '../../../composables/validateURL.js';
import useValidateInput from '../../../composables/validateForm.js';

// Varialbles:
const inputIsInvalid = ref(false);
const errorDescription = ref('');
const titleInput = ref('');
const descriptionInput = ref('');
const linkInput = ref('http://');
const store = useStore();

// Closing alert dialog:
const closeDialog = function() {
  inputIsInvalid.value = false;
};

const saveTitle = (value) => {
  titleInput.value = value;
};

const saveDescription = (value) => {
  descriptionInput.value = value;
};

const saveURLInput = (value) => {
  linkInput.value = value;
};

// Submitting data with new resource to store:
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
      titleInput.value = '';
      descriptionInput.value = '';
      linkInput.value = '';
    } else {
      inputIsInvalid.value = true;
      errorDescription.value = 'The provided url is not valid. Please make sure the URL to the resource is valid. Example - https://www.your-resource.com';
    }
  }
};
</script>

<style scoped>
@import './AddResource.css';
</style>