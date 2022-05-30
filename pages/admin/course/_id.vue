<template>
  <CourseEditTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'admin',
  asyncData({ params }) {
    return courses.show(params.id)
  },
})
</script>
