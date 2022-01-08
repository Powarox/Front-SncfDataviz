<template>
    <div id="about">
        <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">

        <div class="author">
            <div class="item">
                <h1>Moriniere Robin</h1>
                <h3>21606393@etu.unicaen.fr</h3>
                <a href="https://github.com/Powarox2159" target="_blank">
                    <button ><i class="ball fab fa-github"></i> Github</button>
                </a>
            </div>

            <div class="item">
                <h1>Mohamed Lamine Seck</h1>
                <h3>21711412@etu.unicaen.fr</h3>
                <a href="https://github.com/momooz10" target="_blank">
                    <button ><i class="ball fab fa-github"></i> Github</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style lang="css" scoped>
    #about {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .author {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .paiement {
        display: flex;
        justify-content: center;
    }

    .item button {
        padding: 10px;
        color: var(--main-white-color);
        background: var(--main-red-color);
        border: 2px solid var(--main-red-color);
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;
    }

    .item button:hover {
        color: var(--main-white-color);
        background: var(--main-green-color);
        border: 2px solid var(--main-green-color);
    }


    @media (max-width: 785px){
        .author {
            display: flex;
            flex-direction: column;
        }
    }
</style>
