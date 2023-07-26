<template>
    <article class="dashboard">
        <header-item/>
        <sidebar-item/>
        <div class="dashboard__wrapper blur wrapper">
            <div class="dashboard__header">
                <h2 class="dashboard__title">Панель управления</h2>
                <!-- <p class="dashboard__time">Последний вход: 13.05.2022</p> -->
            </div>
            <div class="dashboard__info" v-if="CLIENT_AREA && CLIENT_AREA.results && CLIENT_AREA.results[0].email_verify === false">
                <div class="dashboard__info-content">
                    <span class="icon-info dashboard__icon-info"></span>
                    <div class="dashboard__info-wrap">
                        <h3 class="dashboard__info-title">Ваша регистрация почти завершена</h3>
                        <p class="dashboard__info-text">Перед инвестированием необходимо завершить процесс регистрации, заполнив свои личные данные.</p>
                    </div>                
                </div>
                <button class="btn dashboard__info-btn" @click="completeRegistration">Завершить регистрацию</button>
            </div>
            <div class="dashboard__items">
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Всего средств</h3>
                    <div class="dashboard__finance-total dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text dashboard__finance-text--special">2240 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard__finance-free dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text">470 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                        <p class="dashboard__finance-status">Свободных средств</p>
                    </div>
                    <div class="dashboard__finance-active dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text">1700 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                        <p class="dashboard__finance-status">Активных средств</p>
                    </div>
                </div>
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Общая прибыль</h3>
                    <div class="dashboard__finance-total dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text dashboard__finance-text--special">330 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Инвестиционные планы</p>
                        <p>1</p>                    
                    </div>
                    <div class="dashboard__text--special">
                        <p>Активные инвестиции</p>
                        <p>247,45</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Участник с</p>
                        <p>03.08.2022</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Выведенные средства</p>
                        <p>0.00</p>
                    </div>
                </div>
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Инвестированные средства</h3>
                    <div class="dashboard__finance-total dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text dashboard__finance-text--special">1770 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Общая прибыль планов</p>
                        <p>230</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Активных планов</p>
                        <p>1</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Закрытых планов</p>
                        <p>3</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Планов на реинвестициях</p>
                        <p>1</p>
                    </div>
                </div>
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Партнерская программа</h3>
                    <div class="dashboard__finance-total dashboard__text">
                        <div class="dashboard__finance-item">
                            <p class="dashboard__finance-text dashboard__finance-text--special">17,45 USTD</p> 
                            <div class="dashboard__finance-wrap">
                                <img class="dashboard__finance-img" src="../../assets/images/tether.png" alt="ustd">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard__text--special">
                        <p>К-ство партнеров</p>
                        <p>17</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Партнеров 1-й линии</p>
                        <p>3</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Партнеров 2-й линии</p>
                        <p>6</p>
                    </div>
                    <div class="dashboard__text--special">
                        <p>Партнеров 3-й линии</p>
                        <p>8</p>
                    </div>
                </div>
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Уведомления</h3>
                    <div class="dashboard__notification-text">
                        <p class="dashboard__notification-time">08:01</p>
                        <p class="dashboard__notification-active">Регистрация</p>
                        <p>Вы зарегистрировалить в личном кабинете успешно</p>
                    </div>
                    <div class="dashboard__notification-text">
                        <p class="dashboard__notification-time">09:23</p>
                        <p class="dashboard__notification-active">Пополнение депозита</p>
                        <p>Транзакция по пополнению счета прошла успешно</p>
                    </div>
                    <div class="dashboard__notification-text">
                        <p class="dashboard__notification-time">10:45</p>
                        <p class="dashboard__notification-inactive">Активация</p>
                        <p>Вам нужно активировать ваш аккаунт, чтобы продолжить работу</p>
                    </div>
                </div>
                <div class="dashboard__item">
                    <h3 class="dashboard__subtitle dashboard__text">Новости</h3>
                    <div class="dashboard__news">
                        <p class="dashboard__news-time">18 Февраль 2022</p>
                        <p class="dashboard__news-title">Stripe в сотрудничестве с Twitter вновь займется развитием криптоплатежей</p>
                        <p class="dashboard__news-text">Платежный сервис Stripe в сотрудничестве с Twitter вновь займется развитием криптовалютных платежей. Один из самых дорогих стартапов в мире позволит пользователям Twitter получать за свой...</p>
                        <router-link class="btn dashboard__btn" to="/news">Читать все новости</router-link>
                    </div>
                </div>
                <div class="dashboard__item dashboard__item--special">
                    <h3 class="dashboard__subtitle dashboard__text">График алгоритма, %</h3>
                    <div class="dashboard__chart">
                        <line-chart/>
                    </div>
                </div>
            </div>
        </div>
      <footer-item/>
    </article>
  </template>
  
