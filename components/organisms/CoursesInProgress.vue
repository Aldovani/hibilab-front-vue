<template>
  <dir class="course-in-progress">
    <CardCourse />
    <CardCourse />
    <CardCourse />
  </dir>
</template>

<style lang="scss" scoped>
.course-in-progress {
  display: grid;
  grid-template-columns: repeat(3, 380px);
  justify-content: space-between;
}
</style>
