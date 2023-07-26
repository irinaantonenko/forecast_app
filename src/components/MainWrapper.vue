<template>          
    <router-view/>
</template>

<script>
    export default {    
        name: 'MainWrapper',
        mounted() {
            this.appHeight();
            window.addEventListener('resize', this.appHeight);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.appHeight);
        },
        methods: {
            appHeight() {
            const doc = document.documentElement;
            doc.style.setProperty('--app-height', `${window.innerHeight}px`);
            },
        } 
    }
</script>

<style lang="scss"> 
:root {
    --app-height: 100%;
}

</style>