<template>
  <div class="dashboard-user-template">
    <section>
      <SubTitle text="Meu aprendizado" />
      <CoursesInProgress />
    </section>
    <section>
      <SubTitle text="Finalizados" />
      <CoursesFinished />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-user-template {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  gap: 2rem;
  .subtitle {
    justify-self: flex-start;
    margin-bottom: 1rem;
  }

}
</style>
