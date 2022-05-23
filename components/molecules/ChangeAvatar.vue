<template>
  <div class="change-avatar">
    <img src="@/assets/img/avatar.png" alt="avatar" class="image" />
    <span>Trocar imagem</span>
  </div>
</template>

<style lang="scss" scoped>
.change-avatar {
  width: 380px;
  border-radius: 50%;
  position: relative;
  .image {
    border-radius: 50%;
    width: 100%;
  }
  &::before,
  &::after {
    width: 380px;
    border-radius: 50%;
    height: 100%;
    content: '';
    position: absolute;
    inset: 0;
  }
  &::before {
    border: 12px solid color('roxo');
    z-index: 4;
  }
  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    &::after,
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  span {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    z-index: 4;
    color: color('light');
  }
}
</style>
