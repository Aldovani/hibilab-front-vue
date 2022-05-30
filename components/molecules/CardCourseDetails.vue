<template>
  <section class="card-course-details">
    <img src="https://picsum.photos/400/300" alt="" />
    <div class="content">
      <Button text="Matricular-se" />

      <span>Quantidade de aulas: 20</span>
      <span>Dificuldade: <Difficulty :difficulty="$difficulty" /></span>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  computed: {
    $difficulty() {
      return courses.$course.difficulty.toLowerCase()
    },
  },
})
</script>

<style lang="scss" scoped>
.card-course-details {
  display: grid;
  background: color('dark-200');

  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
  }
  .content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 32px;

    color: color('light');
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
}
</style>
