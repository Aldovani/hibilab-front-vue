<template>
  <span class="navigation-system">
    <NuxtLink to="/cursos">cursos/</NuxtLink>{{ name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.navigation-system {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: color('roxo');

  a {
    color: color('light');
  }
}
</style>
