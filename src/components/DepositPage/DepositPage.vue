<template>
    <article class="deposit blur">
        <div class="deposit__wrapper wrapper">
            <div class="deposit__header">
                <h2 class="deposit__title">Депозит</h2>
            </div>
            <div class="deposit__main">
                <div class="deposit__item" v-if="showInfo">
                    <h3 class="deposit__subtitle">Внесите депозит на свой счет и начните зарабатывать прямо сейчас</h3>
                    <div class="deposit__content">
                        <p class="deposit__text">Торговля криптовалютами имеет ряд преимуществ, которые мы можем использовать для получения дохода:</p>
                        <ul class="deposit__list">
                            <li class="deposit__text">Высокая волатильность активов – зарабатывать можно как на росте, так и на спаде рынка</li>
                            <li class="deposit__text">Круглосуточная торговля – криптовалютный рынок работает 24/7, потому мы можем беспрерывно генерировать для вас прибыль</li> 
                            <li class="deposit__text">Отсутствие зависимости от банковской системы – вы пополняете счет криптовалютой и выводите выводите прибыль на криптовалютный кошелек</li>
                            <li class="deposit__text">Высокая динамика – за короткий период возможно получить высокую прибыль</li>
                        </ul>
                        <button class="deposit__btn btn" @click="mergeItems">Пополнить счет</button>
                    </div>
                </div>
                <div class="deposit__item" v-if="showInfo">
                    <h3 class="deposit__subtitle">Зарабатывайте вместе с нами</h3>
                    <div class="deposit__content">
                        <div class="deposit__text-special">Ежемесячная прибыль – 8,5%</div>
                        <div class="deposit__text-special">Годовая прибыль – 107,7%</div> 
                        <div class="deposit__text-special">Полностью автоматизированная система</div>
                        <div class="deposit__text-special deposit__text-margin">Возможность реинвестирования</div> 
                        <p class="deposit__text">После пополнения депозита вы сможете пользоваться всеми преимуществами сотрудничества с CoinFuze.</p>
                    </div>  
                </div>
                <div v-else class="deposit__item deposit__item-merged">
                    <div class="deposit__subtitle">
                        <span @click="backItems" class="deposit__arrow-icon icon-arrow-left"></span>
                        <img class="deposit__finance-img" src="../../assets/images/tether.png" alt="ustd">
                        Tether
                    </div>
                    <div class="deposit__content">
                        <div class="deposit__copy">
                            <img src="../../assets/images/qr.svg" alt="" class="deposit__copy-img">
                            <div class="deposit__copy-text">
                                <p class="deposit__text">Депозит на этот USDT TRC 20  </p>
                                <div class="deposit__code">
                                    <span class="deposit__code-text">bc1q9hk6rde3enp5p8t9tzfk9xrddgl623gjny6azt</span>
                                    <span class="deposit__copy-icon icon-content_copy" @click="copyCode"></span>
                                </div>
                            </div>
                        </div>
                        <div class="deposit__form">
                            <input class="deposit__input" type="number" id="amount" placeholder="Сумма пополнения" required>
                            <input class="deposit__input" type="text" id="transactionId" placeholder="ID транзакции" required>
                            <button class="deposit__form-btn btn" @click="backItems">Отправить</button>
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
    import DepositHistory from './DepositPageItem/DepositHistory.vue'
    import FooterItem from '../FooterItem.vue'; 
    export default {
        name: 'DepositPage',   
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
            },
            copyCode() {
                const codeText = document.querySelector('.deposit__code-text');
                if (codeText) {
                    const tempInput = document.createElement('input');
                    tempInput.value = codeText.textContent;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
            }
        },
        components: {
            DepositHistory,
            FooterItem
        },
    }
</script>
<style lang="scss">
    .deposit {
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
                min-height: 335px
            }
            @media (min-width: 1450px) {
                min-height: 385px;
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
        &__btn.btn {
            margin: 15px 0 0;
            width: 100%;
            @media (max-width: 700px) {
                margin: 15px auto 0;
            }
        }
        &__form-btn.btn {
            margin: 0;
            width: 100%;
        }
        &__text-special {   
            background-color: $bg-special;
            margin-bottom: 15px;
            padding: 5px 20px;
            border-radius: 15px;
        }
        &__text-margin {
            margin-bottom: 30px;
        }
        &__arrow-icon {
            cursor: pointer;
        }
        &__copy {
            display: flex;
            gap: 20px;
            @media (max-width: 700px) {
                flex-direction: column;
                align-items: center;
            }
        }
        &__copy-img {
            width: 150px;
            @media (max-width: 768px) {
                width: 100px;
            }
        }
        &__copy-text {
            display: flex;
            flex-direction: column;
            gap: 20px;
            @media (max-width: 700px) {
                align-items: center;
            }
        }
        &__copy-text &__text {
            font-size: 12px;
        }
        &__code {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 450px;
            background-color: $main-text;
            padding: 15px 20px;
            border-radius: 25px;
            border: 1px solid $dark-color;
            @media (max-width: 1280px) {
                padding: 10px 20px;
            }
            @media (max-width: 700px) {
                width: 350px;
                gap: 10px;
            }
            @media (max-width: 450px) {
                font-size: 10px;
                width: 300px;
            }
        }
        &__copy-icon {
            font-size: 20px;
            cursor: pointer;
            @media (max-width: 500px) {
                font-size: 14px;
            }
        }
        &__form {
            padding-top: 20px;
            display: flex;
            align-items: center;
            gap: 30px;
            @media (max-width: 700px) {
                flex-direction: column;
                gap: 20px;
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
            max-width: 220px;
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
                max-width: 350px;
                font-size: 12px;
            }
            @media (max-width: 450px) {
                font-size: 10px;
                width: 300px;
            }
        }
        
    }
</style>