<template>
  <div class="admin-dashboard-template">
    <div>
      <Heading text="Cursos" />
      <Link text="Novo curso" button to="/admin/course/create" />
    </div>
    <CardCourseAdmin />
    <CardCourseAdmin />
    <CardCourseAdmin />
  </div>
</template>

<style lang="scss" scoped>
.admin-dashboard-template {
  .link {
    width: max-content;
    justify-self: flex-end;
  }
  .heading {
    justify-self: flex-start;
  }
  .card-course-admin + .card-course-admin {
    margin-top: 4rem;
  }
}
</style>
