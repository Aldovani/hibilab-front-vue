<template>
  <div class="user-config-template">
    <Heading text="Configurações" />
    <FormConfigUser />
    <ChangeAvatar/>
  </div>
</template>

<style lang="scss" scoped>
.user-config-template {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;

  .heading {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: flex-start;
  }
  .change-avatar {
    justify-self: flex-end;
  }
}
</style>
