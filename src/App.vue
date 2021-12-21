<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <div id="nav">
            <div>
                Logo
                <!-- <router-link to="/">Logo</router-link> -->
                <!-- <img src="" alt="Logo">  -->
            </div>
            <router-link to="/">Home</router-link>
            <router-link to="/Page">Page 1</router-link>
            <router-link to="/Page2">Page 2</router-link>
            <router-link to="/About">About</router-link>
            <!-- <router-link to="/Login">Login</router-link> -->
        </div>

        <div id="main">
            <router-view/>
        </div>

        <div id="footer">
            <p>Moriniere Robin 21606393</p>
            <p>Mohamed Lamine Seck 21711412</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

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
    #nav {
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 0;
        padding: 10px;
        background: #E56B6F;
        font-weight: bold;

    }

    #nav a {
        margin: 10px 20px;
        text-decoration: none;
        color: #333;
        border-bottom: 3px solid #E56B6F;
        transition: 0.5s;
    }

    #nav a:hover {
        border-bottom: 3px solid white;
    }

    #nav div {
        margin: 0 10px;
        color: #DDD;
        background: #355070;
        padding: 17px;
        border-radius: 5px;
        cursor: pointer;
    }

/* --- Main --- */
    #main {
        height: 500px;
        padding: 30px;
        background: #FAE2E3;
    }

/* --- Footer --- */
    #footer {
        color: #DDD;
        background: #555;
        padding: 20px;
    }

    #footer p {
        margin: 0;
    }
</style>
