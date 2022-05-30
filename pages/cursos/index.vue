<template>
  <CoursesTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  async asyncData() {
    try {
      await courses.index(1)
    } catch (e) {
      console.log(e)
    }
  },
})
</script>
