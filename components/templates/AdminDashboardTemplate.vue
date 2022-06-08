<template>
  <div class="admin-dashboard-template">
    <div class="header">
      <Heading text="Cursos" />
      <Link text="Novo curso" button to="/admin/course/create" />
    </div>
    <div class="container-grid">
      <CardCourseAdmin
        v-for="course in $courses"
        :key="course.id"
        :data="course"
      />
    </div>
    <Button
      v-if="page < $lastPage"
      text="Carregar mais"
      @onClick="moreCourses"
    />
    <ModalCourseDelete v-show="$modalState" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch, modalCourseDelete } from '@/store'
export default Vue.extend({
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    $courses() {
      return courseSearch.$courses
    },
    $lastPage() {
      return courseSearch.$pagination.last_page
    },
    $modalState() {
      return modalCourseDelete.$stateModal
    },
  },
  methods: {
    moreCourses() {
      courseSearch.index(this.page)
      this.page++
    },
  },
})
</script>

<style lang="scss" scoped>
.admin-dashboard-template {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
  }
  .link.button {
    width: max-content;
    justify-self: flex-end;
  }
  .container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 5rem;
  }
}
</style>
