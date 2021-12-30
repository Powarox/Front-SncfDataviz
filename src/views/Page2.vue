<template>
    <div id="Page2">
        <section class='test'>
            <div v-if="loading">Chargement...</div>
            <button @click="test()">test</button>
            <p>{{ this.data1 }}</p>
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

                data1: {},
                data2: {},
            }
        },

        methods: {
            test(){
                let result = [];
                let count = 0;
                let tmp = '';

                for(let i in this.data1){
                    let date = this.data1[i]['date'];
                    let spl = date.split('-');

                    if(tmp === spl[0]){
                        count += this.data1[i]['journees_perdues'];
                    }
                    else {
                        if(tmp !== ''){
                            result.push({
                                'date': tmp,
                                'journees_perdues': count
                            });
                        }
                        count = this.data1[i]['journees_perdues'];
                        tmp = spl[0];
                    }
                }
                this.data1 = result;
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
                    this.data1 = newTab;
                    // console.log(newTab);

                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

            // Get Retard train
            // axios
            //     .get('https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=-1&sort=date')
            //     .then(response => {
            //         let results = response.data.records;
            //         let newTab = {};
            //         let tmp = '';
            //
            //         let duree_moyenne = 0;
            //         let nb_annulation = 0;
            //         let nb_train_prevu = 0;
            //
            //         let nb_train_retard_depart = 0;
            //         let nb_train_retard_arrivee = 0;
            //         let nb_train_retard_sup_15 = 0;
            //         let nb_train_retard_sup_30 = 0;
            //         let nb_train_retard_sup_60 = 0;
            //
            //         let retard_moyen_arrivee = 0;
            //         let retard_moyen_depart = 0;
            //         let retard_moyen_tous_trains_arrivee = 0;
            //         let retard_moyen_tous_trains_depart = 0;
            //         let retard_moyen_trains_retard_sup15 = 0;
            //
            //         for(let res in results){
            //             let date = results[res].fields.date;
            //             if(tmp === date){
            //                 duree_moyenne += results[res].fields.duree_moyenne;
            //                 nb_annulation += results[res].fields.nb_annulation;
            //                 nb_train_prevu += results[res].fields.nb_train_prevu;
            //
            //                 nb_train_retard_depart += results[res].fields.nb_train_depart_retard;
            //                 nb_train_retard_arrivee += results[res].fields.nb_train_retard_arrivee;
            //                 nb_train_retard_sup_15 += results[res].fields.nb_train_retard_sup_15;
            //                 nb_train_retard_sup_30 += results[res].fields.nb_train_retard_sup_30;
            //                 nb_train_retard_sup_60 += results[res].fields.nb_train_retard_sup_60;
            //
            //                 retard_moyen_arrivee += results[res].fields.retard_moyen_arrivee;
            //                 retard_moyen_depart += results[res].fields.retard_moyen_depart;
            //                 retard_moyen_tous_trains_arrivee += results[res].fields.retard_moyen_tous_trains_arrivee;
            //                 retard_moyen_tous_trains_depart += results[res].fields.retard_moyen_tous_trains_depart;
            //                 retard_moyen_trains_retard_sup15 += results[res].fields.retard_moyen_trains_retard_sup15;
            //             }
            //             else {
            //                 if(tmp !== ''){
            //                     newTab[tmp] = {
            //                         'duree_moyenne' : duree_moyenne,
            //                         'nb_annulation' : nb_annulation,
            //                         'nb_train_prevu' : nb_train_prevu,
            //                         'nb_train_retard_depart' : nb_train_retard_depart,
            //                         'nb_train_retard_arrivee' : nb_train_retard_arrivee,
            //                         'nb_train_retard_sup_15' : nb_train_retard_sup_15,
            //                         'nb_train_retard_sup_30' : nb_train_retard_sup_30,
            //                         'nb_train_retard_sup_60' : nb_train_retard_sup_60,
            //                         'retard_moyen_arrivee' : retard_moyen_arrivee,
            //                         'retard_moyen_depart' : retard_moyen_depart,
            //                         'retard_moyen_tous_trains_arrivee' : retard_moyen_tous_trains_arrivee,
            //                         'retard_moyen_tous_trains_depart' : retard_moyen_tous_trains_depart,
            //                         'retard_moyen_trains_retard_sup15' : retard_moyen_trains_retard_sup15,
            //                     }
            //                 }
            //                 duree_moyenne = results[res].fields.duree_moyenne;
            //                 nb_annulation = results[res].fields.nb_annulation;
            //                 nb_train_prevu = results[res].fields.nb_train_prevu;
            //
            //                 nb_train_retard_depart = results[res].fields.nb_train_depart_retard;
            //                 nb_train_retard_arrivee = results[res].fields.nb_train_retard_arrivee;
            //                 nb_train_retard_sup_15 = results[res].fields.nb_train_retard_sup_15;
            //                 nb_train_retard_sup_30 = results[res].fields.nb_train_retard_sup_30;
            //                 nb_train_retard_sup_60 = results[res].fields.nb_train_retard_sup_60;
            //
            //                 retard_moyen_arrivee = results[res].fields.retard_moyen_arrivee;
            //                 retard_moyen_depart = results[res].fields.retard_moyen_depart;
            //                 retard_moyen_tous_trains_arrivee = results[res].fields.retard_moyen_tous_trains_arrivee;
            //                 retard_moyen_tous_trains_depart = results[res].fields.retard_moyen_tous_trains_depart;
            //                 retard_moyen_trains_retard_sup15 = results[res].fields.retard_moyen_trains_retard_sup15;
            //                 tmp = date;
            //             }
            //         }
            //         this.data2 = newTab;
            //         // console.log(newTab);
            //     })
            //     .catch(error => {
            //         console.log(error)
            //         this.errored = true
            //     })
            //     .finally(() => this.loading = false)
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
