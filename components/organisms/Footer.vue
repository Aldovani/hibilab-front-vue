<template>
  <footer class="footer">
    <Container class="container-footer">
      <img src="@/assets/img/LogoName.svg" alt="Logo" />
      <p>Todos os direitos reservados</p>
    </Container>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: color('dark-200');
  padding: 20px 0;
}
.container-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  align-items: center;

  p {
    text-align: right;
    color: color('light');
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
}
</style>
