<template>
  <div @click="emits('close')"></div>
  <dialog open>
    <header :class='props.headerBackground'>
      <slot name='dialog-header'>
        <h2>{{ props.title }}</h2>
      </slot>
    </header>
    <section>
      <slot name='dialog-content'></slot>
    </section>
    <menu>
      <slot name='actions'>
        <base-button @click="emits('close')"> Close</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['close']);
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  headerBackground: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: absolute;
  top: 15vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  color: white;
  width: 100%;
  padding: 1rem;
}

.header-error {
  background-color: #e52b2b;
}

.header-edit {
  background-color: #08474f;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>