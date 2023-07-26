<template>
    <article class="partnership blur">
        <div class="partnership__wrapper wrapper">
            <div class="partnership__header">
                <h2 class="partnership__title">Партнерская программа</h2>
            </div>
            <div class="partnership__items">
                <div class="partnership__item">
                    <div class="partnership__item-header">
                        <h3 class="partnership__subtitle">Реферальная программа</h3>
                    </div>
                    <div class="partnership__content">
                        <p class="partnership__text">Рекомендуйте нас друзьям и получайте бонусы на ваш личный счет.</p>
                        <p class="partnership__text">Получайте пассивный доход по реферальной программе.</p>
                        <ul class="partnership__list">
                            <li class="partnership__text partnership__text--special">Скопируйте свою реферальную ссылку</li>
                            <li class="partnership__text partnership__text--special">Отправьте друзьям</li> 
                            <li class="partnership__text partnership__text--special">Получайте бонусы за их пополнение депозита</li>
                            <li class="partnership__text partnership__text--special">Получайте бонусы от их прибыли</li>
                        </ul>
                    </div>
                    <div class="partnership__item-footer">
                        <div class="partnership__text-wrap">
                            <div>
                                <p class="partnership__text">Всего приглашено</p>
                                <p class="partnership__text partnership__number">0</p>
                            </div>
                        </div>
                        <div class="partnership__text-wrap">
                            <div>
                                <p class="partnership__text">Партнеры 1 линии</p>
                                <p class="partnership__text partnership__number">0</p>
                            </div>
                        </div>
                        <div class="partnership__text-wrap">
                            <div>
                                <p class="partnership__text">Партнеры 2 линии</p>
                                <p class="partnership__text partnership__number">0</p>
                            </div>
                        </div>
                        <div class="partnership__text-wrap">
                            <div>
                                <p class="partnership__text">Партнеры 3 линии</p>
                                <p class="partnership__text partnership__number">0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="partnership__item">
                    <div class="partnership__item-header">
                        <h3 class="partnership__subtitle">Ваша реферальная ссылка</h3>
                    </div>
                    <div class="partnership__content">
                        <p class="partnership__text">Каждый участник CoinFuze получает уникальную реферальную ссылку, которой можно делиться с друзьями со всего мира. Просто скопируйте эту ссылку и отправьте тем, кого хотите пригласить в CoinFuze.</p>
                        <div class="partnership__code">
                            <span class="partnership__code-text">https://...</span>
                            <span class="partnership__copy-icon icon-content_copy" @click="copyCode"></span>
                        </div>
                        <ul class="partnership__list">
                            <li class="partnership__text">Делитесь партнерской ссылкой</li>
                            <li class="partnership__text">Изучайте статистику переходов по ней</li> 
                            <li class="partnership__text">Следите за тем, сколько людей зарегистрировалось по вашей ссылке</li>
                            <li class="partnership__text">Наблюдайте за ростом вашей прибыли</li>
                        </ul>
                    </div>  
                    <div class="partnership__item-footer">
                        <p class="partnership__text">Всего заработано: 0</p>
                    </div>
                </div>
            </div>
            <div class="partnership__item partnership__item-special">
                <div class="partnership__item-header">
                    <h3 class="partnership__subtitle">Структура вашей партнерской сети</h3>
                </div>
                <div class="partnership__content content-delete">
                    
                </div>
                <div class="partnership__item-footer">
                    <p class="partnership__text">Ваш статус: Лидер</p>
                </div>
            </div>
            <div class="partnership__item partnership__item--special">
                <div class="partnership__item-header">
                    <h3 class="partnership__subtitle">Приглашенные рефералы</h3>
                    <partnership-search/>
                </div>
                <div class="partnership__content">
                    <p class="partnership__text">Посмотрите, кто уже зарегистрировался по вашей партнерской ссылке, и сколько кэшбэка вы получили. Не забывайте, что у нас трехуровневая реферальная программа. Вы получаете бонусы не только за тех, кого непосредственно пригласили в CoinFuze, но и за участников, которых пригласили ваши рефералы.</p>
                    <div class="partnership__text-special">На этом уровне еще нет рефералов</div>
                    <!-- <div class="" v-for="(person, index) in filteredPersons"
                    :key="index">
                        {{ person.name }}
                    </div> -->
                </div>
            </div>
            <partnership-history/>
            <partnership-history-second/>
            <partnership-history-third/>
        </div>
        <footer-item/>
    </article>
