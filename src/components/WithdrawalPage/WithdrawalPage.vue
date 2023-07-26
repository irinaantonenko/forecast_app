<template>
    <article class="withdrawal">
        <header-item/>
        <sidebar-item/>
        <div class="withdrawal__wrapper blur wrapper">
            <div class="withdrawal__header">
                <h2 class="withdrawal__title">Вывод средств</h2>
            </div>
            <div class="withdrawal__main">
                <div class="withdrawal__item" v-if="showInfo">
                    <h3 class="withdrawal__subtitle">Снятие средств</h3>
                    <div class="withdrawal__content">
                        <p class="withdrawal__text">На этой странице вы можете вывести средства на свой криптовалютный кошелек. Следуйте подсказкам, чтобы вывод был максимально быстрым и удобным.</p>
                        <ul class="withdrawal__list">
                            <li class="withdrawal__text">Вывести средства можно в той же криптовалюте, в которой вы пополнили депозит </li>
                            <li class="withdrawal__text">Вывод может занять некоторое время, поскольку транзакции в сети криптовалют проходят с разной скоростью</li> 
                            <li class="withdrawal__text">Заявки на вывод принимаются автоматически</li>
                        </ul>
                        <button class="withdrawal__btn btn" @click="mergeItems">Начать снятие средств</button>
                    </div>
                </div>
                <div class="withdrawal__item" v-if="showInfo">
                    <h3 class="withdrawal__subtitle">Не упустите свой шанс получить больше прибыли!</h3>
                    <div class="withdrawal__content">
                        <p class="withdrawal__text">Вы можете получить еще больше прибыли, реинвестируя средства</p>
                        <div class="withdrawal__text-special">Реинвестируйте депозит и полученную прибыль</div>
                        <div class="withdrawal__text-special">Пройдите инвестиционный период</div> 
                        <div class="withdrawal__text-special">Наблюдайте ежедневно, как увеличивается ваш доход</div>
                        <router-link to="/deposit" class="withdrawal__btn btn">Реинвестировать сейчас</router-link>
                    </div>  
                </div>
                <div v-else class="withdrawal__item withdrawal__item-merged">
                    <div class="withdrawal__subtitle">
                        <span @click="backItems" class="withdrawal__arrow-icon icon-arrow-left"></span>
                        <span>Выберите нужный кошелек для вывода</span>
                    </div>
                    <div class="withdrawal__content">
                        <p class="withdrawal__text">Чтобы вывести средства на ваш кошелек, добавьте его в ваш аккаунт и создайте заявку на вывод.</p>
                        <p class="withdrawal__text">Вывод на этот Wallet-ID:</p>
                        <div class="withdrawal__form">
                            <input class="withdrawal__input" type="text" id="transactionId" placeholder="Wallet-ID" required>
                            <div class="withdrawal__wrap">
                                <input class="withdrawal__input withdrawal__input--special" type="number" id="amount" placeholder="Сумма вывода" required>
                                <button class="withdrawal__form-btn btn" @click="backItems">Отправить заявку</button>
                            </div>
                        </div>
                        <div class="withdrawal__info">
                            <div class="withdrawal__info-content">
                                <span class="icon-info withdrawal__icon-info"></span>
                                <div class="withdrawal__info-wrap">
                                    <h3 class="withdrawal__info-title">Информация</h3>
                                    <p class="withdrawal__info-text">Показанный баланс — это ваш доступный баланс, а не общая сумма средств. Если у вас есть активные инвестиции, они не учитываются, потому что они заблокированы до окончания инвестиции.</p>
                                </div>                
                            </div>
                        </div>
                    </div>  
                </div>
                <deposit-history/>
            </div>
        </div>
        <footer-item/>
    </article>
</template>
<script>
    import DepositHistory from '../DepositPage/DepositPageItem/DepositHistory.vue'
    import FooterItem from '../FooterItem.vue'; 
    import HeaderItem from '../HeaderItem.vue';
    import SidebarItem from '../SidebarItem.vue';
    export default {
        name: 'WithdrawalPage',   
        data() {
            return {
                showInfo: true
            };
        },
        methods: {
            mergeItems() {
                this.showInfo = false;
            },
            backItems() {
                this.showInfo = true;
            }
        },
        components: {
            DepositHistory,
            FooterItem,
            HeaderItem,
            SidebarItem,
        },
    }
