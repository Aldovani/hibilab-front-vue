<template>
  <div class="index-template">
    <section class="container-hero">
      <div>
        <img src="@/assets/img/LogoName.svg" alt="" />
        <h3>
          A formula para o seu
          <span> SUCESSO </span>
        </h3>
        <p>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do
          mundo e encare seu novo desafio profissional, evoluindo em comunidade
          com os melhores experts.
        </p>
        <Link to="/plans" text="Planos" button />
      </div>
      <img src="@/assets/img/frasco.svg" alt="" />
    </section>

    <div class="slider">
      <Course to="asdad" />
      <Course to="asdad" />
      <Course to="asdad" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-template {
}

.container-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-start;
  font-family: 'Roboto';
  font-weight: 300;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 300px;
    }
  }

  h3 {
    font-weight: 300;

    font-style: normal;
    font-size: 28px;
    line-height: 150%;

    text-transform: uppercase;

    color: color('light');
    span {
      color: color('roxo');
    }
  }
  p {
    font-size: 16px;
    line-height: 23px;

    color: color('cinza');
  }
  .link {
    width: max-content;
  }
}
.slider {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
