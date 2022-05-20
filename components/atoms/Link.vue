<template>
  <NuxtLink :class="`link ${button ? 'button' : ''}`" :to="to">
    {{ text }}
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.link {
  color: color('roxo');
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 23px;
  text-transform: uppercase;
  text-align: center;

  &.button {
    display: block;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    color: color('light');
    background: color('roxo');
  }
}
</style>