</script>
<style lang="scss">
.withdrawal {
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
    &__main {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        transition: all 0.2s ease;
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
    &__item {
        background-color: $item-bg;
        width: calc(50% - 10px);
        border-radius: 8px;
        transition: all 0.2s ease;           
        @media (min-width: 769px) {
            min-height: 365px
        }
        @media (min-width: 945px) {
            min-height: 360px
        }
        @media (min-width: 1450px) {
            min-height: 395px;
        }
        @media (min-width: 1800px) {
            min-height: 430px;
        }
        @media (min-width: 1920px) {
            min-height: 450px;
        }           
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    &__item-merged {
        width: 100%;
        transition: all 0.2s ease;
    }
    &__subtitle {       
        font-weight: bold;
        font-size: 20px;
        min-height: 87px;
        padding: 15px;
        border-bottom: 1px solid $dark-color;
        display: flex;
        align-items: center;
        gap: 15px;
        @media (min-width: 2560px) {
          min-height: 100px;  
        }
        @media (max-width: 1800px) {
          font-size: 18px;
        }
        @media (max-width: 1600px) {
          font-size: 16px;
          min-height: 76px;
        }
        @media (max-width: 1450px) {
          font-size: 14px;
          min-height: 71px;
        } 
    }
    &__finance-img {
        width: 23px;
    }
    &__content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 87px);
        @media (min-width: 2560px) {
            height: calc(100% - 100px);
        }
    }
    &__list &__text {
        margin-left: 15px;
    }
    &__text {
        padding-bottom: 10px;
    }
    &__btn.btn {
        margin: 15px 0 0;
        width: 100%;
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
            margin-top: 10px;
        }
        @media (max-width: 425px) {
            width: 100%;
            max-width: 100%;
        }
    }
    &__form-btn.btn {
        margin: 0;
        width: 50%;
        max-width: 100%;
        @media (max-width: 500px) {
            width: 100%;
        }
    }
    &__text-special {   
        background-color: $bg-special;
        margin-bottom: 10px;
        padding: 5px 20px;
        border-radius: 15px;
    }
    &__arrow-icon {
        cursor: pointer;
    }
    &__form {
        padding-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;
        @media (max-width: 768px) {
            width: 70%;
        }
        @media (max-width: 700px) {
            gap: 20px;
            width: 100%;
        }
    }
    &__wrap {
        display: flex;
        gap: 20px;
        @media (max-width: 500px) {
            flex-direction: column;
        }
    }
    &__input {
        padding: 15px 20px;
        margin: 0;
        border-radius: 30px;
        border: 1px solid $dark-color;
        outline: none;
        color: $dark-color;
        font-size: 10px;
        width: 100%;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
        &:focus-within, &:hover {
            border: 1px solid $green;
            outline: 0;
        }
        @media (min-width: 1450px) {
            font-size: 12px;
        }
        @media (max-width: 1280px) {
            padding: 10px 20px;
            font-size: 9px;
        }
        @media (max-width: 700px) {
            font-size: 12px;
        }
        @media (max-width: 450px) {
            font-size: 10px;
        }
        &--special {
            width: 50%;
            @media (max-width: 500px) {
                width: 100%;
            }
        }
    }  
    &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $main-btn;
        border-radius: 8px;
        padding: 10px 20px;
        margin-top: 20px;
        gap: 20px;
        @media (max-width: 1600px) {
            padding: 10px 20px;
        }
        @media (max-width: 750px) {
            flex-direction: column;
            padding: 20px;
        }  
    }
    &__info-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    &__icon-info {
        font-size: 30px;
        background-color: $main-text;
        border-radius: 50%;
    }
    &__info-title {
        font-size: 18px;
        @media (max-width: 1800px) {
            font-size: 16px;
        }
        @media (max-width: 1600px) {
            font-size: 14px;
        }
        @media (max-width: 1450px) {
            font-size: 12px;
        }
    } 
}
</style>