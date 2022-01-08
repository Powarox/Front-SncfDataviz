<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <div class="nav">
            <div class="page">
                <router-link to="/" id="logo">
                    <img src="./assets/logo.png" alt="Logo">
                    <p>Dataviz</p>
                </router-link>
                <router-link to="/">Home</router-link>
                <router-link to="/Analytics">Analytics</router-link>
                <router-link to="/Map">Map</router-link>
                <router-link to="/About">About</router-link>
            </div>
            <div class="login">
                <div class="sign" id="in" @click="addFeed()">
                    Sign In
                </div>
                <div class="sign" id="up" @click="addFeed()">
                    Sign Up
                </div>
            </div>
        </div>

        <Feedback @click="delFeed()"/>

        <div class="main">
            <router-view/>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Api from './api/Api.vue';
    // import Api2 from './api/Api2.vue';
    import Footer from './components/Footer.vue';
    import Feedback from './components/Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        mixins: [Api],  // [Api, Api2]
        components: {
            Footer, Feedback,
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

<style>
    :root {
        --main-red-color: #E56B6F;
        --main-blue-color: #348AF4;
        --main-grey-color: #333;
        --main-white-color: #FFF;
        --main-green-color: #499F68;
        --main-yellow-color: #FFCF60;

        --main-dark-blue-color: #2c3e50;
        --main-body-color: #FAE2E3;

        --home-red-color: #FB565E;
        --home-grey-color: #6D6969;
        --home-white-color: #FFFAF8;
        --home-shadow-color: #6D6969;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* text-align: center; */
      color: var(--main-dark-blue-color);
      margin: 0;
    }

    body {
        margin: 0;
    }

/* --- Navigation Bar --- */
    .nav {
        margin: 0;
        padding: 10px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        background: var(--main-red-color);
        font-weight: bold;
    }

    .nav .page {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .nav a {
        margin: 0 10px;
        padding: 10px 20px;
        text-decoration: none;
        color: #333;
        border-bottom: 3px solid var(--main-red-color);
        transition: 0.5s;
    }

    .nav a:hover {
        border-bottom: 3px solid white;
    }

    .nav #logo {
        display: flex;
        justify-items: center;
        align-items: center;
        background: var(--main-white-color);
        border-radius: 10px;
        border: 3px solid var(--main-red-color);
    }

    .nav #logo:hover {
        border: 3px solid var(--main-green-color);
    }

    .nav #logo img {
        width: 30px;
    }

    .nav #logo p {
        margin: 0;
        margin-left: 10px;
    }

    .nav .login {
        display: flex;
        justify-content: flex-end;
        justify-items: center;
        align-items: center;
    }

    .nav .login .sign {
        margin: 0 5px;
        padding: 15px 20px;
        border-radius: 10px;
        border: 3px solid var(--main-red-color);
        transition: 0.7s;
        cursor: pointer;
    }

    #up {
        color: var(--main-white-color);
        background: var(--main-dark-blue-color);
    }

    #up:hover {
        color: var(--main-red-color);
        background: var(--main-white-color);

    }

    #in:hover {
        color: var(--main-white-color);
    }

/* --- Main --- */
    .main {
        min-height: 500px;
        background: var(--main-body-color);
    }

    @media (max-width: 940px){
        .nav {
            grid-template-columns: 1fr;
        }
        .sign, .login {
            display: none;
            width: 0;
        }
    }

    @media (max-width: 625px){
        .nav a {
            margin: 0;
            padding: 10px 20px;
        }
    }

    @media (max-width: 525px){
        .nav a {
            padding: 10px 3%;
        }
    }

    @media (max-width: 445px){
        #logo, #logo img, #logo p {
            display: none;
        }

        .nav #logo {
            background: var(--main-red-color);
        }
    }

    @media (max-width: 320px){
        .nav a {
            padding: 10px 1%;
        }
    }
</style>
