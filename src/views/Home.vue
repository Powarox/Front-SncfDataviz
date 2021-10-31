<template>
    <div id="home">
        <slidebar/>
    </div>
</template>

<script>
    import Slidebar from "../components/SlideBar.vue";

    export default {
        name: 'Home',
        components: {
            Slidebar
        },
    }
</script>

<style lang="css" scoped>
    #home {
        height: 500px;
        padding: 30px;
        background: #FAE2E3;
    }

    p {
        margin: 0;
    }
</style>
