<template>
    <div class="forecast">
        <div class="forecast__controls">
            <button 
                class="forecast__button" 
                @click="addWeatherItem"
                :class="{ 'forecast__button--disabled': isMaxItemsReached }"
            >
              <i class="material-icons">add</i>
            </button>
            <button 
                class="forecast__button" 
                @click="removeWeatherItem"
                :class="{ 'forecast__button--disabled': isMinItemsReached }"
            >
                <i class="material-icons">remove</i>
              </button>
        </div>
        <div class="forecast__items">
            <forecast-item
                v-for="(item, index) in weatherItems" 
                :key="index"
                :city="item.city"
                :weather="item.weather"
            />
        </div>
    </div>
</template>
<script>
    import ForecastItem from './ForecastItem.vue';
    import {mapGetters} from 'vuex'
    export default {
        name: 'ForecastPage',
        components: {
            ForecastItem
        },
        data() {
            return {
                weatherItems: [{ city: '', weather: [] }],
                maxWeatherItems: 5,
                minWeatherItems: 1,
                isMaxItemsReached: false,
                isMinItemsReached: true
            }
        },
        computed: {
            ...mapGetters([
                'FORECAST'
            ]),
        },
        methods: {
            addWeatherItem() {
                if (this.weatherItems.length >= this.maxWeatherItems) {
                    this.isMaxItemsReached = true;
                    return;
                }
                this.isMaxItemsReached = false;
                this.weatherItems.push({ city: ''});
            },
            removeWeatherItem() {
                if (this.weatherItems.length <= this.minWeatherItems) {
                    this.isMinItemsReached = true;
                    return;
                }
                this.isMinItemsReached = false;
                this.weatherItems.splice(this.weatherItems.length - 1, 1);
                if (this.weatherItems.length < this.maxWeatherItems) {
                    this.isMaxItemsReached = false;
                }
            }
        }
    }
</script>

<style lang="scss">
    .forecast {
        padding: 20px 0;
        &__controls {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 20px;
        }
        &__button {
            padding: 10px;
            border: none;
            border-radius: 10px;
            background-color: $header-background;
            color: $color-main;
            cursor: pointer;
            outline: none;
            transition: background-color 0.3s;
            &--disabled {
                cursor: not-allowed;
                color: $color-not-allowed;
            }
            &:not(.forecast__button--disabled):hover {
                background-color: $color-main;
                color: $hover;
            }
        }
        &__items {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
        }
    }
</style>