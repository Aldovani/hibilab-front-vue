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
        img: 'https://picsum.photos/400/300',
        difficulty: String(item.difficulty).toLowerCase(),
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  computed: {
    $cursos() {
      return courses.$courses
    },
  },
})
</script>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  justify-content: space-between;
  gap: 2rem 0;
}
</style>
