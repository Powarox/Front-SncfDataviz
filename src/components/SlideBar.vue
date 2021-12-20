<template>
    <div id="slideBar">
        <h1>Filter</h1>

        <section>
            <button type="button" name="button">test 1</button>
            <button type="button" name="button">test 2</button>
            <button type="button" name="button">test 3</button>
            <button type="button" name="button">test 4</button>
        </section>

        <section>
            <div v-for="currency in info" class="currency">
                {{ currency.description }}:

                <span class="lighten">
                    <span v-html="currency.symbol"></span>
                    {{ currency.rate_float | currencydecimal }}
                </span>
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

            }
        },

        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },

        mounted () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.info = response.data.bpi
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
