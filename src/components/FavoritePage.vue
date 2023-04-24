<template>
    <div class="favorite">
        <h1 class="favorite__title">Favorite</h1>
        <p 
            v-if="!FAVORITES.length"
            class="favorite__text"
        >
            <span>There are no favorite items...</span>            
            <i class="material-icons favorite__icon">announcement_icon</i>
        </p>
        <favorite-item-wrap
            v-if="FAVORITES.length" 
            :favorite_data="FAVORITES"
        />
    </div>
</template>

<script>
    import FavoriteItemWrap from './FavoriteItemWrap.vue';
    import { mapGetters } from 'vuex';
    export default {
        name: 'FavoritePage',
        components: {
            FavoriteItemWrap
        },
        computed: {
            ...mapGetters([
                'FAVORITES'
            ])
        }
    }
</script>

<style lang="scss">
    .favorite {
        padding: 20px 0;
        &__title {
            text-align: center;
            font-size: 30px;
        }
        &__text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column-reverse;
            padding: 40px;
            gap: 20px;
            text-align: center;
        }
    }
    .material-icons.favorite__icon {
        font-size: 50px;
        text-align: center;
        width: 50px;
    }
</style>