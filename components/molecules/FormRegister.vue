<template>
  <form class="form-login" @submit.prevent="onSubmit">
    <BaseInput
      id="email"
      v-model="email"
      label="Email"
      type="email"
      placeholder="exemplo@gmail.com"
    />
    <BaseInput
      id="Name"
      v-model="name"
      label="Nome"
      placeholder="Aldovani Henrique da costa"
    />
    <PasswordInput
      id="Senha"
      v-model="password"
      label="Senha"
      placeholder="******"
    />
    <PasswordInput
      id="ConfirmarSenha"
      v-model="passwordConfirmation"
      label="Confirmar Senha"
      placeholder="******"
    />
    <span>
      Já possui uma conta?
      <NuxtLink to="/login">Login</NuxtLink>
    </span>

    <Button type="submit" text="Criar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'
export default Vue.extend({
  data() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
    }
  },
  methods: {
    async onSubmit() {
      const { email, name, password, passwordConfirmation } = this
      try {
        await user.create({ email, name, password, passwordConfirmation })
        this.$router.push('/plans')
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.form-login {
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: 1fr;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: color('light');
    a {
      justify-self: start;
      font-weight: 500;
      color: color('roxo');
    }
  }
}
</style>
