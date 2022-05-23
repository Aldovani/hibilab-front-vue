<template>
  <div class="index-template">
    <Heading text="Cursos Populares" />
    <Carrousel />
    <Courses />
  </div>
</template>

<style lang="scss" scoped>
.index-template {
  display: flex;
  flex-direction: column;

  .heading {
    align-self: flex-start;
    margin-bottom: 48px;
  }
  .carrousel {
    margin-bottom: 64px;
  }
}
</style>
