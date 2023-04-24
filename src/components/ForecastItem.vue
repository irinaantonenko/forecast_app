<template>
    <div class="forecast-item"> 
        <div class="forecast-item__search">
            <i 
                class="material-icons forecast-item__icon"
                @click="GET_FORECAST_FROM_API"
                @input="updateCity"
            >
                search
            </i>
            <input 
                v-model="city" 
                type="text" 
                class="forecast-item__input"
                @keyup.enter="GET_FORECAST_FROM_API" 
                @input="updateCity"                
            >
        </div>                 
        <div v-if="isError" class="forecast-item__error">
            <div class="forecast-item__error-title">Oooops! Something went wrong</div>
            <div v-if="FORECAST?.message" class="forecast-item__error-message">{{ FORECAST.message.toUpperCase() }}</div>
            <i class="material-icons forecast-item__error-icon">error_outline</i>
        </div>
        <weather-item   
            v-for="forecast in FORECAST"
            :key="forecast.id"
            :weather_info="FORECAST"
            @addToFavorite="addToFavorite" 
            v-else>
        </weather-item>
    </div>
</template>
<script>
    import WeatherItem from './WeatherItem.vue';
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'ForecastItem',
        components: {
            WeatherItem
        },
        data() {
            return {
                city: 'Kyiv',
            };
        },
        computed: {
            ...mapGetters([
                'FORECAST',
                'SHOW_MODAL'
            ]),
            isError() {
                return this.FORECAST?.cod !== 200;
            }
        },
        methods: {
            ...mapActions([
                'GET_FORECAST_FROM_API',
                'ADD_TO_FAVORITE'
            ]),
            updateCity(event) {
                this.$store.commit('SET_CITY_TO_STATE', event.target.value)
            },
            addToFavorite(data) {
                this.ADD_TO_FAVORITE(data);
            }
        },
        async mounted() {
            await this.GET_FORECAST_FROM_API();
            if (this.FORECAST) {
                console.log('Data arrived!');
            }
        }
    }
</script>

<style lang="scss">    
    .forecast-item {            
        width: 350px;
        height: 400px;
        box-shadow: 0 0 5px 5px rgba(247, 236, 222, 0.5);
        border-radius: 20px;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;  
        position: relative;         
        &__search {
            position: relative;
            display: inline-block;
            width: 90%;
            margin: 0 auto;
            padding: 20px 0;
        }
        &__icon {
            position: absolute;
            top: 20px;
            right: 10px;
            transform: translateY(50%);
            cursor: pointer;
        }
        &__input {
            width: 100%;
            padding: 16px;
            color: $color-main;
            background-color: $header-background;
            border-radius: 20px;
            border: none;
            outline: none;
        }
        &__error {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        &__error-title {
            font-size: 18px;
            font-weight: 700;
            margin: 0 auto;
            text-align: center;
        }
        &__error-message {
            padding-top: 10px;
            font-size: 13px;
            margin: 0 auto;
            text-align: center;
        }
        &__error-icon {
            width: 50px;
        }
    }
    .material-icons.forecast-item__icon {        
        font-size: 26px;
    }
    .material-icons.forecast-item__error-icon { 
        font-size: 50px;
    }
    
</style>