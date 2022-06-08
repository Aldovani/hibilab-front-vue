<template>
  <div class="hiblab">
    <clientOnly>
      <notifications
        position="top-right"
        classes="notifications"
        effect="slide-up"
        :max="2"
      />
    </clientOnly>
    <Container>
      <Header />
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.hiblab {
  background-image: url('@/assets/img/bg.png');
  background-size: 80%;
  min-height: 100vh;
  .header {
    margin-top: 3rem;
    margin-bottom: 8rem;
  }
  .footer {
    margin-top: 4rem;
    /* position: absolute; */
    /* bottom: 0; */
    /* width: 100%; */
  }
}
</style>
