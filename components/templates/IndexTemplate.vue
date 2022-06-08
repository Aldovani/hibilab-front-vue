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

    <Slider />

    <section class="about center space">
      <h2 class="subtitle">Quem somos ?</h2>
      <p>
        Nosso foco é capacitar nossos alunos para que se tornem os melhores
        profissionais dentro do mercado de trabalho e com isso realizem seus
        objetivos profissionais, e para que isso seja possível oferecemos cursos
        de qualidade e atualizados para proporcionar o máximo de conhecimento à
        eles.
      </p>
    </section>

    <section class="services center space">
      <h2 class="subtitle">
        Por que escolher a plataforma
        <span>HIBLAB </span>?
      </h2>
      <div class="container-services">
        <div class="service">
          <div>
            <img src="@/assets/img/message.svg" alt="icon message" />
            <h3>Suporte</h3>
          </div>
          <p>
            Suporte para nossos usúarios de segunda a domingo das 08:00 as 22:00
          </p>
        </div>
        <div class="service">
          <div>
            <img src="@/assets/img/award.svg" alt="icon certificado" />
            <h3>Certificado</h3>
          </div>
          <p>
            Após a finalização de nossos cursos realizamos a emissão de um
            certificado para atestar que nossos alunos finalizaram 100% do
            modulo e estão capacitados para estarem colocando em pratica o que
            foi aprendido.
          </p>
        </div>
        <div class="service">
          <div>
            <img src="@/assets/img/tv.svg" alt="icon tv" />
            <h3>Aulas</h3>
          </div>
          <p>
            Os melhores cursos do mercado sendo mais de 500 aulas disponíveis e
            novos lançamentos semanalmente podendo ser assistidas quando e onde
            quiser
          </p>
        </div>
      </div>
    </section>

    <section class="testimonials center space">
      <h2 class="subtitle">Depoimentos</h2>

      <div class="container-testimonials">
        <div class="testimonial">
          <header>
            <img src="@/assets/img/avatar.png" alt="user" />
            <h3>Nome do aluno</h3>
            <div class="container-stars">
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star.svg" alt="Icon star" />
            </div>
          </header>
          <p>
            Recomendo muito, apesar de logo após finalizar o curso ficar parado
            por 2 anos, finalmente consegui e voltei aqui para trocar minha nota
            de 2 estrelas para 4 👍
          </p>
        </div>
        <div class="testimonial">
          <header>
            <img src="@/assets/img/avatar.png" alt="user" />
            <h3>Nome do aluno</h3>
            <div class="container-stars">
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star.svg" alt="Icon star" />
            </div>
          </header>
          <p>
            Recomendo muito, apesar de logo após finalizar o curso ficar parado
            por 2 anos, finalmente consegui e voltei aqui para trocar minha nota
            de 2 estrelas para 4 👍
          </p>
        </div>
        <div class="testimonial">
          <header>
            <img src="@/assets/img/avatar.png" alt="user" />
            <h3>Nome do aluno</h3>
            <div class="container-stars">
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star-fill.svg" alt="Icon star" />
              <img src="@/assets/img/star.svg" alt="Icon star" />
            </div>
          </header>
          <p>
            Recomendo muito, apesar de logo após finalizar o curso ficar parado
            por 2 anos, finalmente consegui e voltei aqui para trocar minha nota
            de 2 estrelas para 4 👍
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.index-template {
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .space {
    margin-top: 256px;

    @include screen('medium') {
      margin-top: 128px;
    }
  }
  .subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;

    color: color('light');

    @include screen('medium') {
      font-size: 48px;
      line-height: 60px;
    }
  }
  .container-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
    img {
      justify-self: flex-end;
    }
    @include screen('medium') {
      grid-template-columns: 1fr;
      img {
        margin-top: 2rem;
        justify-self: center;
      }
    }
  }

  .about {
    h2 {
      margin-bottom: 1rem;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 38px;
      text-align: center;

      color: color('cinza');
    }

    @include screen('medium') {
      p {
        text-align: justify;
      }
    }
  }

  .services {
    h2 {
      text-align: center;
      max-width: 600px;
      margin-bottom: 2rem;

      span {
        color: color('roxo');
      }
    }
    .container-services {
      display: grid;
      grid-template-columns: repeat(3, minmax(300px, 310px));
      gap: 2rem;

      @include screen('medium') {
        grid-template-columns: repeat(1, minmax(300px, 310px));
      }
    }

    .service {
      display: flex;
      flex-direction: column;
      border: 4px solid color('dark-200');
      padding: 32px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 38px;

        color: #ffffff;
      }

      p {
        margin-top: 32px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: color('cinza');
      }
    }
  }

  .testimonials {
    margin-bottom: 128px;
    h2 {
      margin-bottom: 2rem;
    }
    .container-testimonials {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      @include screen('medium') {
        grid-template-columns: 1fr;
      }
    }

    .testimonial {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-bottom: 4px solid color('dark-200');
      padding: 1rem;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.15em;

      color: #ffffff;
      header {
        display: flex;
        gap: 1rem;
        align-items: center;
        > img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 4px solid color('roxo');
        }
        h3 {
          font-size: 18px;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
      }

      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }
      &:nth-child(2) {
        grid-area: 2 / 2 / 3 / 3;
      }
      &:nth-child(3) {
        grid-area: 3 / 1 / 4 / 2;
      }

      @include screen('medium') {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          grid-area: inherit;
        }
      }
    }
  }
}
</style>
