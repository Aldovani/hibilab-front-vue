<template>
  <div class="card-course-admin">
    <img src="https://picsum.photos/400/300" alt="" />

    <div class="content">
      <h3>Título do curso</h3>
      <span class="teacher">Professo</span>
      <span class="quantity">20 videos</span>
    </div>
    <div class="buttons">
      <button class="button delete">
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
  align-items: center;
  background: color('dark-200');
  border-radius: 4px;
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 100%;
    max-height: 360px;
  }
}

.content {
  display: grid;
  /* gap: .5rem; */
  padding: 1rem 2rem;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 47px;
    margin: 0;

    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: color('light');
  }
  .teacher {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: color('cinza');
  }
  .quantity {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 39px;
    color: color('cinza');
  }
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: .5rem  2rem 2rem 2rem;
  align-content: space-between;
  height: 100%;
  width: 100%;

  .button {
    background: color('roxo');
    border: none;
    display: block;
    cursor: pointer;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    img {
      width: 32px;
      height: 32px;
    }
    &.delete {
      background: #e04949;
    }
  }
}
</style>
