<template>
  <!-- <NuxtLink :to="to" class="course">
    <div class="course-image">
      <img :src="course.img" :alt="course.name" />
    </div>
    <div class="course-info">
      <h3>{{ course.name }}</h3>
      <span>{{ course.teacher }}</span>
      <p>{{ course.description }}</p>
    </div>
    <Difficulty :difficulty="course.difficulty" />
  </NuxtLink> -->
  <NuxtLink :to="to" class="course">
    <!-- <img :src="'https://picsum.photos/400/300'" :alt="course.name" /> -->
    <img :src="'https://picsum.photos/400/300'" />
    <div class="course-info">
      <!-- <h3>{{ course.name }}</h3> -->
      <h3>sadasda</h3>
      <!-- <span>{{ course.teacher }}</span> -->
      <span>sadas</span>
    </div>
    <!-- <Difficulty :difficulty="course.difficulty" /> -->
    <Difficulty difficulty="iniciante" />
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

    // course: {
    //   type: Object as PropType<Course>,
    //   required: true,
    // },
  },
})
</script>

<style lang="scss" scoped>
.course {
  width: 340px;
  height: 430px;
  position: relative;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    border-radius: 4px;
    inset: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 97.59%);
  }

  &:hover {
    &::after {
      opacity: 0.5;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  .course-info {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 0 1rem 2.5rem 1rem;
    width: 100%;

    h3,
    span {
      width: 100%;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      font-family: 'Roboto';
      font-style: normal;
    }

    h3 {
      font-weight: 700;
      font-size: 21px;
      line-height: 25px;
      color: #ffffff;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: color('cinza');
    }
  }
  .difficulty {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}

/*
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

    text-transform: uppercase;

    color: #6c6c6c;
  }
} */
</style>
