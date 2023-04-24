<template>
  <header-item></header-item>
  <main-wrapper></main-wrapper>
</template>

<script>
  import HeaderItem from './components/HeaderItem.vue';
  import MainWrapper from './components/MainWrapper.vue';
  export default {
    name: 'App',
    components: {
      HeaderItem,
      MainWrapper
    }
  }
</script>

<style lang="scss">
  #app {
    background: $color-background; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
</style>
