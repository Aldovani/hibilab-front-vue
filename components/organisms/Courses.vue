<template>
  <div class="courses">
    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'iniciante',
      }"
    />

    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'avançado',
      }"
    />

    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'intermediário',
      }"
    />

    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'iniciante',
      }"
    />

    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'avançado',
      }"
    />

    <Course
      to="/cursos/curso-1"
      :course="{
        name: 'Curso de sistema',
        description: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  ',
        teacher: 'Professor ',
        img: 'https://picsum.photos/400/300',
        difficulty: 'intermediário',
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, 380px);
  justify-content: space-between;
  gap: 2rem 0;
}
</style>
