<template>
  <div class="courses">
    <Course
      v-for="item in $cursos"
      :key="item.id"
      :to="`/cursos/${item.id}`"
      :course="{
        name: item.name,
        description: item.description,
        teacher: item.teacher,
        img: item.thumbnail
          ? item.thumbnail.url
          : 'https://via.placeholder.com/350',
        difficulty: String(item.difficulty).toLowerCase(),
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  computed: {
    $cursos() {
      return courseSearch.$courses
    },
  },
})
</script>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  justify-content: space-between;
  gap: 2rem;
}
</style>
