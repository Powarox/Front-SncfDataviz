<template>
    <div id="home">
        <slidebar/>

        <section>
            <div class="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>
            </div>

            <div class="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>
            </div>

            <div class="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>
            </div>

            <div class="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>
            </div>
        </section>
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
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    p {
        margin: 0;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
