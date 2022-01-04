<template>
    <div id="Page2">
        <a href="https://www.datavis.fr/index.php?page=map-hexgrid" target="_blank">Carte hexa ville</a><br>
        <a href="https://www.datavis.fr/index.php?page=map-firststep" target="_blank">Carte régions</a><br>
        <a href="https://www.datavis.fr/index.php?page=map-population" target="_blank">Carte régions couleur</a><br>
        <a href="https://www.d3-graph-gallery.com/" target="_blank">Gallery D3JS</a>

        <br><br>

        <section class='test'>
            <BarChart/>
        </section>
    </div>
</template>

<script>
    import BarChart from '../components/BarChart.vue';

    export default {
        name: 'Page2',
        components: {
            BarChart
        },
        data() {
            return {

            }
        },

    }
</script>

<style lang="css" scoped>
    #Page2 {

    }

    p {
        margin: 0;
    }
</style>
