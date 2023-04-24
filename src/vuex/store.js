import { createApp } from 'vue';
import { createStore } from 'vuex';
import { API_KEY, BASE_URL } from './index.js';

const store = createStore({
    state: {
        weather: null,
        city: 'Kyiv',
        favorites: [] 
    },
    mutations: {
        SET_CITY_TO_STATE: (state, city) => {
            state.city = city;
        },
        SET_FORECAST_TO_STATE: (state, weather) => {
            state.weather = weather;
        },
        SET_FAVORITE: (state, weather) => {
            if(state.favorites.length < 5) {
              let isItemExists = false;
              state.favorites.forEach(function(item) {
                if (item.id === weather.id) {
                  isItemExists = true;
                }
              })
              if(!isItemExists) {
                state.favorites.push(weather);
              } 
            } 
        },
        REMOVE_FROM_FAVORITE: (state, index) => {
        state.favorites.splice(index, 1)
        }
    },
    actions: {
        async GET_FORECAST_FROM_API({ state, commit }) {
            try {
                const response = await fetch(`${BASE_URL}?q=${state.city}&units=metric&appid=${API_KEY}`);
                const data = await response.json();
                commit('SET_FORECAST_TO_STATE', data);
                return data; 
            } catch (error) {
                console.log(error);
            }
        },
        ADD_TO_FAVORITE({commit}, weather) {
            commit('SET_FAVORITE', weather)
        },
        DELETE_FROM_FAVORITE({commit}, index) {
            commit('REMOVE_FROM_FAVORITE', index)
        }
    },
    getters: {
        FORECAST(state) {
            return state.weather;
        },
        FAVORITES(state) {
            return state.favorites;
        }
    }
});

const app = createApp({});
app.use(store);
export default store;
