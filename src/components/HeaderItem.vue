<template>    
    <div class="header" @click="closeSidebar">
        <div class="header__burger-wrap">
            <div class="header__burger" :class="{ 'open': isSidebarOpen }" @click="toggleSidebar" @close-burger="closeBurger">
            <span></span>
            <span></span>
            <span></span>
            </div>
            <sidebar-item :class="{ 'sidebar--open': isSidebarOpen }" ref="menuSidebar" />
            <a href="https://coinfuze.com/">
            <img class="header__logo header__logo--desktop" src="../assets/images/logo/logo.svg" alt="logo" />
            <img class="header__logo header__logo--mob" src="../assets/images/logo/logo-mob.svg" alt="logo" />
            </a>
        </div>
        <div class="header__wallet" @click="toggleBalanceWindow">
            <img src="../assets/images/icon_1.png" alt="icon_1" width="35">
            <span class="header__icon-arrow icon-arrow_drop_down"></span>
        </div>
        <div class="header__balance-window" v-if="isBalanceWindowOpen" ref="balanceWindow">
            <p class="header__text">Общий баланс: <span>2537 USDT</span></p>
            <p class="header__text">Свободный баланс: <span>800 USDT</span></p>
            <p class="header__text">Активный баланс: <span>1700 USDT</span></p>
            <p class="header__text">Партнерський баланс: <span>37 USDT</span></p>
            <span class="header__icon-close icon-close"></span>
        </div>
        <div class="header__items">
            <div class="header__balance">
                <div class="header__balance-item">
                    <img src="../assets/images/icon_1.png" alt="icon_1" width="35">
                    <div class="header__balance-content">
                        <p class="header__balance-text">Общий баланс:</p>
                        <p class="header__balance-text">2537 USDT</p>
                    </div>
                </div>
                <div class="header__balance-item">
                    <img src="../assets/images/icon.png" alt="icon_1" width="26">
                    <div class="header__balance-content">
                        <p class="header__balance-text">Свободный баланс:</p>
                        <p class="header__balance-text">800 USDT</p>
                    </div>
                </div>
                <div class="header__balance-item">
                    <img src="../assets/images/icon_3.png" alt="icon_1" width="28">
                    <div class="header__balance-content">
                        <p class="header__balance-text">Активный баланс:</p>
                        <p class="header__balance-text">1700 USDT</p>
                    </div>
                </div>
                <div class="header__balance-item">
                    <img src="../assets/images/icon_2.png" alt="icon_1" width="28">
                    <div class="header__balance-content">
                        <p class="header__balance-text">Партнерський баланс:</p>
                        <p class="header__balance-text">37 USDT</p>
                    </div>
                </div>
            </div>
        <div class="header__bell" @click="toggleBellWindow">
            <span class="header__icon-alarm icon-alarm"></span>
            <div class="header__added">
                <span class="header__icon-notice icon-notice"></span>
            </div>
        </div>
        <div class="header__bell-window" v-if="isBellWindowOpen" ref="bellWindow">
            <span class="header__icon-close icon-close"></span>
            <div class="header__bell-items">
                <p class="header__bell-time">09:23</p>
                <span class="header__bell-icon icon-check-circle"></span>
                <div class="header__bell-content">
                    <div class="header__bell-title">Поздравляем!</div>
                    <div class="header__bell-text">Активация торгового плана прошла успешно</div>
                </div>
            </div>
            <div class="header__bell-items">
                <p class="header__bell-time">05:23</p>
                <span class="header__bell-icon icon-info"></span>
                <div class="header__bell-content">
                    <div class="header__bell-title">Регистрация</div>
                    <div class="header__bell-text">Вы зарегистрировалить в личном кабинете успешно</div>
                </div>
            </div>
        </div>
        <div class="header__personal">
            <div class="header__icon-wrap" @click="togglePersonallWindow">
                <span class="icon-user1 header__icon"></span>
            </div>
            <div class="header__name">Дмитрий</div>
            <div class="header__personal-window" v-if="isPersonallWindowOpen" ref="personalWindow">
                <span class="header__icon-close icon-close"></span>
                <div class="header__personal-circle">
                    D
                </div>
                <h3 class="header__personal-name">{{ CLIENT_AREA.results[0].name }}</h3>
                <p class="header__personal-text">{{ CLIENT_AREA.results[0].phone }}</p>
                <p class="header__personal-text header__personal-text--special">{{ CLIENT_AREA.results[0].email }}</p>
                <router-link to="/profile" class="header__personal-btn btn">Личная информация</router-link>
                <div class="header__personal-content header__personal-content--special">
                    <p class="header__personal-text"><span class="icon-wallet"></span>Баланс аккаунта</p>
                    <p class="header__finance-text">470 USDT</p>
                </div>
                <div class="header__personal-content">
                    <p class="header__personal-text"> <span class="icon-user-plus"></span>Пригласить друзей</p>
                    <router-link class="btn header__add-btn" to="/partnership">Добавить</router-link>
                </div>
                <button class="btn header__logout-btn" @click="logoutUser">Выход</button>
            </div>
        </div>
      </div>
    </div>    
