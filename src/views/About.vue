<template>
    <div id="about">
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

        <img src="../assets/logo.png" alt="ici">
        <p>description du projet</p>

        <div class="test">
            <button @click="show = !show">
                Permuter
            </button>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
            >
            <p v-if="show">bonjour</p>
            </transition>
        </div>

        <div id="demo">
          <button v-on:click="show = !show">
            Permuter
          </button>
          <transition name="fade">
            <p v-if="show">bonjour</p>
          </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                show: true,
            }
        },
        components: {

        },
    }
</script>

<style lang="css" scoped>
    #about {
        padding: 30px;
    }

    p {
        margin: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .test {
        width: 200px;
        height: 100px;
        background: var(--main-green-color);
    }
</style>
