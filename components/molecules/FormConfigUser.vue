<template>
  <form class="config">

    <BaseInput
    id="Name"
    label="Nome"
    placeholder="Aldovani Henrique da costa"
    />
    <BaseInput
    id="Email"
    label="Email"
    placeholder="aldovaniHcosta@gmai.com"
    />
    <PasswordInput
    id="password"
    label="Senha"
    placeholder="*******"
    />
    <Button text="Salvar"/>
  </form>
</template>

<style lang="scss" scoped>
  .config{
    display: grid;
    gap:16px;

    .button{
      margin-top: 16px;
    }
  }
</style>

