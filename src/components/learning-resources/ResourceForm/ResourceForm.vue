<template>
  <form @submit.prevent='submitData'>
    <text-input
      id='resourceTitle'
      placeholder='Add resource title...'
      input-label-text='Add resource title...'
      input-type='text'></text-input>
    <text-area-input
      textarea-label-text='Add resource description:'
      rows='4'
      id='resourceDescription'
      placeholder='Add the resource description...'></text-area-input>
<!--    <div class='form-control'>-->
<!--      <label for='resourceLink'>Add resource link:</label>-->
<!--      <input-->
<!--        id='resourceLink'-->
<!--        name='resourceLink'-->
<!--        placeholder='Add the resource link...'-->
<!--        type='url'-->
<!--        v-model='linkInput'-->
<!--      >-->
<!--    </div>-->
    <text-input
      id='resourceLink'
      input-type='url'
      placeholder='Add the resource link...'
      input-label-text='Add resource link:'></text-input>
    <div class='form-control'>
      <base-button type='submit'>Save resource</base-button>
    </div>
  </form>
</template>

<script>
import TextInput from '@/components/learning-resources/ResourceForm/TextInput.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import TextAreaInput from '@/components/learning-resources/ResourceForm/TextAreaInput.vue';
export default {
  name: 'ResourceForm',
  components: { BaseButton, TextInput, TextAreaInput }

};
</script>

<style scoped>
</style>