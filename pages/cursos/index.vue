<template>
  <CoursesTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  async asyncData() {
    try {
      await courseSearch.index(1)
    } catch (e) {
      console.log(e)
    }
  },
})
</script>
