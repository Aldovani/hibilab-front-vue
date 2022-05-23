<template>
  <Container class="error">
    <img src="@/assets/img/404.svg" alt="Error 404" />
    <div>
      <h1>Ops! Página não encontrada</h1>
      <p>A página que você está tentando acessar não existe ou foi removida.</p>
    </div>
    <Link to="/"  text="Voltar para a página inicial" button />
  </Container>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 32px;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 0;
    color: #c4c4c4;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #c4c4c4;
  }
  .link {
    width: 50% !important;
    align-self: center;
    justify-self: center;
  }
}
</style>
