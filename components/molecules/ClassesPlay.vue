<template>
  <ul class="classes-play">
    <li v-for="item in $classes" :key="item.id" @click="setClasse(item)">
      <input type="checkbox" :data-classe-id="item.id" @input="updateClasse" />
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { coursePlay, courseSearch } from '@/store'
export default Vue.extend({
  data() {
    return {
      classes: [],
    }
  },
  computed: {
    $classes() {
      return coursePlay.$classes
    },
  },
  methods: {
    setClasse(item: any) {
      coursePlay.setCurrentClass(item.id)
    },
    updateClasse(e: any) {
      if (e.target.checked) {
        alert('checked')
        coursePlay.markAsSeen({
          classeId: e.target.dataset.classeId,
          courseId: courseSearch.$course.id,
        })
      } else {
        alert('unchecked')
        coursePlay.unMarkAsSeen({
          courseId: courseSearch.$course.id,
          classeId: e.target.dataset.classeId,
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.classes-play {
  background: color('dark-200');
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  line-height: 29px;
  letter-spacing: 0.15em;
  color: color('light');
  max-height: 540px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    background: #2d3339;
  }
  &::-webkit-scrollbar-thumb {
    background: color('roxo');
  }

  li {
    padding: 2rem;
    border-bottom: 2px solid color('light');

    input {
      height: 20px;
      width: 20px;
      margin-right: 2rem;
    }
  }
}
</style>
