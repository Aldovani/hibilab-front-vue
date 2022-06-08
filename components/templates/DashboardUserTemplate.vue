<template>
  <div class="dashboard-user-template">
    <section>
      <SubTitle text="Meu aprendizado" />
      <div class="course-in-progress">
        <CardCourse
          v-for="item in $coursesInProgress"
          :key="item.id"
          :course="item"
        />
      </div>
    </section>
    <section>
      <SubTitle text="Finalizados" />
      <div class="course-finished">
        <CardCourse
          v-for="item in $coursesFinished"
          :key="item.id"
          :course="item"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '@/store'
export default Vue.extend({
  computed: {
    $coursesInProgress() {
      return user.$courses.filter(
        (course) => course.classes.length !== course.watched
      )
    },
    $coursesFinished() {
      return user.$courses.filter(
        (course) => course.classes.length === course.watched
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard-user-template {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  gap: 2rem;
  .subtitle {
    justify-self: flex-start;
    margin-bottom: 1rem;
  }
  .course-finished,
  .course-in-progress {
    display: grid;
    grid-template-columns: repeat(3, 380px);
    justify-content: space-between;
  }
}
</style>
