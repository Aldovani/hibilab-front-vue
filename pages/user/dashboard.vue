<template>
  <DashboardUserTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'
export default Vue.extend({
  layout: 'hibilab',
  middleware: 'auth',
  async asyncData() {
    await user.getCourses()
  },
})
</script>

<style lang="scss" scoped>
.dashboard-user {
}
</style>
