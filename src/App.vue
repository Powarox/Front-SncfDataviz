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
                <router-link to="/Page">Page 1</router-link>
                <router-link to="/Page2">Page 2</router-link>
                <router-link to="/Page3">Page 3</router-link>
                <router-link to="/About">About</router-link>
            </div>
            <div class="login">
                <div class="sign" id="in">
                    Sign In
                </div>
                <div class="sign" id="up">
                    Sign Up
                </div>
            </div>
        </div>

        <div class="main">
            <router-view/>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue';

    export default {
        name: 'App',
        components: {
            Footer
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* text-align: center; */
      color: #2c3e50;
      margin: 0;
    }

/* --- Navigation Bar --- */
    .nav {
        margin: 0;
        padding: 10px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        background: #E56B6F;
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
        border-bottom: 3px solid #E56B63;
        transition: 0.5s;
    }

    .nav a:hover {
        border-bottom: 3px solid white;
        /* border-radius: 10px;
        background: #999; */
    }

    .nav #logo {
        display: flex;
        justify-items: center;
        align-items: center;
        background: #FFF;
        border-radius: 10px;
        border: 3px solid #E56B63;
    }

    .nav #logo:hover {
        border: 3px solid #348AF4;
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
        border: 3px solid #E56B63;
        transition: 0.7s;
        cursor: pointer;
    }

    #up {
        color: #FFF;
        background: #2c3e50;
    }

    #up:hover {
        color: #E56B63;
        background: #FFF;

    }

    #in:hover {
        color: #FFF;
    }


/* --- Main --- */
    .main {
        min-height: 500px;
        padding: 30px;
        background: #FAE2E3;
    }

</style>
