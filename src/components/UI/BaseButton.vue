<template>
<button :class='mode'>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    mode: String,
  }
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #0e7e8a;
  border: 1px solid #0e7e8a;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

button:hover,
button:active {
  background-color: #08474f;
  border-color: #08474f;
}

.red {
  background-color: transparent;
  color: #e52b2b;
  border: 3px solid #e52b2b;
  border-radius: 0.5em;
}

.red:hover,
.red:active {
  border-radius: 0.5em;
  background-color: #e52b2b;
  color: #fff;
  border: 3px solid #820b0b;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);;
}

.blue {
  background-color: transparent;
  color: #0e7e8a;
  border: 3px solid #08474f;
  border-radius: 0.5em;
}

.blue:hover,
.blue:active {
  border-radius: 0.5em;
  background-color: #0e7e8a;
  color: #fff;
  border: 3px solid #08474f;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);;
}
</style>