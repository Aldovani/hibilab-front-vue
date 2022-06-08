<template>
  <div class="classes">
    <SubTitle v-if="!!$classes" text="Aulas" />
    <ol class="container-classes">
      <Classe v-for="item in $classes" :key="item.id" :classe="item" />
    </ol>
    <modal-classe-delete v-if="$modalState" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { courseSearch, modalClasseDelete } from '@/store'
export default Vue.extend({
  computed: {
    $classes() {
      return courseSearch.$course.classes || []
    },
    $modalState() {
      return modalClasseDelete.$stateModal 
    },
  },
})
</script>

<style lang="scss" scoped>
.classes {
  ol {
    margin-top: 4rem;
  }
  .classe + .classe {
    margin-top: 1rem;
  }
}
</style>
