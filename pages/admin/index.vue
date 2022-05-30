<template>
  <AdminDashboardTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'admin',
  async asyncData() {
    return await courses.index()
  },
})
</script>
