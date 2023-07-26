<template>
    <div class="">
        <header-item/>
        <sidebar-item/>
    </div>
</template>
<script>
    import HeaderItem from '../HeaderItem.vue';
    import SidebarItem from '../SidebarItem.vue';
    export default {
        name: 'ProfilePage',
        components: {
            HeaderItem,
            SidebarItem,
        },
    }
</script>
<style lang="scss">

</style>