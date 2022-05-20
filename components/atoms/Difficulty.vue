<template>
  <span :class="`difficulty ${difficulty}`">{{ difficulty }}</span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    difficulty: {
      type: String as PropType<'iniciante' | 'intermediário' | 'avançado'>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.difficulty {
  display: inline-block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.15em;
  color: color('light');
  padding: 6px 13px;
  border-radius: 19px;
  &.iniciante {
    background-color: hsla(152, 63%, 10%, 0.5);

    color: #6cd13c;
  }

  &.intermediário {
    background-color: hsla(36, 63%, 21%, 0.5);
    color: #d1963c;
  }

  &.avançado {
    background-color: hsla(0, 63%, 21%, 0.5);
    color: #d13c3c;
  }
}
</style>
