<template>
  <label :for="id" class="base-input">
    {{ label }}
    <div>
      <input
        :id="id"
        class="input"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        required
        @input="updateValue"
      />

      <button class="icon" type="button" @click="replaceType">
        <img v-if="type === 'password'" src="@/assets/img/eye.svg" alt="olho" />
        <img v-if="type === 'text'" src="@/assets/img/eye-off.svg" alt="olho" />
      </button>
    </div>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
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
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      type: 'password',
    }
  },

  methods: {
    replaceType() {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
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
    padding: 12px 70px 12px 16px;
    border-radius: 8px;
    width: 100%;
    color: color('dark');

    &:focus {
      outline: 4px solid color('roxo');
    }

    &::placeholder {
      color: color('dark-200');
    }
  }

  div {
    width: 100%;
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translateY(-50%);
    background: transparent;
    cursor: pointer;
  }
}
</style>
