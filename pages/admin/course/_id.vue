<template>
  <CourseEditTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'admin',
  asyncData({ params }) {
    return courseSearch.show(Number(params.id))

  },
})
</script>
