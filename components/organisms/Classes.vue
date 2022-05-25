<template>
  <div class="classes">
    <SubTitle text="Aulas" />
    <ol class="container-classes">
      <Classe />
      <Classe />
      <Classe />
      <Classe />
      <Classe />
      <Classe />
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.classes {

  ol{
    margin-top:4rem
  }
  .classe + .classe {
    margin-top: 1rem;
  }
}
</style>
