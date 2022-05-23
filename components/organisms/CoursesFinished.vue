<template>
  <dir class="course-finished">
    <CardCourse />
    <CardCourse />
    <CardCourse />
  </dir>
</template>

<style lang="scss" scoped>
.course-finished {
  display: grid;
  grid-template-columns: repeat(3, 380px);
  justify-content: space-between;
}
</style>
