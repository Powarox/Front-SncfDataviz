<template>
    <div id="slide_bar">
        <h1>Filter</h1>

        <section class="btn">
            <button type="button" name="button">Cadre</button>
            <button type="button" name="button">Technicien</button>
            <button type="button" name="button">Ouvrier</button>
            <button type="button" name="button">Agent</button>
            <button type="button" name="button">2021</button>
            <button type="button" name="button">2020</button>
            <button type="button" name="button">2019</button>
            <button type="button" name="button">2018</button>
            <button type="button" name="button">2017</button>
            <button type="button" name="button">2016</button>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Slidebar",
    }
</script>

<style lang="css" scoped>
    #slide_bar {
        border-right: 2px solid #2c3e50;
        /* background: linear-gradient(45deg, #e66465, #9198e5); */
    }

    h1 {
        border-bottom: 2px solid #2c3e50;
        margin-right: 40px;
    }

    .btn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 5%;
        /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) */
    }

    .btn button {
        margin: 5px 5px;
        padding: 5px 7px;
        color: #2c3e50;
        background: #E56B6F;
        border: 2px solid #E56B6F;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }

</style>
