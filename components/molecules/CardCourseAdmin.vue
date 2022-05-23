<template>
  <div class="card-course-admin">
    <img src="https://picsum.photos/400/300" alt="" />

    <div class="content">
      <h3>Título do curso</h3>
      <span class="teacher">Professo</span>
      <span class="quantity">20 videos</span>
    </div>
    <div class="buttons">
      <button class="button">
        <img src="@/assets/img/X.svg" title="Excluir curso" alt="Excluir svg" />
      </button>

      <NuxtLink to="/admin/course/dsaa" class="button">
        <img src="@/assets/img/pen.svg" title="Editar curso" alt="Editar svg" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-course-admin {
  display: grid;
  grid-template-columns: 380px 1fr auto;
  align-items: center;
  background: color('dark-200');
  border-radius: 4px;
  img {
    border-radius: 4px 0 0 4px;
    width: 100%;
    height: 100%;
    max-width: 380px;
    max-height: 360px;
  }
}

.content {
  display: grid;
  gap: 2rem;
  padding: 0 2rem;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: #ffffff;
  }
  .teacher {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: #ffffff;
  }
  .quantity {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.15em;

    color: #ffffff;
  }
}

.buttons {
  display: grid;
  gap: 2rem;
  padding: 0 2rem;
  align-content: space-around;
  height: 100%;

  .button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
}
</style>
