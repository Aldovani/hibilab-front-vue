<template>
  <div class="languages">
    <transition-group mode="out-in" name="fade" class="grid">
      <Language v-for="item in languages" :key="item" :language="item" />

      <Language
        v-for="item in moreLanguages"
        v-show="showMoreLanguage"
        :key="item"
        :language="item"
      />
    </transition-group>

    <button class="show-more-languages" @click="changeShowLanguages">
      {{ showMoreLanguage ? 'Mostra menos' : 'Mostra mais' }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      languages: [
        'JavaScript',
        'Python',
        'Ruby',
        'PHP',
        'Java',
        'C#',
        'C++',
        'C',
      ],
      moreLanguages: [
        'Go',
        'Rust',
        'Dart',
        'TypeScript',
        'Swift',
        'Elixir',
        'Lua',
        'F#',
      ],
      showMoreLanguage: false,
    }
  },
  methods: {
    changeShowLanguages() {
      this.showMoreLanguage = !this.showMoreLanguage
    },
  },
})
</script>

<style lang="scss" scoped>
.languages {
  position: relative;
  transition: all 1s;

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 1fr));
    gap: 16px;
  }
  .show-more-languages {
    transition: all 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid color('roxo');
    color: color('light');
    cursor: pointer;
    padding: 8px;
    position: absolute;
    transform: translateY(100%);

    bottom: -16px;
    left: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: color('light');
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
