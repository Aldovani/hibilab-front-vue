<template>
  <form class="config" @submit.prevent="onSubmit">
    <BaseInput
      id="Name"
      v-model="userData.name"
      label="Nome"
      placeholder="Aldovani Henrique da costa"
    />
    <BaseInput
      id="Email"
      v-model="userData.email"
      label="Email"
      placeholder="aldovaniHcosta@gmai.com"
    />
    <!-- <PasswordInput
      id="password"
      v-model="user.password"
      label="Senha"
      value=""
      placeholder="*******"
    /> -->
    <Button type="submit" text="Salvar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'
export default Vue.extend({
  data() {
    return {
      userData: { ...user.$user },
    }
  },
  methods: {
    async onSubmit() {
      console.log(this.userData)
      await user.update({
        name: this.userData.name,
        email: this.userData.email,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.config {
  display: grid;
  gap: 16px;

  .button {
    margin-top: 16px;
  }
}
</style>
