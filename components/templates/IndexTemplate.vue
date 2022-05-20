<template>
  <div class="index-template">
    <Heading text="Cursos Populares" />
    <Carrousel />
    <Courses />
    <button @click="pagamento">pagar</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async pagamento() {
      const result = await this.$stripe?.redirectToCheckout({
        sessionId:
         'cs_test_b1yQfCCWzBD1yki4lckfxigKnivRepf9orONKtTdFK3q9OxP7ojlN0mPAV'
      })
      alert('pagamento')
      console.log(result)
    },
  },
})
</script>

<style lang="scss" scoped>
.index-template {
  display: flex;
  flex-direction: column;

  .heading {
    align-self: flex-start;
    margin-bottom: 48px;
  }
  .carrousel {
    margin-bottom: 64px;
  }
}
</style>
