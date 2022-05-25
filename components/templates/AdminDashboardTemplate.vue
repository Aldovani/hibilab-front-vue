<template>
  <div class="admin-dashboard-template">
    <div class="header">
      <Heading text="Cursos" />
      <Link text="Novo curso" button to="/admin/course/create" />
    </div>
    <div class="container-grid">
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
      <CardCourseAdmin />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-dashboard-template {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
  }
  .link {
    width: max-content;
  }
  .container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 5rem;
  }

}
</style>
