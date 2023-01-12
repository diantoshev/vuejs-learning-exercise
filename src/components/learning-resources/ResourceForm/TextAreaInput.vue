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
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextAreInput',
  props: {
    id: {
      type: String,
      required: true,
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

</style>