<template>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

    <div id="slide_bar">
        <div class="slide">
            <h1>Filters</h1>
            <section class="btn">
                <button @click="show = !show">Filter 1</button>
                <button @click="show = !show">Filter 2</button>
                <button @click="show = !show">Filter 3</button>
                <button @click="show = !show">Filter 4</button>
                <button @click="show = !show">Filter 5</button>
            </section>
        </div>
        <div class="feedback" @click="show = !show">
            <transition name="fade">
                <p v-if="show"><i class="fas fa-times"></i> Fonction en developpement</p>
            </transition>
        </div>
        <div class="" v-if="show">
            {{ check() }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slidebar",
        data() {
            return {
                show: false,
            }
        },
        methods: {
            check() {
                setTimeout(() => {
                    this.show = false
                }, 2500);
            }
        }
    }
</script>

<style lang="css" scoped>
    #slide_bar {
        padding: 10px 20px;
        color: var(--main-white-color);
        background: linear-gradient(90deg, var(--main-grey-color), var(--main-green-color));
    }

    .slide {
        width: 190px;
        position: fixed;
    }

    h1 {
        margin: 5px 0;
        border-bottom: 5px solid var(--main-red-color);
    }

    .btn {
        display: grid;
        grid-template-columns: 1fr;
    }

    .btn button {
        margin: 5px 5px;
        padding: 5px 7px;
        color: var(--main-blue-color);
        background: var(--main-white-color);
        border: 2px solid var(--main-white-color);
        border-radius: 5px;
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;
    }

    .btn button:hover {
        color: var(--main-white-color);
        background: var(--main-red-color);
        border: 2px solid var(--main-red-color);
    }

    .feedback {
        width: fit-content;
        padding: 0 10px;
        position: fixed;
        top: 12%;
        right: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--main-white-color);
        background: var(--main-dark-blue-color);
        border-radius: 10px;
        font-weight: bold;
        font-family: sans-serif;
        cursor: pointer;
    }

    .feedback i {
        color: var(--main-red-color);
        padding: 0 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>
