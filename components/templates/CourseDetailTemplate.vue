<template>
  <div class="course-detail-template">
    <section class="grid">
      <div>
        <NavigationSystem name="curso de javascript" />
        <Heading text="Curso javaScript" />
        <h3 class="teacher">Professor</h3>
        <Description />
      </div>
      <ContentCourse />
      <Requirements />
    </section>
    <section class="grid">
      <CardCourseDetails/>
      <SimilarCourses />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.course-detail-template {
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-column-gap: 128px;

  .heading,
  .subtitle {
    justify-self: flex-start;
    margin: 0;
  }

  .teacher {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    margin: 2rem 0;

    color: color('cinza-200');
  }
}
.grid {
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 64px;
  .card-course {
    align-self: start;
  }
}
</style>
