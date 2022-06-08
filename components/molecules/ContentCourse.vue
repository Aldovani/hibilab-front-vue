<template>
  <section class="content-course">
    <SubTitle text="Conteúdo do curso" />
    <ul>
      <li v-for="(item, index) in $classes" :key="item.id">
        Aula {{ String(index + 1).padStart(2, '0') }} - {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch } from '@/store'
export default Vue.extend({
  computed: {
    $classes() {
      return courseSearch.$course?.classes
    },
  },
})
</script>

<style lang="scss" scoped>
.content-course {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    li {
      background: color('dark-200');
      padding: 20px 25px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 39px;

      letter-spacing: 0.15em;
      border-radius: 4px;
      color: color('light');

      & + li {
        margin-top: 4px;
      }
    }
  }
}
</style>
