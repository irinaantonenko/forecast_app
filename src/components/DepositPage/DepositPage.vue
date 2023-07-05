<template>
    <article class="deposit blur">
        <div class="deposit__wrapper wrapper">
            <div class="deposit__item"></div>
            <div class="deposit__item"></div>
            <deposit-history/>
        </div>
        <footer-item/>
    </article>
</template>
<script>
    import DepositHistory from './DepositPageItem/DepositHistory.vue'
    import FooterItem from '../FooterItem.vue'; 
    export default {
        name: 'DashboardPage',   
        data() {
            return {
                showInfo: true
            };
        },
        components: {
            DepositHistory,
            FooterItem
        },
    }
</script>
<style lang="scss">
    .deposit {
        &__item {
            background-color: $item-bg;
            width: 50%;
        }
    }
</style>