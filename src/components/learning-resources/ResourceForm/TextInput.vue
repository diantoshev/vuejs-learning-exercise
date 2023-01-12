<template>
  <div class='form-control'>
    <label
      :for='id'>{{ inputLabelText }}</label>
    <input
      :type='inputType'
      :id='id'
      :placeholder='placeholder'
      v-model='titleInput'
    >
  </div>
</template>

<script>

export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      required: true
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

</style>