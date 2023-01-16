<template>
  <div class='form-control'>
    <label :for='id'>{{textareaLabelText}}</label>
    <textarea
      :type='inputType'
      :id='id'
      :name='id'
      :rows='rows'
      :placeholder='placeholder'
      v-model='descriptionInput'
      @input='sendInput'
    ></textarea>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'TextAreaInput',
  setup(props, { emit }) {
    const descriptionInput = ref(props.initialValue || '');
    const sendInput = () => {
      return emit('get-description', descriptionInput.value);
    };

    return {
      sendInput,
      descriptionInput
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
      validator(value){
        const numberValue = Number(value);
        return typeof numberValue === 'number' && !Number.isNaN(numberValue);
      }
    },
    inputType: {
      type: String,
      required: false,
      default: 'text'
    },
  }
};
</script>

<style scoped>
@import "./ResourceForm.scss";
</style>