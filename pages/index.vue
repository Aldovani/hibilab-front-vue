<template>
  <div>
    <IndexTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'

export default Vue.extend({
  layout: 'hibilab',
  asyncData() {
    console.log(user.$user)
  },
})
</script>
