<template>
    <form class="partnership-search">
        <span 
            class="partnership-search__icon-search icon-search"
            @click="searchByName(searchQuery)"
        >
        </span>
        <input 
            class="partnership-search__input"
            type="text" 
            name="query" 
            v-model="searchQuery"
            placeholder="Поиск..."
        >
        <span 
            class="partnership-search__icon-clear icon-close"
            @click="clearSearch"
        >
        </span>
    </form>
</template>
<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'PartnershipSearch',
        data() {
            return {
                searchQuery: ''
            }
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_QUERY'
            ]),
            searchByName(value) {
                this.GET_SEARCH_QUERY(value)
            },
            clearSearch() {
                this.searchQuery = '';
                this.GET_SEARCH_QUERY();
            }
        }
    }
</script>
<style lang="scss">
    .partnership-search {
        position: relative;        
        @media (max-width: 600px) {
            margin-top: 20px;
        }
        &__icon-search, &__icon-clear {
            position: absolute;
            cursor: pointer;
            top: 15px;
            color: $dark-color;
            font-size: 16px;
            @media (max-width: 1280px) {
                top: 10px;
                font-size: 14px;
            }
            &:hover {
                opacity: 0.7;
            }
        }
        &__icon-search {
            left: 15px;
        }
        &__icon-clear {
            right: 15px;
        }
        &__input {
            border: 1px solid $dark-color;
            padding: 15px 30px;
            padding-left: 40px;
            border-radius: 30px;
            width: 300px;
            outline: none;
            color: $dark-color;
            &:focus-within, &:hover {
              border: 1px solid $green;
              outline: 0;
            }
            @media (max-width: 1280px) {
                padding: 10px 20px;
                padding-left: 40px;
            }
            @media (max-width: 1024px) {
                width: 180px;
            }
        }
    }
</style>