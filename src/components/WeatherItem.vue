<template>
    <div class="weather-item">
      <button 
        class="weather-item__button"
        @click="addToFavorite(),deleteFromFavorite(), toggleFavorite()"
        :class="{ 'change-color': isFavorite }"
      >
        <i class="material-icons weather-item__star-icon">star_outline</i> 
      </button>
      <div class="weather-item__image-wrap">
          <img 
            class="weather-item__image" 
            :src="require('../assets/weather-icon/' + weather_info?.weather[0]?.description.toLowerCase().replace(/ /g, '_') + `.png`)" 
            :alt="weather_info?.weather[0]?.description"
          >
      </div>
      <div class="weather-item__conditions">
      <div class="weather-item__temp">{{ Math.round(weather_info?.main?.temp) }} °C</div>
      <div class="weather-item__description weather-item__text">{{ weather_info?.weather[0]?.description }}</div>
      </div>
      <div class="weather-item__city weather-item__text">
        {{ weather_info?.name }},
        {{ weather_info?.sys?.country }}
      </div>
      <div class="weather-item__date weather-item__text">
        {{ today }}
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        isFavorite: false
      };
    },
    props: {
      weather_info: {
        type: [Object, null],
        required: true,
      }
    },
    methods: {
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
          this.addToFavorite();
        } else {
          this.deleteFromFavorite();
        }
      },
      addToFavorite() {
        this.$emit('addToFavorite',this.weather_info);
      },
      deleteFromFavorite() {
        this.$emit('deleteFromFavorite');
      }
    },
    setup() {
      const today = new Date().toLocaleString('en-EN', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });  
      return {
        today
      };
    },
  };
  </script>
  
<style lang="scss">  
.weather-item {
  padding: 0 20px 20px 20px;
  position: relative;
  &__button {
    z-index: 4;
    position: absolute;
    bottom: 30px;
    right: 40px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: $color-main;
    &:hover {
      color: $hover;
    }
  } 
  &__image-wrap {
    position: relative;
    width: 60px;
    height: 60px;
    margin: 20px 0 12px;    
  }
  &__image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }
  &__conditions {
    margin: 0 0 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4)
  }
  &__city{
    font-size: 24px;
    &::before {
      background-image: url('../assets/images/location.svg');
    }                     
  }
  &__temp {
    padding-bottom: 8px;
    font-size: 32px;
  }
  &__text {
    position: relative;
    padding-left: 24px;
    padding-bottom: 8px;
    font-size: 14px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      margin-right: 6px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
  }
  &__description::before {
    background-image: url('../assets/images/weather.svg');
  }
  &__date::before {
    left: 2px;
    width: 15px;
    height: 15px;
    background-image: url('../assets/images/calendar.svg');
  }      
}
.material-icons.weather-item__star-icon {
  font-size: 32px;
}
.change-color {
  color: $hover;
}
</style>