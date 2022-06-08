<template>
  <button
    :class="`button ${outline ? 'outline' : ''}`"
    :type="type"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
    {{ text }}
  </button>
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
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
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
  cursor: pointer;

  background: color('roxo');
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 1rem 0;
  transition: all 0.3s ease-in;

  &:hover {
    opacity: 0.5;
  }
  &.outline {
    background-color: transparent;
    color: color('roxo');
    border: 4px solid color('roxo');

    &:hover {
      background: color('roxo');
      color: color('light');
      opacity: 1;
    }
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: transparent;
      opacity: 0.5;
      color: color('roxo');
    }
  }
}
</style>
