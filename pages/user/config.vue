<template>
  <UserConfigTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'auth',
})
</script>
