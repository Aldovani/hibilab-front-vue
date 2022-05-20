<template>
  <NuxtLink class="nav-item" :to="to">{{ text }}</NuxtLink>
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
  },
})
</script>

<style lang="scss" scoped>
.nav-item {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  /* line-height: 38px; */
  letter-spacing: 0.15em;
  position: relative;
  color: color('light');

  &.nuxt-link-exact-active {
    color: color('roxo');

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: color('roxo');
      bottom: 0;
      left: 0;
    }
  }
}
</style>
