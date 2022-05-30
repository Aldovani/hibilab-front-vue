<template>
  <div class="login-template">
    <div class="bg">
      <div class="form">
        <div class="form-header">
          <h1>Entrar</h1>
          <span>Bem vindo de volta</span>
        </div>
        <FormLogin />
      </div>
    </div>
      <NuxtLink to="/">
        <img src="@/assets/img/Logo.svg" alt="Logo" />
      </NuxtLink>
  </div>
</template>



<style lang="scss" scoped>
.login-template {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 100vh;
  justify-items: center;
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;

    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    color: #fffffe;
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #c4c4c4;
  }
  .bg {
    background: color('dark-200');
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form {
    display: grid;
    grid-template-columns: 500px;
    grid-template-rows: auto 1fr;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    gap: 80px;
    justify-items: center;
    .form-header {
      justify-self: flex-start;
    }
  }
}
</style>
