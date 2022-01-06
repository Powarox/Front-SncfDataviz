<template>
    <div id="about">
        <img src="../assets/logo.png" alt="ici">
        <p>description du projet</p>

        <div class="test">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
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

    .test {
        width: 200px;
        height: 100px;
        background: var(--main-green-color);
    }
</style>
