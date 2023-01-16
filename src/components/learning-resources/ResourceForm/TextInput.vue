<template>
  <div class='form-control'>
    <label
      :for='id'>{{ inputLabelText }}</label>
    <input
      :type='inputType'
      :id='id'
      :placeholder='placeholder'
      v-model='textInput'
      @input='sendInput'
    >
    <p v-if='inputIsInvalid' class='errorDescription'>{{ errorDescription }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
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
  inputLabelText: {
    type: String,
    required: true,
    default: 'Add resource title:'
  },
  placeholder: {
    type: String,
    required: true,
    default: 'Add the resource title...'
  },
  inputType: {
    type: String,
    required: true,
    default: 'text'
  }
});
const emits = defineEmits(['get-text-input']);

const textInput = ref(props.initialValue || '');
const inputIsInvalid = ref(false);
const errorDescription = ref('');

const sendInput = (event) => {
  if (useValidateString(event.target.value)) {
    return emits('get-text-input', textInput.value);
  } else {
    inputIsInvalid.value = true;
  }
};


</script>

<style scoped>
@import "./ResourceForm.css";

</style>