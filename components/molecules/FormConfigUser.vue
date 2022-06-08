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
      try {
        if (this.userData.name === '' || this.userData.email === '') {
          this.$notify({
            title: 'Erro',
            text: 'Preencha todos os campos',
            type: 'error',
          })
          return
        }

        await user.update({
          name: this.userData.name,
          email: this.userData.email,
        })

        this.$notify({
          title: 'Alteração salva',
          text: 'Alterações salvas com sucesso',
          type: 'success',
        })
      } catch (e) {
        console.log(e)

        this.$notify({
          title: 'Erro',
          text: 'Não foi possível salvar as alterações',
          type: 'error',
        })
      }
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
