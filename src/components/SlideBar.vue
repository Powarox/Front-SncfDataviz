<template>
    <div id="slideBar">
        <h1>Filter</h1>

        <section>
            <button type="button" name="button">test 1</button>
            <button type="button" name="button">test 2</button>
            <button type="button" name="button">test 3</button>
            <button type="button" name="button">test 4</button>
        </section>

        <!-- <section>
            <div v-for="currency in info" class="currency">
                {{ currency.description }}:

                <span class="lighten">
                    <span v-html="currency.symbol"></span>
                    {{ currency.rate_float | currencydecimal }}
                </span>
            </div>
        </section> -->

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
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Slidebar",
        data() {
            return {
                info: null,
                loading: true,
                errored: false
            }
        },

        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.info = response.data.bpi
                    console.log(this.info);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },

    }
</script>

<style lang="css" >

</style>
