<template>
  <div class="courses-template">
    <SearchCourse />
    <Heading text="Linguagens" />
    <Languages   />
    <Courses />
    <Pagination />
  </div>
</template>

<style lang="scss" scoped>
.courses-template {
  .search-course {
    margin-bottom: 4rem;
  }
  .courses {
    margin: 128px 0 64px;
  }
}
</style>
