<template>
  <CourseDetailTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  async asyncData({ params }) {
    await courseSearch.show(Number(params.id))
  },
})
</script>
