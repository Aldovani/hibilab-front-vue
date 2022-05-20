<template>
  <NuxtLink :to="to" class="course">
    <div class="course-image">
      <img :src="course.img" :alt="course.name" />
    </div>
    <div class="course-info">
      <h3>{{ course.name }}</h3>
      <span>{{ course.teacher }}</span>
      <p>{{ course.description }}</p>
    </div>
    <Difficulty :difficulty="course.difficulty" />
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Course } from '@/models'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },

    course: {
      type: Object as PropType<Course>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.course {
  display: grid;
  grid-template-columns: 380px;
  grid-template-rows: 315px auto;
  position: relative;
  background: color('dark-200');
  border-radius: 4px;
  overflow: hidden;

  .course-image {
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      border-radius: 4px 4px 0 0;
    }
  }
  img {
    transition: all 0.2s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  .difficulty {
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
  }

  &:hover {
    .course-image {
      img {
        transform: scale(1.15);
      }
    }
  }
}
.course-info {
  display: grid;
  padding: 1rem;
  gap: 0.5rem;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    color: color('light');
  }
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #c4c4c4;
  }
  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */

    text-transform: uppercase;

    color: #6c6c6c;
  }
}
</style>
