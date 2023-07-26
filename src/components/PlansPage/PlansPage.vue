<template>
    <article class="plans">
        <header-item/>
        <sidebar-item/>
        <div class="plans__wrapper blur wrapper">
            <div class="plans__header">
                <h2 class="plans__title">Управление планами</h2>
            </div>
            <div class="plans__items">
                <div class="plans__item">
                    <div class="plans__content">
                        <h3 class="plans__subtitle">Управление инвестициями</h3>
                        <p class="plans__text">Управляйте своими инвестиционными планами в CoinFuze.</p>
                        <p class="plans__text">На этой странице мы собрали для вас инвестиционные планы, которыми вы можете с легкостью управлять.</p>
                        <p class="plans__text">Заходите в личный кабинет и наблюдайте, как день за днем растет ваша прибыль!</p>
                        <p class="plans__text">Совет от CoinFuze: используйте функцию пополнения баланса под вашими инвестиционными планами, чтобы добавить к плану дополнительный капитал и получить бонус на всю вашу прибыль.</p>
                    </div> 
                </div>
                <div class="plans__item">
                    <div class="plans__content">
                        <h3 class="plans__subtitle">Сделайте свои первые шаги в инвестировании</h3>
                        <p class="plans__text">Приветствуем вас в CoinFuze! Мы рады видеть вас в числе полноправных участников нашей системы.</p>
                        <p class="plans__text">Начните свой путь инвестора прямо сейчас!</p>
                        <p class="plans__text">Чтобы пользоваться всеми услугами CoinFuze, вам нужно пополнить депозит. Сделать это вы можете, перейдя во вкладку “Депозит” на приборной панеле, или перейдя по ссылке ниже.</p>
                    </div>
                    <router-link to="/deposit" class="plans__btn btn">Перейти к пополнению депозита</router-link>
                </div>
            </div>
            <plans-carousel/>
            <plans-history/>
        </div>
        <footer-item/>
    </article>
</template>
<script>
    import FooterItem from '../FooterItem.vue'; 
    import PlansCarousel from './PlansPageItem/PlansCarousel';
    import PlansHistory from './PlansPageItem/PlansHistory.vue';
    import HeaderItem from '../HeaderItem.vue';
    import SidebarItem from '../SidebarItem.vue';
    export default {
        name: 'PlansPage',
        components: {
            FooterItem,
            PlansCarousel,
            PlansHistory,
            HeaderItem,
            SidebarItem,
        }
    }
</script>
<style lang="scss">
    .plans {
        min-height: var(--app-height);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        @media (max-width: 1800px) {
            font-size: 0.875rem;
        }
        @media (max-width: 1450px) {
            font-size: 0.75rem;
        }
        &__header {
            color: $main-text;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0 20px;
        }
        &__title {
            font-size: 24px;
            @media (max-width: 1800px) {
                font-size: 22px;
            }
            @media (max-width: 1600px) {
                font-size: 20px;
            }
            @media (max-width: 1450px) {
                font-size: 18px;
            }
            @media (max-width: 1280px) {
                font-size: 16px;
            }
        }
        &__items {
            display: flex;
            gap: 20px;
            @media (max-width: 768px) {
                flex-direction: column;
            }
        }
        &__item {
            background-color: $item-bg;
            width: calc(50% - 10px);
            border-radius: 8px;
            transition: all 0.2s ease;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (min-width: 2560px) {
                min-height: 500px;
            }
            @media (max-width: 1450px) {
                width: 100%;
            }
        }
        &__subtitle {       
            font-weight: bold;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            padding-bottom: 15px;
            @media (max-width: 1800px) {
              font-size: 18px;
            }
            @media (max-width: 1600px) {
              font-size: 16px;
              min-height: 76px;
            }
            @media (max-width: 1450px) {
              font-size: 14px;
              min-height: 0;
            } 
        }
        &__text {
            padding-bottom: 10px;
        }
        &__text-special {
            padding-bottom: 10px;
            font-weight: bold;
        }
        &__text-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid $dark-color;
            padding-top: 10px;
        }
        &__bonus {
            width: 100%;
            background-color: $bg-special;
            margin-top: 15px;
            text-align: center;
            padding: 15px;
            font-weight: bold;
        }
        &__btn.btn {
            margin: 0;
            max-width: 330px;
            @media (max-width: 1800px) {
                max-width: 300px;
            }
            @media (max-width: 1450px) {
                max-width: 250px;
            }
            @media (max-width: 768px) {
                width: 300px;
                margin: 0 auto;
            }
            @media (max-width: 425px) {
                width: 100%;
                max-width: 100%;
            }
        }
    }
</style>