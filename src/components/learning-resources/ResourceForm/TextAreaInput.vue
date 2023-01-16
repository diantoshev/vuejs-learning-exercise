<template>
  <div class='form-control'>
    <label :for='id'>{{ textareaLabelText }}</label>
    <textarea
      :type='inputType'
      :id='id'
      :name='id'
      :rows='rows'
      :placeholder='placeholder'
      v-model='descriptionInput'
      @input='sendInput'
    ></textarea>
    <p v-if='inputIsInvalid' class='errorDescription'>{{ errorDescription }}</p>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';
import useValidateString from '@/composables/validateString';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  initialValue: {
    type: String,
    required: false,
    default: null
  },
  textareaLabelText: {
    type: String,
    required: true,
    default: 'Add resource description:'
  },
  placeholder: {
    type: String,
    required: true,
    default: 'Add the resource description...'
  },
  rows: {
    type: String,
    required: false,
    default: '4',
    validator(value) {
      const numberValue = Number(value);
      return typeof numberValue === 'number' && !Number.isNaN(numberValue);
    }
  },
  inputType: {
    type: String,
    required: false,
    default: 'text'
  }
});

const emits = defineEmits(['get-description']);
const descriptionInput = ref(props.initialValue || '');
const errorDescription = ref('');
const inputIsInvalid = ref(false);

const sendInput = (event) => {
  if (useValidateString(event.target.value)) {
    errorDescription.value = '';
    return emits('get-description', descriptionInput.value);
  } else {
    inputIsInvalid.value = true;
    errorDescription.value = 'This field is mandatory and must be filled out.';
  }
};
</script>

<style scoped>
@import "./ResourceForm.scss";
</style>