<script>
    import {mapActions, mapGetters} from 'vuex'
    import FooterItem from '../FooterItem.vue';
    import LineChart from '../LineChart.vue'
    import HeaderItem from '../HeaderItem.vue';
    import SidebarItem from '../SidebarItem.vue';
    export default {
        name: 'DashboardPage',   
        data() {
            return {
                showInfo: true
            };
        },
        components: {
            FooterItem,
            LineChart,
            HeaderItem,
            SidebarItem,
        },
        computed: {
            ...mapGetters([
                'CLIENT_AREA',
            ])
        },
        methods: {
            ...mapActions([
                'GET_CLIENT_AREA_FROM_API',
                'EMAIL_INVITATION'
            ]),
            completeRegistration() {
                this.EMAIL_INVITATION()
                .then(() => {
                // Handle the response from the API if needed
                console.log('API Response:');
                })
                .catch((error) => {
                // Handle API request error
                console.error('API Error:', error);
                });
            }
        },
        async mounted() {
            await this.GET_CLIENT_AREA_FROM_API();
            if (this.CLIENT_AREA) {
                console.log('Data arrived!');
            }
        }
    };    
</script>
  
<style lang="scss">
  .dashboard {
    width: 100%;
    height: auto;
    overflow: auto; 
    min-height: var(--app-height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
    }
    &__item {
        filter: $filter;
        background-color: $item-bg;
        width: calc((100% - 60px)/4);
        min-width: 300px;
        min-height: 350px;
        border-radius: 8px;        
        @media (min-width: 2560px) {
            min-height: 550px; 
        }
        @media (max-width: 1800px) {
            min-height: 200px;  
        }
        @media (max-width: 1710px) {   
           min-width: 280px;
        }
        @media (max-width: 1550px) {   
            min-width: 260px;
        }
        @media (max-width: 1450px) {
            min-width: 200px;
        }
        @media (max-width: 1024px) {
            min-width: 300px;
            flex: 1;
        }
        &--special {
            width: calc((100% - 20px)/2); 
            background-color: $item-special-bg;
            @media (max-width: 900px) {
                min-width: 300px;   
            }
        }
    }
    &__text {
        padding: 15px;
        min-height: 90px; 
        &:not(:last-child) {
            border-bottom: 1px solid $dark-color;
        }
        &--special {
            padding: 10px;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (min-width: 2560px) {
                min-height: 100px;  
            }
            @media (max-width: 1800px) {
                min-height: 41px;  
            }             
            @media (max-width: 1450px) {
                min-height: 38px;
            }    
        }
        &--special:not(:last-child) {            
            border-bottom: 1px solid $dark-color;
        }        
        @media (min-width: 2560px) {
            min-height: 100px;  
        }
        @media (max-width: 1800px) {
            min-height: 82px;  
        }      
        @media (max-width: 1450px) {
            min-height: 76px;
        }     
        @media (max-width: 1280px) {
            padding: 10px;
        }
    }
    &__notification-text {
        padding: 15px;
        &:not(:last-child) {
            border-bottom: 1px solid $dark-color;
        }
    }
    &__notification-time {
        font-size: 12px;
        text-align: end;
        @media (max-width: 1450px) {
            font-size: 8px;
        }
    }
    &__notification-active {
        color: $green;
        font-weight: bold;
    }
    &__notification-inactive {
        color: $inactive;
        font-weight: bold;
    }
    &__subtitle {       
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
        min-height: 65px;
        @media (min-width: 2560px) {
            min-height: 100px;  
        }
        @media (max-width: 1800px) {
            font-size: 18px;
        }
        @media (max-width: 1600px) {
            font-size: 16px;
            min-height: 50px;
        }
        @media (max-width: 1450px) {
            font-size: 14px;
            min-height: 42px;
        } 
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
        &--special { 
            font-size: 25px;
            font-weight: bold;
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
    }
    &__finance-item {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__finance-wrap {
        width: 30px;
        height: 30px;
        position: relative;
        @media (max-width: 1280px) {
            width: 20px;
            height: 20px;
        }
    }
    &__finance-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
    &__finance-total {
        
        @media (max-width: 1800px) {
            min-height: 52px;  
        }
    }
    &__finance-free {
        min-height: 100px;
        @media (max-width: 1800px) {
            min-height: 82px;  
        }         
        @media (max-width: 1450px) {
            min-height: 76px;
        }    
    }
    &__news {
        padding: 15px;
    }
    &__news-time {
        font-size: 12px;
        font-weight: bold;
    }
    &__news-title {
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
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
    &__btn.btn {
        margin-top: 30px;
        @media (min-width: 2560px) {
            margin-top: 130px;  
        }
    }
    &__chart {
        @media (max-width: 550px) {
            overflow: auto;   
        }
    }
    &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: $main-btn;
        border-radius: 8px;
        padding: 20px 30px;
        margin-bottom: 20px;
        gap: 20px;
        @media (max-width: 1600px) {
            padding: 10px 20px;
        }
        @media (max-width: 750px) {
            flex-direction: column;
            padding: 20px;
        }        
        @media (max-width: 375px) {
            min-width: 300px;
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
    &__info-btn.btn {
        margin: 0;
        max-width: none;
        min-width: 245px;
        @media (max-width: 1800px) {
            min-width: 220px;
        }
        @media (max-width: 1450px) {
            min-width: 180px;
        }
    }
}  
</style>
  