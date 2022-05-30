<template>
  <header class="header">
    <NuxtLink to="/">
      <img src="@/assets/img/LogoSmall.svg" class="logo" alt="Logo" />
    </NuxtLink>
    <NavBar />
    <div v-if="!$user" class="container-buttons">
      <Link text="Entrar" to="/login" />
      <Link :button="true" text="Matricular-se" to="/register" />
    </div>
    <div v-else class="container-action-user" @click="toggleMenu">
      <img src="@/assets/img/avatar.png" alt="" class="avatar" />
      <div :class="`menu  ${showMenu ? 'active' : ''}`">
        <Link to="/user/config" class="menu-item" text="Configurações" />
        <Link to="/user/dashboard" class="menu-item" text="Meu aprendizado" />
        <Link v-if="$isAdmin" to="/admin" class="menu-item" text="Admin" />
        <button class="menu-item" @click="logout">Sair</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { user, auth } from '@/store'
export default Vue.extend({
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    $user() {
      return !!user.$user.name
    },
    $isAdmin() {
      return user.$user.permission === 'admin'
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    logout() {
      auth.destroy()
      user.update(null)
      this.$router.push('/')
    },
  },
})
</script>

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
  .container-action-user {
    position: relative;

    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: color('roxo');
      padding: 3px;
      margin-right: 1rem;
    }
    .menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: color('dark-200');
      border-radius: 8px;
      display: flex;
      width: 400px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: all 0.3s ease-in-out;
      border: 4px solid color('roxo');
      opacity: 0;
      visibility: hidden;
      transform: translateY(-1rem);

      .menu-item {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        background: color('dark-200');
        text-transform: uppercase;
        text-align: left;

        padding: 32px;
        width: 100%;
        cursor: pointer;

        color: color('light');
        &:hover {
          background: color('dark');
        }
        &.nuxt-link-exact-active {
          color: color('roxo');
          background: color('dark');
        }
      }
      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
}
</style>
