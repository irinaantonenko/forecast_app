<template>
    <div class="favorite-item-wrapper">        
        <weather-item            
            v-for="(item, index) in favorite_data"
            :key="item.id"
            :weather_info="item"
            @deleteFromFavorite="deleteFromFavorite(index)"
        />
    </div>
</template>

<script>    
    import WeatherItem from './WeatherItem.vue';
    import { mapActions } from 'vuex';
    export default {    
        name: 'FavoriteItemWrap',
        components: {
            WeatherItem
        },
        props: {
            favorite_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },        
        methods: {
            ...mapActions ([
                'DELETE_FROM_FAVORITE'
            ]),
            deleteFromFavorite(index) {
                this.DELETE_FROM_FAVORITE(index)
            }
        }
    }
</script>

<style lang="scss">

</style>