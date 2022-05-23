<template>
  <div class="progress-bar">
    <dir class="container-progress-bar">
      <div class="progress-bar-fill" :style="`width:${progress}%;`"></div>
    </dir>
    <span> {{ progress }}% </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    progress: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.progress-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

  }
}
.container-progress-bar {
  width: 100%;
  height: 10px;
  background: color('light');
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  .progress-bar-fill {
    width: 0%;
    height: 100%;
    background: color('roxo');
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in-out;
  }
}
</style>
