<template>
  <NuxtLink to="/" class="card-course">
    <img src="https://picsum.photos/400/300" alt="" />
    <div class="content">
      <h2>Nome do curso</h2>
      <span>Professor</span>
      <ProgressBar progress="10" />
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card-course {
  background: color('dark-200');
  color: color('light');
  border-radius: 4px;

  img{
    width: 100%;
    height: 300px;
    max-width: 380px;
    object-fit: cover;
  }
  .content {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
