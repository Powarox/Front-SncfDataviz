<template>
    <div id="Page2">
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
            // Get
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=mouvements-sociaux-depuis-1994&q=&rows=5&sort=date')
                .then(response => {
                    let results = response.data.records;
                    console.log(results);

                    for(let res in results){
                        console.log(results[res].fields);
                    }

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
