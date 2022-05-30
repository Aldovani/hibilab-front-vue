<template>
  <div class="pagination">
    <ul>
      <li
        :class="`${$pagination.current_page == 1 ? 'active' : ''}`"
        @click="changePage(1)"
      >
        1
      </li>
      
      <li
        v-show="$pagination.last_page != 1"
        :class="`${$pagination.current_page == $pagination.last_page  ? 'active' : ''}`"
        @click="changePage($pagination.last_page)"
      >
        {{ $pagination.last_page }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courses } from '@/store'
export default Vue.extend({
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    $pagination() {
      return courses.$pagination
    },
  },
  methods: {
    async changePage(page: number) {
      await courses.index(page)
    },
  },
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  li,
  button {
    border: 3px solid color('light');
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    color: color('light');
    font-family: 'Inter';
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-in;

    &.active {
      border-color: color('roxo');
      color: color('roxo');
    }
    &:hover {
      color: color('roxo');
      background: color('light');
      &.active {
        background: color('roxo');
        color: color('light');
      }
    }
  }
}
</style>
