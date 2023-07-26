import { createApp } from 'vue';
import { createStore } from 'vuex';
import { BASE_API_URL } from './index.js';
import Cookies from 'js-cookie';
import Form from 'vform'
import router from '../router/router.js'


const store = createStore({
    state: {
        searchQuery: "",
        clients: null,
        countries: null,
        formRegistration: new Form({
            name: "",
            login: "",
            phone: "",
            email: "",
            password: "",
            invitation: "",
            country: "Country",
          }),
        formLogin: new Form({
        login: "",
        password: "",
        }),
        token: null,
        headers : {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        },
        errorMessage: "",
        currentURL: null,
    },
    mutations: {
        SET_SEARCH_QUERY: (state, value) => {
            state.searchQuery = value;
        },
        SET_CLIENT_AREA_TO_STATE: (state, clients) => {
            state.clients = clients;
        },
        SET_COUNTRIES: (state, countries) => {
            state.countries = countries;
        },
        SET_FORM_REGISTER: (state, formRegistration) => {
            state.formRegistration = formRegistration;
        },
        SET_FORM_LOGIN: (state, formLogin) => {
            state.formLogin = formLogin;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            state.headers['TOKEN'] = token; // Set the token inside headers object
            Cookies.set('token', token);
        },
        SET_HEADERS(state, headers) {
            state.headers = headers;
        },
        SET_ERROR(state, errorMessage) {
            state.errorMessage=errorMessage;
        },
        SET_CURRENT_URL(state, url) {
            state.currentURL = url;
        },
    },
    actions: {
        GET_SEARCH_QUERY({commit}, value) {
            commit('SET_SEARCH_QUERY', value);
        },
        GET_HEADERS: ({commit}, headers) => {
            commit('SET_HEADERS', headers);
            //Cookies.set('headers', headers);
        },
        GET_TOKEN: ({commit}, token) => {
            commit('SET_TOKEN', token);
        },
        GET_ERROR: ({commit}, errorMessage) => {
            commit('SET_ERROR', errorMessage)
        },
        async GET_CLIENT_AREA_FROM_API({commit, state}) {
            try {    
                let headers = state.headers;
                const response = await fetch(`${BASE_API_URL}ca_clients/`, {headers});
                if (response.status === 200) {
                    const clients = await response.json();
                    commit('SET_CLIENT_AREA_TO_STATE', clients);
                console.log('client area data', clients)
                return clients; 
                } else {
                    if(response.status === 403) {
                        console.log('')
                    }
                    await this.dispatch('LOGOUT_USER'); 
                    router.push('/login'); 
                    return null; 
                }
            } catch (error) {
                //console.error('cach error',error); 
            }
        },
        async GET_COUNTRIES({ commit }) {
            try {
                const headers = { 'Content-Type': 'multipart/form-data' };
                const response = await fetch(`${BASE_API_URL}ca_registration/`, {headers});
                const countries = await response.json();
                commit('SET_COUNTRIES', countries);
                return countries;
            } catch (error) {
                console.log(error);
            }
        },
        async LOGOUT_USER({ commit, state }) {
            try {
                const headers = state.headers;
                const response = await fetch(`${BASE_API_URL}ca_logout/`, { headers, method: 'GET' });
                if (response.ok) {
                    commit('SET_TOKEN', null);
                    Cookies.remove('token');
                }
            } catch (error) {
                console.error('Logout error:', error);
            }
        },
        GET_CURRENT_URL({ commit }, url) {
            commit('SET_CURRENT_URL', url);
        },
        async EMAIL_INVITATION({state}) {
            try {
                const headers = state.headers;
                const response = await fetch(`${BASE_API_URL}email_verify/`, { headers, method: 'GET' });
                if (response.ok) {
                   console.log(response.ok)
                }
            } catch (error) {
                console.error('error:', error);
            }
        },
        async EMAIL_ACTIVATION({state }) {
            try {
                const headers = state.headers;
                const currentURL = state.currentURL;
                const response = await fetch(`${BASE_API_URL}${currentURL}`, { headers, method: 'GET' });
                if (response.ok) {
                   console.log(response.ok)
                }
            } catch (error) {
                console.error('error:', error);
            }
        },
    },
    getters: {
        SEARCH_QUERY(state) {
            return state.searchQuery;
        },
        CLIENT_AREA(state) {
            return state.clients;
        },
        HEADERS(state) {
            return state.headers;
        },
        COUNTRIES(state) {
            return state.countries;
        },
        FORM_REGISTRATION(state) {
            return state.formRegistration;
        },
        FORM_LOGIN(state) {
            return state.formLogin;
        },
        TOKEN(state) {
            return state.token;
        },
        ERROR_MESSAGE(state) {
            return state.errorMessage;
        },
        CURRENT_URL(state) {
            return state.currentURL;
        }
    }
});

const app = createApp({});
app.use(store);
export default store;
