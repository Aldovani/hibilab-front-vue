<template>
  <form class="form-login" @submit.prevent="onSubmit">
    <BaseInput
      id="email"
      v-model="email"
      label="Email"
      type="email"
      placeholder="exemplo@gmail.com"
    />

    <PasswordInput
      id="senha"
      v-model="password"
      label="Senha"
      placeholder="*********"
    />
    <div>
      <NuxtLink to="/forgot-password">Esqueceu a senha?</NuxtLink>
      <NuxtLink to="/register" class="link-register">Cadastra-se</NuxtLink>
    </div>
    <Button type="submit" text="Entrar" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth, user } from '@/store'
export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      const { email, password } = this
      try {
        await auth.create({ email, password })
        await user.show()
        this.$notify({
          title: 'Sucesso',
          text: 'Login realizado com sucesso',
          type: 'success',
        })
        this.$router.push('/')
      } catch (error) {
        this.$notify({
          title: 'Erro',
          text: 'Login ou senha incorretos',
          type: 'error',
        })
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

  a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: color('light');
  }
  .link-register {
    justify-self: start;
    font-weight: 500;
    color: color('roxo');
  }
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