</template>
  
<script>
import SidebarItem from './SidebarItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HeaderItem',
  components: {
    SidebarItem
  },
  data() {
    return {
      isSidebarOpen: false,
      isBalanceWindowOpen: false,
      isBellWindowOpen: false,
      isPersonallWindowOpen: false
    };
  },
  computed: {
        ...mapGetters([
            'CLIENT_AREA',
        ])
    },
  methods: {
    ...mapActions([
        'GET_CLIENT_AREA_FROM_API',
        'LOGOUT_USER'
    ]),
    toggleSidebar(event) {
      event.stopPropagation();
      this.isSidebarOpen = !this.isSidebarOpen;
      this.isBalanceWindowOpen = false; 
      this.isBellWindowOpen = false; 
      this.isPersonallWindowOpen = false;
      this.applyBlurEffect();
      this.applyOverflowHidden();
    },
    applyOverflowHidden() {
      if (this.isSidebarOpen) {
        document.body.classList.add('hidden');
      } else {
        document.body.classList.remove('hidden');
      }
    },
    applyBlurEffect() {
      const blur = document.querySelector('.blur');
      if (blur) {
        blur.classList.toggle('header__blur', this.isSidebarOpen);
      }
    },
    closeSidebar(event) {
      const target = event.target;
      const menuSidebar = this.$refs.menuSidebar;
      const sidebarElement = menuSidebar ? menuSidebar.$el : null;
      const balanceWindow = this.$refs.balanceWindow;
      const bellWindow = this.$refs.bellWindow;
      const personalWindow = this.$refs.personalWindow;
      const header = this.$el;

      if (
        !header.contains(target) ||
        (sidebarElement && !sidebarElement.contains(target)) ||
        (balanceWindow && !balanceWindow.contains(target)) ||
        (bellWindow && !bellWindow.contains(target)) ||
        (personalWindow && !personalWindow.contains(target))
      ) {
        this.isSidebarOpen = false;
        this.isBalanceWindowOpen = false;
        this.isBellWindowOpen = false;
        this.isPersonallWindowOpen = false;
        this.applyBlurEffect();
        this.applyOverflowHidden();
      }
    },
    toggleBalanceWindow(event) {
      event.stopPropagation();
      this.isBalanceWindowOpen = !this.isBalanceWindowOpen;
      this.isBellWindowOpen = false; 
      this.isPersonallWindowOpen = false;
      this.isSidebarOpen = false;
      this.applyBlurEffect();
      this.applyOverflowHidden();
    },
    toggleBellWindow(event) {
      event.stopPropagation();
      this.isBellWindowOpen = !this.isBellWindowOpen;           
      this.isBalanceWindowOpen = false; 
      this.isPersonallWindowOpen = false; 
      this.isSidebarOpen = false;
      this.applyBlurEffect();
      this.applyOverflowHidden();
      const headerAddedElement = document.querySelector('.header__added');
      if (headerAddedElement) {
        headerAddedElement.style.display =  'none';
      }
    },
    togglePersonallWindow(event) {
      event.stopPropagation();
      this.isPersonallWindowOpen = !this.isPersonallWindowOpen;
      this.isBalanceWindowOpen = false; 
      this.isBellWindowOpen = false; 
      this.isSidebarOpen = false;
      this.applyBlurEffect();
      this.applyOverflowHidden();
    },
    async logoutUser() {
      await this.$store.dispatch('LOGOUT_USER');
      this.$router.push('/login');
    },
  },
  mounted() {
    this.GET_CLIENT_AREA_FROM_API();
    if (this.CLIENT_AREA) {
        console.log('Data arrived!');
    }
    document.body.addEventListener('click', this.closeSidebar);
  },
  beforeUnmount() {
    document.body.removeEventListener('click', this.closeSidebar);
  }
};
</script>