</template>
<script>
    import PartnershipSearch from './PartnershipPageItem/PartnershipSearch.vue'
    import PartnershipHistory from './PartnershipPageItem/PartnershipHistory.vue'
    import PartnershipHistorySecond from './PartnershipPageItem/PartnershipHistorySecond.vue'
    import PartnershipHistoryThird from './PartnershipPageItem/PartnershipHistoryThird.vue'
    import FooterItem from '../FooterItem.vue'; 
    import { mapGetters } from 'vuex';
    export default {
        name: 'PartnershipPage',
        components: {
            PartnershipSearch,
            PartnershipHistory,
            PartnershipHistorySecond,
            PartnershipHistoryThird,
            FooterItem
        },
        data() {
            return {
                persons: [
                    {name: 'Анна'},
                    {name: 'Юля'},
                    {name: 'Света'},
                ],
                sortedPersons: [],
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH_QUERY'
            ]),
            filteredPersons() {
                if (this.sortedPersons.length) {
                    return this.sortedPersons
                } else {
                   return this.persons
                }
            }
        },
        methods: {
            copyCode() {
                const codeText = document.querySelector('.partnership__code-text');
                if (codeText) {
                    const tempInput = document.createElement('input');
                    tempInput.value = codeText.textContent;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
            },
            filteredByName(value) {
                this.sortedPersons = this.persons;
                if(value) {
                    this.sortedPersons = this.sortedPersons.filter(function(person) {
                        return person.name.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.sortedPersons = this.persons
                }
            }
        },
        watch: {
            SEARCH_QUERY() {
                this.filteredByName(this.SEARCH_QUERY)
            }
        },
        mounted() {
            this.filteredByName(this.SEARCH_QUERY)
        }
    }
</script>
<style lang="scss">
    .partnership {
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
        &__item {
            background-color: $item-bg;
            width: calc(50% - 10px);
            border-radius: 8px;     
            position: relative;
            padding-bottom: 80px;
            @media (max-width: 1024px) {
                width: 100%;
            }
            &--special {
                width: 100%;
                margin-top: 20px;
                padding-bottom: 0;
            }
        }
        &__item-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid $dark-color;
            padding: 15px;
            min-height: 80px;
            @media (max-width: 1450px) {
                min-height: 77px;
            }
            @media (max-width: 1280px) {
                min-height: 66px;
            }
            @media (max-width: 1024px) {
                min-height: 0;
            }
            @media (max-width: 600px) {
                flex-direction: column;
                align-items: start;
            }
        }
        &__subtitle {       
            font-weight: bold;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
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
        &__items {
            display: flex;
            gap: 20px;
            @media (max-width: 1024px) {
                flex-direction: column;
            }
        }    
        &__content {
            padding: 15px;
        }
        &__list {
            margin-top: 20px;
        }
        &__list &__text {
            margin-left: 15px;
            &--special {
                margin-bottom: 10px;
            }
        }
        &__text-wrap {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (max-width: 600px) {
                width: 50%;
                & div {
                    display: flex;
                    gap: 10px;
                }
            }            
        }
        &__text-wrap:not(:last-child) {
            border-right: 1px solid $dark-color;
        }
        &__text-wrap:nth-child(2) {
            @media (max-width: 600px) {
                border-right: none; 
            }            
        }
        &__number {
            font-weight: bold;
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
            width: 100%;
            background-color: $main-text;
            padding: 15px 20px;
            border-radius: 25px;
            border: 1px solid $dark-color;
            margin-top: 20px;
            @media (max-width: 1280px) {
                padding: 10px 20px;
            }
            @media (max-width: 1024px) {
                width: 70%;
            }
            @media (max-width: 768px) {
                width: 100%;
                gap: 10px;
            }
        }
        &__copy-icon {
            font-size: 20px;
            cursor: pointer;
            @media (max-width: 500px) {
                font-size: 14px;
            }
        }
        &__btn.btn {
            margin: 0;
            width: 100%;
            @media (max-width: 600px) {
                margin-top: 20px;
            }
        }
        &__item-footer {
            position: absolute;
            border-top: 1px solid $dark-color;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            bottom: 0;
            padding: 15px;
            height: 76px;
            @media (max-width: 600px) {
                flex-wrap: wrap;
            }
        }
        &__item-special {
            background-color: $item-special-bg;
            margin-top: 20px;
            width: 100%;
        }
        &__text-special {
            padding: 20px 40px;
            background: $main-btn;
            border-radius: 5px;
            margin-top: 20px;
        }
    }
    .content-delete {
        height: 200px;
    }
</style>