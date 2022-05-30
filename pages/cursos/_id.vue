<template>
  <CourseDetailTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  async asyncData({route}) {
    await courses.show(route.params.id)
  },
})
</script>
