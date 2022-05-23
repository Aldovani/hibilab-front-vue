<template>
  <form class="form-login">
    <BaseInput
      id="email"
      label="Email"
      type="email"
      placeholder="exemplo@gmail.com"
    />
    <BaseInput
      id="Name"
      label="Nome"
      placeholder="Aldovani Henrique da costa"
    />
    <PasswordInput id="Senha" label="Senha" placeholder="******" />
    <PasswordInput
      id="ConfirmarSenha"
      label="Confirmar Senha"
      placeholder="******"
    />
    <span>
      Já possui uma conta?
      <NuxtLink to="/login">Login</NuxtLink>
    </span>

    <Button text="Continuar" />
  </form>
</template>

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
