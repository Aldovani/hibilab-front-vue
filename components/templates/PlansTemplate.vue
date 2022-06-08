<template>
  <div class="plans-template">
    <header class="header">
      <h1 class="title">Planos</h1>
    </header>

    <div class="container-cards">
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
          @onClick="signature('price_1L4vlBGOxOu9eoh9Dus6IBlv')"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async signature(productId: string) {
      try {
        const { sessionId } = await this.$axios.$post('/signature', {
          successUrl: 'http://127.0.0.1:3000/courses',
          cancelUrl: 'http://127.0.0.1:3000/',
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
  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 5rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      color: color('light');
      margin: 0;
    }
  }
  .container-cards {
    padding-top: 9rem;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: space-between;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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
      width: 100%;
      height: 150px;
      top: 0;
      transform: translateY(-50%);
    }
    div {
      padding: 100px 0 50px;
    }

    h2 {
      color: #ffffff;
      font-size: 32px;
    }

    h3 {
      color: #ffffff;
      font-size: 1.5rem;
    }
  }
}
</style>
