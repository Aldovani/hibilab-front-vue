<template>
  <form class="search-course">
    <input type="text" class="search-input" placeholder="Pesquisar curso" />
    <button type="submit"><img src="@/assets/img/search.svg" alt="" /></button>
  </form>
</template>

<style lang="scss" scoped>
.search-course {
  display: flex;
  .search-input {
    width: 100%;
    outline: none;
    padding: 20px 0 20px 64px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.15em;
    border-radius: 8px 0 0 8px;

    color: #212529;
  }
  button {
    cursor: pointer;
    border-radius: 0 8px 8px 0;
    padding: 0 64px;
    background: color('roxo');
  }
}
</style>
