<template>
  <div class="similar-courses">
    <SubTitle text="Cursos semelhantes" />
    <SimilarCourse />
    <SimilarCourse />
    <SimilarCourse />
  </div>
</template>

<style lang="scss" scoped>
.similar-courses {
  display: grid;


  .subtitle {
    justify-self: flex-start;
    margin-bottom: 4rem;
  }
  .similar-course + .similar-course {
    margin-top: 2rem;
  }
}
</style>
