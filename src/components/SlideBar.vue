<template>
    <div id="slide_bar">
        <Feedback @click="delFeed()"/>

        <div class="slide">
            <h1>Filters</h1>
            <section class="btn">
                <button @click="addFeed()">Filter 1</button>
                <button @click="addFeed()">Filter 2</button>
                <button @click="addFeed()">Filter 3</button>
                <button @click="addFeed()">Filter 4</button>
                <button @click="addFeed()">Filter 5</button>
            </section>
        </div>
    </div>
</template>

<script>
    import Feedback from './Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "Slidebar",
        components: {
            Feedback,
        },
        methods: {
            ...mapActions([
                'addMessage', 'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getFeedback', 'getMessage',
            ]),
            addFeed(){
                this.addMessage('En cours de developpement...');
                this.addFeedback();
            },
            delFeed(){
                this.delFeedback();
            },
        }
    }
</script>

<style lang="css" scoped>
    #slide_bar {
        padding: 10px 20px;
        color: var(--main-white-color);
        background: #666;
        background: linear-gradient(0deg, #555, #333);
        /* background: linear-gradient(90deg, var(--main-grey-color), var(--main-green-color)); */
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
</style>
