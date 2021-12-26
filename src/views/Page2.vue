<template>
    <div id="Page2">
        <a href="https://www.datavis.fr/index.php?page=map-hexgrid" target="_blank">Carte hexa ville</a><br>
        <a href="https://www.datavis.fr/index.php?page=map-firststep" target="_blank">Carte régions</a><br>
        <a href="https://www.datavis.fr/index.php?page=map-population" target="_blank">Carte régions couleur</a>
        <a href="https://www.d3-graph-gallery.com/" target="_blank">Carte régions couleur</a>

        <br><br>

        <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
        </section>

        <section v-else>
            <div v-if="loading">Chargement...</div>

            <div v-else v-for="currency in info" :key="currency" class="currency">
                {{ currency.description }}:
                {{ currency.rate_float }}
            </div>
        </section>

        <br><br>

        <section class='test'>

        </section>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Page2',
        data() {
            return {
                info: null,
                loading: true,
                errored: false
            }
        },

        mounted () {
            // Get bitcoin price
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.info = response.data.bpi
                    // console.log(this.info);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false),

            // Get worksite list
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-chantiers&q=&rows=5')
                .then(response => {
                    console.log(response.data.records);

                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
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
