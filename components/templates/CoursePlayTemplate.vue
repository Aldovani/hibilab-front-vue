<template>
  <div class="course-play-template">
    <div class="container-heading">
      <NavigationSystem :text="$course.name" />
      <Heading :text="$course.name" />
    </div>
    <div class="player">
      <video
        :src="`${$classes.video ? $classes.video.url : ''}`"
        controls
      ></video>
      <ClassesPlay />
    </div>
    <div class="container-description">
      <SubTitle text="Descrição" />
      <Description :text="$course.description" />
    </div>
    <Requirements />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { coursePlay, courseSearch } from '@/store'
export default Vue.extend({
  computed: {
    $classes() {
      return coursePlay.$currentClass
    },
    $course() {
      return courseSearch.$course
    },
  },
})
</script>

<style lang="scss" scoped>
.course-play-template {
  .container-heading {
    display: flex;
    flex-direction: column;
    .heading {
      align-self: flex-start;
      margin: 0;
    }
  }
  .player {
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    max-height: 540px;
    margin: 3rem 0 3rem;
    video {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
    }
  }
  .container-description {
    margin-bottom: 4rem;
    .subtitle {
      margin-bottom: 2rem;
    }
  }
}
</style>
