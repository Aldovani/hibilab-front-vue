<template>
  <button :class="`button ${outline ? 'outline' : ''}`">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 23px;
  text-transform: uppercase;
  color: color('light');

  background: color('roxo');
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0;

  .outline {
    background-color: transparent;
    color: color('roxo');
    border: 4px solid color('roxo');
  }
}
</style>
