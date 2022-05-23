<template>
  <div class="forgot-password-template">
    <div class="bg">
      <div class="form">
        <header>
          <h1>Esqueceu a senha</h1>
          <span>Redefina sua senha</span>
        </header>
        <form class="form">
          <BaseInput
            id="email"
            label="E-mail"
            type="email"
            placeholder="exemplo@gmail.com"
          />
          <Button text="Redefinir" />
        </form>
      </div>
    </div>
    <div>
      <img src="@/assets/img/Logo.svg" alt="Logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forgot-password-template {
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
    gap: 32px;
    justify-items: center;
    header {
      justify-self: flex-start;
    }
  }
}
</style>
