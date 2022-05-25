<template>
  <li class="classe">
    <span>Aula historia</span>
    <div>
      <button><img src="@/assets/img/pen.svg" alt="Editar" /></button>
      <button>
        <img src="@/assets/img/X.svg" alt="Excluir" />
      </button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.classe {
  width: 100%;
  border-radius: 8px;
  background: color('dark-200');

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.15em;
  padding: 32px;
  color: color('light');
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    & + button {
      margin-left: 1rem;
    }
  }
}
</style>
