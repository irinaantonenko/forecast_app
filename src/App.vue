<template>
  <header-item/>
  <sidebar-item/>  
  <main-wrapper/>  
</template>

<script>
  import HeaderItem from './components/HeaderItem.vue';
  import SidebarItem from './components/SidebarItem.vue';
  import MainWrapper from './components/MainWrapper.vue';
  export default {
    name: 'App',
    components: {
      HeaderItem,
      SidebarItem,
      MainWrapper
    },
    data() {
      return {
        isSidebarOpen: false,
      };
    },
  }
</script>

<style lang="scss">
  #app {
  min-height: 100vh;
  min-height: var(--app-height);
  height: auto;
  overflow: hidden;  
  .page-blur {
    filter: blur(4px);
    pointer-events: none;
    transition: filter 0.3s ease;
  }
}
</style>
