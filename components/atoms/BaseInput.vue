<template>
  <label :for="id" class="base-input">
    {{ label }}
    <input
      :id="id"
      class="input"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="updateValue"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(event: any) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: color('light');
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  position: relative;

  color: #fffffe;

  .input {
    background: color('light');
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;
    padding: 12px 1rem;
    border-radius: 8px;
    width: 100%;
    color: color('dark-200');
  }
}
</style>
