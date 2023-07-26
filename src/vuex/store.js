import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        carouselItems: [
            { image: 'p1.png', image_2: 'p1_1.png', month: '2 месяца', income: '16%', percent: '35%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600', color: '#007977'},
            { image: 'p2.png', image_2: 'p2_2.png', month: '4 месяца', income: '32%', percent: '35%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600' , color:'#905b83'},
            { image: 'p3.png', image_2: 'p3_3.png', month: '6 месяцев', income: '48%', percent: '25%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600' , color:'#a9282b'},
            { image: 'p4.png', image_2: 'p4_4.png', month: '8 месяцев', income: '64%', percent: '25%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600' , color:'#b17763'},
            { image: 'p5.png', image_2: 'p5_5.png', month: '10 месяцев', income: '80%', percent: '20%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600' , color:'#125e8a'},
            { image: 'p6.png', image_2: 'p6_6.png', month: '12 месяцев', income: '96%', percent: '20%', showInfo: true, startdate: '2023.03.28', enddate: '2023.04.29', startcapital: '300', addedcapital: '27,07', finresult: '60', profit: '600' , color:'#5a1e61'},
        ],
        searchQuery: '',
        //activeItems: [],
        showError: false
    },
    mutations: {
        SET_SEARCH_QUERY: (state, value) => {
            state.searchQuery = value;
        },
        // SET_ACTIVE_ITEMS(state, item) {
        //     state.activeItems.push(item);
        // },
        SET_CAROUSEL_ITEMS_TO_STATE: (state, carouselItems) => {
            state.carouselItems = carouselItems;
        },
    },
    actions: {
        GET_SEARCH_QUERY({commit}, value) {
            commit('SET_SEARCH_QUERY', value);
        },
        // ADD_TO_ACTIVE_ITEMS({commit}, item) {
        //     commit('SET_ACTIVE_ITEMS', item)
        // }
    },
    getters: {
        CAROUSEL_ITEMS(state) {
            return state.carouselItems;
        },
        SEARCH_QUERY(state) {
            return state.searchQuery;
        },
        // ACTIVE_ITEMS(state) {
        //     return state.activeItems;
        // }
    }
});

const app = createApp({});
app.use(store);
export default store;
