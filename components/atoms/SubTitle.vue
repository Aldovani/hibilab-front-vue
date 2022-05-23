<template>
  <h2 class="subtitle">{{ text }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 75px;
  letter-spacing: 0.05em;
  color: color('light');
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 8px;
    background-color: color('roxo');
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
