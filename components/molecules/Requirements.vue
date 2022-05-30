<template>
  <div class="requirements">
    <SubTitle text="Requisitos" />

    <ul>
      <li v-for="(item, index) in $requirements" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  computed: {
    $requirements() {
      return courses.$course.requirements.split('\n')
    },
  },
})
</script>

<style lang="scss" scoped>
.requirements {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: color('cinza');

  ul {
    margin-top: 2rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
