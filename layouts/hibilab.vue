<template>
  <div class="hiblab">
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
  background-size:80%;
  .header {
    margin-top: 3rem;
    margin-bottom: 8rem;
  }
  .footer {
    margin-top: 4rem;
  }
}
</style>
