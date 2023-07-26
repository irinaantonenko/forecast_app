<template>
  <aside class="sidebar" :class="{ 'sidebar--open': isSidebarOpen }" ref="menuSidebar">
    <nav class="sidebar__nav">
      <ul>
        <li :class="{ 'active': isCurrentRoute('/') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/')"
            class="sidebar__link" to="/"
          ><span class="icon-link sidebar__icon"></span>Панель управления</router-link>
        </li>
        <li :class="{ 'active': isCurrentRoute('/deposit') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/deposit')"
            class="sidebar__link" to="/deposit"
          ><span class="icon-in sidebar__icon"></span>Депозит</router-link>
        </li>
        <li :class="{ 'active': isCurrentRoute('/plans') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/plans')"
            class="sidebar__link" to="/plans"
          ><span class="icon-settings sidebar__icon"></span>Управление планами</router-link>
        </li>
        <li :class="{ 'active': isCurrentRoute('/partnership') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/partnership')"
            class="sidebar__link" to="/partnership"
          ><span class="icon-user-check sidebar__icon"></span>Партнерская программа</router-link>
        </li>
        <li :class="{ 'active': isCurrentRoute('/withdrawal') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/withdrawal')"
            class="sidebar__link" to="/withdrawal"
          ><span class="icon-out sidebar__icon"></span>Вывод средств</router-link>
        </li>
        <li :class="{ 'active': isCurrentRoute('/profile') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/profile')"
            class="sidebar__link" to="/profile"
          ><span class="icon-user sidebar__icon"></span>Личная информация</router-link>
        </li>
        <li>
          <a class="sidebar__link" href="https://faq.coinfuze.com/" target="_blank"
          ><span class="icon-question-circle-o sidebar__icon"></span>FAQ</a>
        </li>
        <li :class="{ 'active': isCurrentRoute('/news') }">
          <router-link v-on:click="closeSidebar" @click="activateMenu('/news')"
            class="sidebar__link" to="/news"
          ><span class="icon-megaphone sidebar__icon"></span>Новости</router-link>
        </li>
      </ul>
    </nav>
    <button class="btn sidebar__btn" @click="logoutUser">Выйти с аккаунта</button>
  </aside>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  beforeRouteLeave(to, from, next) {
    this.isSidebarOpen = false;
    next();
  },
  name: 'SidebarItem',
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    ...mapActions([
      'LOGOUT_USER'
    ]),
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
    activateMenu(route) {
      const menuItems = document.querySelectorAll('nav ul li');
      menuItems.forEach((item) => {
        item.classList.remove('active');
      });
      const activeItem = document.querySelector(`nav ul li a[href='${route}']`).parentNode;
      activeItem.classList.add('active');
    },
    closeSidebar() {
      this.$refs.menuSidebar.classList.remove('sidebar--open');
      //this.isSidebarOpen = false;
      this.closeBurger();
      this.applyOverflowHidden();
    },
    closeBurger() {
      const headerBurgerElement = document.querySelector('.header__burger');
      if (headerBurgerElement) {
        headerBurgerElement.classList.remove('open');
      }
    },
    applyOverflowHidden() {
      if (this.isSidebarOpen) {
        document.body.classList.add('hidden');
      } else {
        document.body.classList.remove('hidden');
      }
    },
    async logoutUser() {
      await this.$store.dispatch('LOGOUT_USER');
      this.$router.push('/login');
    },
  },
};
</script>
  
  <style lang="scss">
  .sidebar {
    height: 100%;
    background-color: $dark-color;
    position: fixed;
    top: 90px;
    left: 0;
    overflow-x: hidden;
    color: $main-text;
    border-right: 1px solid $main-text;
    width: 344px;
    @media (max-width: 1800px) {
      width: 280px;
    }
    @media (max-width: 1450px) {
      width: 250px;
      top: 60px;
    }
    @media (max-width: 1270px) {
      position: fixed;
      left: -300px;
      transition: left 0.3s ease;
      @media (max-width: 425px) {
        left: -100%;
        width: 100%;
        border: none;
      }
      &--open {
        left: 0;
      }
    } 
    &__btn.btn {
      margin-top: 30px;
    }
    &__link {
      display: flex;
      gap: 15px;
      align-items: center;
      white-space: nowrap;
      padding: 15px 50px;
      text-decoration: none;
      transition: color 0.3s ease;
      color: $main-text;
      font-weight: bold;
      @media (max-width: 1800px) {
        padding: 15px 30px;
        font-size: 0.875rem;
      }
      @media (max-width: 1450px) {
        font-size: 0.75rem;
      }
      @media (max-width: 1400px) {
        padding: 15px 20px;
        gap: 10px;
      }
      &:hover {
        color: $green;
        border-bottom: 2px solid $green;
        padding-bottom: 13px;
        background-color: $bg;
      }
    }
    &__icon {
      font-size: 21px;
    }
    &__nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    & ul {
      padding: 0;
      margin: 0;
    }
    & li {
      margin: 0;
      padding: 0;
    }
    & li.active a {
      color: $green;
      border-bottom: 2px solid $green;
      padding-bottom: 13px;
      background-color: $bg;
    }
  }
  </style>