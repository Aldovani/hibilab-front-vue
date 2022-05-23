<template>
  <section class="content-course">
    <SubTitle text="Conteúdo do curso" />

    <ul>
      <li>Aula 01 - Historia</li>
      <li>Aula 02 - Historia</li>
      <li>Aula 03 - Historia</li>
      <li>Aula 04 - Historia</li>
      <li>Aula 05 - Historia</li>
      <li>Aula 06 - Historia</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.content-course {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    li {
      background: color('dark-200');
      padding: 20px 25px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 39px;

      letter-spacing: 0.15em;
      border-radius: 4px;
      color: color('light');

      & + li {
        margin-top: 4px;
      }
    }
  }
}
</style>
