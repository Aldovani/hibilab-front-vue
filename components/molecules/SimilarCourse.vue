<template>
  <NuxtLink class="similar-course" to="/cursos/asas">
    <img src="https://picsum.photos/400/300" alt="" />
    <div>
      <h3>Nome do curso</h3>
      <span>Professor</span>
      <Difficulty difficulty="iniciante" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.similar-course {
  display: grid;
  grid-template-columns: 170px 1fr;
  background: color('dark-200');
  img {
    width: 100%;
    height: 100%;
    max-width: 170px;
    max-height: 170px;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;

    color: #ffffff;
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15em;

    color: #c4c4c4;
  }

  div{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;

    color: #ffffff;
  }
}
</style>
