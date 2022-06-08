<template>
  <NuxtLink :to="`/cursos/play/${course.id}`" class="card-course">
    <img
      :src="`${
        course.thumbnail
          ? course.thumbnail.url
          : 'https://via.placeholder.com/350'
      }`"
      alt=""
    />

    <div class="content">
      <h2>{{ course.name }}</h2>
      <span>{{ course.teacher }}</span>
      <ProgressBar
        :length="Number(course.classes.length)"
        :count="Number(course.watched)"
      />
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Course } from '@/models'
export default Vue.extend({
  props: {
    course: {
      type: Object as PropType<Course>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.card-course {
  background: color('dark-200');
  color: color('light');
  border-radius: 4px;

  img {
    width: 100%;
    height: 300px;
    max-width: 380px;
    object-fit: cover;
  }
  .content {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
