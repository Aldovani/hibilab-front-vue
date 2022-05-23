<template>
  <div class="pagination">
    <ul>
      <li>1</li>
      <li class="active">2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  li,
  button {
    border: 3px solid color('light');
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    color: color('light');
    font-family: 'Inter';
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s ease-in;

    &.active {
      border-color: color('roxo');
      color: color('roxo');
    }
    &:hover {
      color: color('roxo');
      background: color('light');
      &.active {
        background: color('roxo');
        color: color('light');
      }
    }
  }
}
</style>
