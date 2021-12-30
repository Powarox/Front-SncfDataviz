<template>
    <div id="Page2">
        <section class='test'>
            <div v-if="loading">Chargement...</div>
            <button @click="test()">test</button>
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
                errored: false,

                data: {},
            }
        },

        methods: {
            test(){
                let result = {};
                let count = 0;
                let tmp = '';

                for(let i in this.data){
                    let date = this.data[i]['date'];
                    let spl = date.split('-');

                    if(tmp === spl[0]){
                        count += this.data[i]['journees_perdues'];
                    }
                    else {
                        if(tmp !== ''){
                            result[tmp] = count;
                        }
                        count = this.data[i]['journees_perdues'];
                        tmp = spl[0];
                    }
                }
                console.log(result);
            }
        },

        mounted () {
            // Get Mouvement sociaux
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=mouvements-sociaux-depuis-1994&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let newTab = {};

                    for(let res in results){
                        newTab[res] = results[res].fields;
                    }
                    this.data = newTab;
                    // console.log(newTab);

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
