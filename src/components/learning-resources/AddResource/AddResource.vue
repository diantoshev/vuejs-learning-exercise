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
    <form @submit.prevent='submitData'>
      <div class='form-control'>
        <label for='resourceTitle'>Add resource title:</label>
        <input
          type='text'
          id='resourceTitle'
          placeholder='Add the resource title...'
          v-model='titleInput'
        >
      </div>
      <div class='form-control'>
        <label for='resourceDescription'>Add resource description:</label>
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
        <label for='resourceLink'>Add resource link:</label>
        <input
          id='resourceLink'
          name='resourceLink'
          placeholder='Add the resource link...'
          type='url'
          v-model='linkInput'
        >
      </div>
      <div class='form-control'>
        <base-button type='submit'>Save resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'AddResource',
  components: { BaseDialog, BaseButton, BaseCard },
  setup() {
    const inputIsInvalid = ref(false);
    const errorDescription = ref('');
    const titleInput = ref('');
    const descriptionInput = ref('');
    const linkInput = ref('http://');
    const store = useStore();
    // Methods:

    // Closing alert dialog:
    const closeDialog = function() {
      inputIsInvalid.value = false;
    }

    // Submitting data with new resource to store:
    const submitData = function() {
      if (titleInput.value === '' ||
        descriptionInput.value === '' ||
        linkInput.value === '') {
        inputIsInvalid.value = true;
        errorDescription.value = 'All fields must be populated, in order to add resource. Please make sure you have populated all fields.';
      } else {
        if (isUrlValid(linkInput.value)) {
          store.dispatch('addResource',{ title: titleInput.value, description: descriptionInput.value, url:linkInput.value });
          titleInput.value = '';
          descriptionInput.value = '';
          linkInput.value = '';
        } else {
          inputIsInvalid.value = true;
          errorDescription.value = 'The provided url is not valid. Please make sure the URL to the resource is valid. Example - https://www.your-resource.com';
        }
      }
    }
    // RegEx to validate URL in submitData() method:
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
    }


    return {
      inputIsInvalid,
      errorDescription,
      closeDialog,
      submitData,
      titleInput,
      descriptionInput,
      linkInput
    };
  },
};
</script>

<style scoped>
@import './AddResource.css';
</style>