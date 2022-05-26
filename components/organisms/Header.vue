<template>
  <header class="header">
    <NuxtLink to="/">
      <img src="@/assets/img/LogoSmall.svg" class="logo" alt="Logo" />
    </NuxtLink>
    <NavBar />
    <!-- <div class="container-buttons">
      <Link text="Entrar" to="/login" />
      <Link :button="true" text="Matricular-se" to="/register" />
    </div> -->
    <div>
      <img src="@/assets/img/avatar.png" alt="" class="avatar" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 30px;
  }
  .container-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 1rem;
  }
}
</style>