<style lang="scss">
    .header {
        border-bottom: 1px solid $main-text;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90px;
        color: $main-text;
        background-color: $dark-color;
        padding: 0 50px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 999;
        @media (max-width: 1800px) {
            padding: 0 30px;
            font-size: 0.875rem;
        }
        @media (max-width: 1450px) {
            font-size: 0.75rem;
            height: 60px;
        }
        @media (max-width: 600px) {
            padding: 20px 10px;
        }
        @media (max-width: 375px) {
            padding: 20px 10px;
        }
        &__logo {
            width: 150px;
            @media (max-width: 1450px) {
                width: 120px;
            }
            &--desktop {
                @media (max-width: 1269px) {
                display: none;
            }
        }
        &--mob {
            @media (min-width: 1270px) {
                display: none;
            }
                width: 32px;
            }
            @media (max-width: 600px) {
                width: 28px;
            }
        }
        &__items {
            display: flex;
            align-items: center;
            gap: 30px;
            @media (max-width: 425px) {
                gap: 20px;
            }
        }
        &__balance  {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
        }
        &__balance-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &__icon-wrap {
            width: 40px;
            height: 40px;
            background-color: $green;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $green;
            cursor: pointer;      
            &:hover {
                background: $main-btn-hover;
                border: 1px solid $main-text;
            }
            @media (max-width: 1450px) {
                width: 38px;
                height: 38px;
            }
            @media (max-width: 600px) {
                width: 34px;
                height: 34px;
            }
        }
        &__icon {
            font-size: 26px;
            @media (max-width: 600px) {
                font-size: 24px;
            }
        }
        &__icon-alarm {
            font-size: 20px;
        }
        &__icon-arrow {
            font-size: 18px;
            cursor: pointer;
            &--mob {
                @media (min-width: 1101px) {
                    display: none;
                }
            }
        }
        &__icon-notice {
            font-size: 24px;
        }
        &__wallet {
            cursor: pointer;
            position: absolute;
            left: calc(50% - 10px);
            display: flex;
            align-items: center;
            @media (min-width: 1101px) {
                display: none;
            }
            &:hover {
                color: $green;
            }
        }
        &__icon-wallet {
            font-size: 20px;
        }
        &__personal {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            @media (max-width: 1024px) {
                gap: 0px;
            }
        }
        &__added {
            position: absolute;
            color: $inactive;
            display: flex;
            align-items: center;
            justify-content: center;
            bottom: -5px;
            left: -7px;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            text-align: center;
            background-color: $main-text;
        }
        &__burger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 25px;
            height: 20px;
            cursor: pointer;
            @media (min-width: 991px) {
                display: none;
            }
            @media (max-width: 1270px) {
                display: flex;
            }
            & span {
                width: 25px;
                height: 2px;
                background-color: $main-text;
                display: block;
                transition: all 0.2s ease-in-out;
            }
            &.open span:nth-child(1) {
                transform: rotate(45deg) translate(8.5px, 8.5px);
            }
            &.open span:nth-child(2) {
                transform: rotate(-45deg) translate(4px, -4px);
            }
            &.open span:nth-child(3) {
                display: none;
            }
        }
        &__burger-wrap {
            display: flex;
            align-items: center;
            gap: 30px;
            @media (max-width: 600px) {
                gap: 20px;
            }
        }
        &__blur {
            opacity: 0.6;
            background-color: $dark-color;
        }
        &__bell {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
            &:hover {
                color: $green;
            }
        }
        &__balance, &__name {
            @media (max-width: 1100px) {
                display: none;
            }
        }        
        &__balance-window {
            background-color: $authorization-block;
            position: absolute;
            top: 100%; 
            left: calc(50% - 145px);
            width: 290px;
            padding: 20px;
            border-radius: 5px;
            z-index: 1000;
            filter: $filter;
            @media (max-width: 1024px) {
                filter: none;
            }
            @media (max-width: 600px) {
                left: 30px;
                width: calc(100% - 60px);
            }
            @media (max-width: 375px) {
                left: 10px;
                width: calc(100% - 20px);
            }
        }
        &__personal-window, &__bell-window {
            background-color: $authorization-block;
            position: absolute;
            top: 100%; 
            right: 50px;
            padding: 20px;
            border-radius: 5px;
            z-index: 1000;
            width: 330px;
            filter: $filter;
            @media (max-width: 1800px) {
                right: 30px;
            }            
            @media (max-width: 1280px) {
                width: 255px;
            }
            @media (max-width: 1024px) {
                filter: none;
            }
            @media (max-width: 500px) {
                width: calc(100% - 60px);
            }
            @media (max-width: 375px) {
                right: 10px;
                width: calc(100% - 20px);
            }
        }
        &__icon-close {
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 5px;
        }
        &__bell-items:not(:last-child) {
            border-bottom: 1px solid $special-text;
        }
        &__bell-items {
            display: flex;
            gap: 15px;
            padding: 10px 0;
        }
        &__bell-time {
            font-size: 12px;
            position: absolute;
            right: 20px;
            @media (max-width: 1450px) {
                font-size: 8px;
              }
        }
        &__bell-title {
            color: $green;
            font-size: 20px;
            font-weight: bold;
            @media (max-width: 1800px) {
                font-size: 18px;
            }
            @media (max-width: 1600px) {
                font-size: 14px;
            }
            @media (max-width: 1450px) {
                font-size: 12px;
            }
        }
        &__bell-icon {
            font-size: 20px;
            padding-top: 5px;
        }
        &__personal-btn.btn {
            max-width: none;
            min-width: 230px;
            margin: 15px 0;
        }
        &__finance-text {
            font-weight: bold;
            font-size: 20px;
            @media (max-width: 1800px) {
                font-size: 18px;
            }            
            @media (max-width: 1600px) {
                font-size: 16px;
            }
            @media (max-width: 1450px) {
                font-size: 14px;
            }
        }
        &__personal-circle {
            width: 64px;
            height: 64px;
            background-color: $circle;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        &__personal-window {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__personal-name {
            padding-bottom: 10px;
        }
        &__personal-text {
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            &--special {
                padding-bottom: 15px;
                border-bottom: 1px solid $special-text;
                width: 100%;
            }
        }
        &__personal-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 20px 0;
            border-bottom: 1px solid $special-text;
            &--special{
                border-top: 1px solid $special-text;
            }
        }
        &__add-btn.btn {
            background: $circle;
            border: none;
            color: $main-text;
            padding: 10px 20px;
            margin: 0;
            &:hover {
                opacity: 0.9;
                background: $circle;
                border: none;
            }
        }
        &__logout-btn.btn {
            padding: 10px 30px;
            margin-top: 15px;
        }
    }
    .hidden {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
</style>
  