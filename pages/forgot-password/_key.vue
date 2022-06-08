<template>
  <ForgotPasswordKeyTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $axios, route, redirect }) {
    try {
      const key = route.params.key
      const data = await $axios.$get(`/user/forgotpassword/${key}`)

      if (!data) {
        throw new Error('Key not found')
      }
    } catch (e) {
      console.error(e)
      redirect('/')
    }
  },
})
</script>
