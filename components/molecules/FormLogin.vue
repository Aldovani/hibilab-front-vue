<template>
  <form class="form-login">
    <BaseInput
      id="email"
      label="Email"
      type="email"
      placeholder="exemplo@gmail.com"
    />

    <PasswordInput id="senha" label="Senha" placeholder="*********" />
    <div>
      <NuxtLink to="/forgot-password">Esqueceu a senha?</NuxtLink>
      <NuxtLink to="/register" class="link-register">Cadastra-se</NuxtLink>
    </div>
    <Button text="Entrar" />
  </form>
</template>

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
  div{
    display: flex;
    justify-content: space-between;
  }
}
</style>
