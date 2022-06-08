<template>
  <button class="language">
    {{ language }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    language: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: color('roxo');
  border-radius: 8px;
  color: color('light');
  cursor: pointer;
  padding: 30px 0;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  color: color('light');
  transition: filter 0.2s ease-in;
  &:hover {
    filter: brightness(0.6);
  }
}
</style>
