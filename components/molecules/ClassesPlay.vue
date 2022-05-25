<template>
  <ul class="classes-play">
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
    <li>
      <input id="" type="checkbox" name="" />
      <span>nome da aula</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.classes-play {
  background: color('dark-200');
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.15em;
  color: color('light');
  max-height: 540px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
      width: 6px;
      background: #2D3339;
  }
  &::-webkit-scrollbar-thumb {
      background: color('roxo');
  }

  li {
    padding: 2rem;
    border-bottom: 2px solid color('light');

    input{
      height: 20px;
      width: 20px;
      margin-right: 2rem;
    }
  }
}
</style>
