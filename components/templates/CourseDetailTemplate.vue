<template>
  <div class="course-detail-template">
    <section class="grid">
      <div>
        <NavigationSystem :text="$course.name" />
        <Heading :text="$course.name" />
        <h3 class="teacher">{{ $course.teacher }}</h3>
        <Description :text="$course.description" />
      </div>
      <ContentCourse />
      <Requirements :text="$course.requirements" />
    </section>
    <section class="grid">
      <CardCourseDetails />
      <SimilarCourses />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  computed: {
    $course() {
      return courseSearch.$course
    },
  },
})
</script>

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
