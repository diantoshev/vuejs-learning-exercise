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
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const textInput = ref(props.initialValue || '');
    const sendInput = () => {
      return emit('get-text-input', textInput.value);
    };
    return {
      sendInput,
      textInput
    };
  },
  props: {
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
  }
};
</script>

<style scoped>
@import "./ResourceForm.css";

</style>