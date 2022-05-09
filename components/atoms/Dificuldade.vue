<template>
  <span>
    {{ dificuldade }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    dificuldade: {
      type: String,
      required: true,
    },
  },
})
</script>
