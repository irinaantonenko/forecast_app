<template>
    <div class="header">
        <router-link to="/">
            <img class="header__logo" src="../assets/images/sun.svg" alt="Логотип">
        </router-link>
        <nav>
            <ul class="header__list">
                <li :class="{ 'active': isCurrentRoute('/') }">
                    <router-link @click="activateMenu('/')" class="link" to="/">Home</router-link>
                </li>
                <li :class="{ 'active': isCurrentRoute('/favorite') }">
                    <router-link @click="activateMenu('/favorite')" class="link link--special header__added-wrap" to="/favorite">
                        Favorites
                        <div 
                            v-if="FAVORITES.length"
                            class="header__added"
                        >
                            {{ FAVORITES.length }}
                        </div>   
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'HeaderItem', 
        methods: {
            isCurrentRoute(route) {
                return this.$route.path === route;
            },
            activateMenu(route) {
                const menuItems = document.querySelectorAll('nav ul li');
                menuItems.forEach(item => {
                item.classList.remove('active');
            });
            const activeItem = document.querySelector(`nav ul li a[href='${route}']`).parentNode;
            activeItem.classList.add('active');
            }
        },
        computed: {
            ...mapGetters([
                'FAVORITES'
            ])
        }
    }
</script>

<style lang="scss">
    .header {
        border-bottom: 1px solid $border;
        display: flex;
        background-color: $header-background;
        &__logo {
            width: 100px;
            height: 100%;
            border-right: 1px solid $border;
            padding: 0 15px;
        }
        &__list {
            display: flex;
        }
        &__added-wrap {
            position: relative;
        }
        &__added {
            position: absolute;
            background-color: $hover;
            top: 5px;
            right: 5px;
            color: $color-main;
            padding: 2px 6px;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            text-align: center;
        }
    }
</style>