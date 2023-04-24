<template>
    <div class="wrapper">        
        <router-view/>
    </div>
</template>

<script>
    export default {    
        name: 'CatalogWrapper'        
    }
</script>

<style lang="scss"> 
.wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1300px) {
        width: 90%;
    }
}
</style>