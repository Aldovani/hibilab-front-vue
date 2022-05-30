<template>
  <div class="plans-template">
    <div class="card">
      <img src="@/assets/img/tubodeensaio1.svg" alt="" />
      <div>
        <h2>R$ 15,00</h2>
        <h3>Mensal</h3>
      </div>
      <Button
        text="Assinar"
        @onClick="signature('price_1L4vkRGOxOu9eoh9WzWVstCG')"
      />
    </div>
    <div class="card">
      <img src="@/assets/img/tubodeensaio3.svg" alt="" />
      <div>
        <h2>R$ 75,00</h2>
        <h3>ANUAL</h3>
      </div>
      <Button
        text="Assinar"
        @onClick="signature('price_1L4vlBGOxOu9eoh9Dus6IBlv1')"
      />
    </div>
    <div class="card">
      <img src="@/assets/img/tubodeensaio2.svg" alt="" />
      <div>
        <h2>R$ 40,00</h2>
        <h3>TRIMESTRAL</h3>
      </div>
      <Button
        text="Assinar"
        @onClick="signature('price_1L4vlnGOxOu9eoh9kuIXzl7p')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async signature(productId: string) {
      try {
        const { sessionId } = await this.$axios.$post('/signature', {
          successUrl: 'http://127.0.0.1:3000/success',
          cancelUrl: 'http://127.0.0.1:3000/cancel',
          productPrice: productId,
        })

        await this.$stripe?.redirectToCheckout({ sessionId })
      } catch (e) {
        console.error(e)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.plans-template {
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 380px));
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: color('dark-200');
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    position: relative;
    text-align: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;

    line-height: 56px;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    img {
      position: absolute;
      top: 0;
      transform: translateY(-50%);
    }
    div {
      padding: 150px 64px 60px 64px;
    }

    h2 {
      color: #ffffff;
      font-size: 48px;
    }

    h3 {
      color: #ffffff;
      font-size: 2rem;
    }

    Button {
      margin-top: 20px;
    }
  }
}
</style>
