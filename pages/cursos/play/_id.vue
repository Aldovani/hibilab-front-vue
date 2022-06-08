<template>
  <CoursePlayTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { coursePlay, courseSearch } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'subscribe',

  async asyncData({ params }) {
    await coursePlay.getClasses(Number(params.id))
    await courseSearch.show(Number(params.id))
  },
})
</script>
