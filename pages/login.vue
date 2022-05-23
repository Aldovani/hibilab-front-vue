<template>
  <LoginTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  transition(_to, from) {
    if (!from) {
      return { name: 'intro', mode: 'out-in' }
    }
    return { name: 'intro', mode: 'out-in' }
  },
})
</script>
