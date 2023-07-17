<template>
    <div class="footer">
        <div class="footer__item">
            <p class="footer__text">© 2023 CoinFuze. Все права защищены.</p>
        </div>
        <div class="footer__item">
            <a class="footer__link" href="#">Условия использования</a>
            <a class="footer__link" href="#">Политика конфиденциальности</a>
            <a class="footer__link" href="#">Партнерская программа</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterItem',        
    };    
</script>

<style lang="scss">
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        color: $main-text;
        background-color: $dark-color;
        padding: 0 50px 0 396px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 2;
        @media (max-width: 1800px) {
            padding: 0 30px 0 310px;
        }
        @media (max-width: 1450px) {
            padding: 0 30px 0 280px;
            position: unset;
        }
        @media (max-width: 1270px) {
            padding: 0 30px;
        }
        @media (max-width: 1100px) {
            flex-direction: column-reverse;
            justify-content: space-around;
            align-items: flex-start;
            padding: 20px 30px;
            height: 120px;
        }
        @media (max-width: 700px) {
            height: 200px;
        }
        @media (max-width: 375px) {
            padding: 20px 10px;
        }
        &__item {
            display: flex;
            &:last-child {
                @media (max-width: 700px) {
                    flex-direction: column;
                }
            }
        }
        &__link {
            color: $main-text;
            text-decoration: none;
            padding: 0 10px;
            &:last-child {
                padding-right: 0;
            }
            &:first-child {
                padding-left: 0;
            }
            &:hover {
                opacity: 0.8;
            }
            &:not(:last-child) { 
                border-right: 1px solid $main-text;
                @media (max-width: 700px) {
                    border: none;
                }
            }
            @media (max-width: 700px) {
                padding: 5px 0;
            }
        }
        &__text {
            @media (max-width: 700px) {
                padding-top: 10px;
            }
        }
    }
</style>