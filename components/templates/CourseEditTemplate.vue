<template>
  <div class="course-edit-template">
    <FormEditCourse />
    <Classes />
  </div>
</template>


<style lang="scss" scoped>
.course-edit-template {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    div {
      flex: 0.5;
      display: flex;
      gap: 1rem;
    }
  }
  .form-edit-course {
    margin-bottom: 8rem;
  }
}
</style>
