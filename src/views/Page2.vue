<template>
    <div id="Page2">
        <section class='test'>
            <div v-if="loading1">Chargement ... Mouvement sociaux</div>
            <div v-if="loading2">Chargement ... Liste des gares</div>
            <div v-if="loading3">Chargement ... Liste des chatiers</div>
            <div v-if="loading4">Chargement ... Regularité Mensuelle</div>
            <button @click="test2()">test</button>
            <p>{{ this.data }}</p><br>
            <p>{{ this.data1b }}</p><br>
            <!-- <p>{{ this.data3 }}</p><br> -->
            <!-- <p>{{ this.data4 }}</p><br> -->
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
                errored: false,
                loading1: true,
                loading2: true,
                loading3: true,
                loading4: true,

                data: {},
                data1: {},
                data1b: {},
                data2: [],
                data3: [],
                data4: {},
                data5: {},
            }
        },

        methods: {
            test(){
                for(let date in this.data4){
                    for(let key in this.data1[date]){
                        this.data4[date][key] = this.data1[date][key]
                    }
                    if(this.data4[date]['journees_perdues']){
                        console.log('ok');
                    }
                    else {
                        console.log('not here');
                    }
                }
                console.log(this.data4);
            },

            test2(){
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
                console.log(this.data);
                console.log(result);
                this.data1b = result
            }
        },

        mounted () {
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

            // Get Mouvement sociaux
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=mouvements-sociaux-depuis-1994&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let stop = false;

                    for(let res in results){
                        if(!stop){
                            if(results[res].fields['date'] === '2018-02'){
                                this.data1[results[res].fields['date']] = {
                                    'journees_perdues': results[res].fields['journees_perdues']
                                }
                                stop = true;
                            }
                            else {
                                this.data1[results[res].fields['date']] = {
                                    'journees_perdues': results[res].fields['journees_perdues']
                                }
                            }
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading1 = false)

            // Get worksite list
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-chantiers&q=&rows=10')
                .then(response => {
                    let results = response.data.records;

                    for(let res in results){
                        this.data2 .push({
                            'gare': results[res].fields.gare,
                            'libelle': results[res].fields.libelle,
                            'lattitude': results[res].fields.geo_point_2d[0],
                            'longitude': results[res].fields.geo_point_2d[1],
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading2 = false)

            // Get subway station list
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=&rows=10')
                .then(response => {
                    let results = response.data.records;

                    for(let res in results){
                        this.data3.push({
                            'gare': results[res].fields.libelle,
                            'commune': results[res].fields.commune,
                            'departement': results[res].fields.departemen,
                            'lattitude': results[res].fields.geo_point_2d[0],
                            'longitude': results[res].fields.geo_point_2d[1],
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading3 = false)

            // // Get Retard train
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let newTab = {};
                    let tmp = '';

                    let duree_moyenne = 0;
                    let nb_annulation = 0;
                    let nb_train_prevu = 0;

                    let nb_train_retard_depart = 0;
                    let nb_train_retard_arrivee = 0;
                    let nb_train_retard_sup_15 = 0;
                    let nb_train_retard_sup_30 = 0;
                    let nb_train_retard_sup_60 = 0;

                    let retard_moyen_arrivee = 0;
                    let retard_moyen_depart = 0;
                    let retard_moyen_tous_trains_arrivee = 0;
                    let retard_moyen_tous_trains_depart = 0;
                    let retard_moyen_trains_retard_sup15 = 0;

                    for(let res in results){
                        let date = results[res].fields.date;
                        if(tmp === date){
                            duree_moyenne += results[res].fields.duree_moyenne;
                            nb_annulation += results[res].fields.nb_annulation;
                            nb_train_prevu += results[res].fields.nb_train_prevu;

                            nb_train_retard_depart += results[res].fields.nb_train_depart_retard;
                            nb_train_retard_arrivee += results[res].fields.nb_train_retard_arrivee;
                            nb_train_retard_sup_15 += results[res].fields.nb_train_retard_sup_15;
                            nb_train_retard_sup_30 += results[res].fields.nb_train_retard_sup_30;
                            nb_train_retard_sup_60 += results[res].fields.nb_train_retard_sup_60;

                            retard_moyen_arrivee += results[res].fields.retard_moyen_arrivee;
                            retard_moyen_depart += results[res].fields.retard_moyen_depart;
                            retard_moyen_tous_trains_arrivee += results[res].fields.retard_moyen_tous_trains_arrivee;
                            retard_moyen_tous_trains_depart += results[res].fields.retard_moyen_tous_trains_depart;
                            retard_moyen_trains_retard_sup15 += results[res].fields.retard_moyen_trains_retard_sup15;
                        }
                        else {
                            if(tmp !== ''){
                                newTab[tmp] = {
                                    'duree_moyenne' : duree_moyenne,
                                    'nb_annulation' : nb_annulation,
                                    'nb_train_prevu' : nb_train_prevu,
                                    'nb_train_retard_depart' : nb_train_retard_depart,
                                    'nb_train_retard_arrivee' : nb_train_retard_arrivee,
                                    'nb_train_retard_sup_15' : nb_train_retard_sup_15,
                                    'nb_train_retard_sup_30' : nb_train_retard_sup_30,
                                    'nb_train_retard_sup_60' : nb_train_retard_sup_60,
                                    'retard_moyen_arrivee' : retard_moyen_arrivee,
                                    'retard_moyen_depart' : retard_moyen_depart,
                                    'retard_moyen_tous_trains_arrivee' : retard_moyen_tous_trains_arrivee,
                                    'retard_moyen_tous_trains_depart' : retard_moyen_tous_trains_depart,
                                    'retard_moyen_trains_retard_sup15' : retard_moyen_trains_retard_sup15,
                                }
                            }
                            duree_moyenne = results[res].fields.duree_moyenne;
                            nb_annulation = results[res].fields.nb_annulation;
                            nb_train_prevu = results[res].fields.nb_train_prevu;

                            nb_train_retard_depart = results[res].fields.nb_train_depart_retard;
                            nb_train_retard_arrivee = results[res].fields.nb_train_retard_arrivee;
                            nb_train_retard_sup_15 = results[res].fields.nb_train_retard_sup_15;
                            nb_train_retard_sup_30 = results[res].fields.nb_train_retard_sup_30;
                            nb_train_retard_sup_60 = results[res].fields.nb_train_retard_sup_60;

                            retard_moyen_arrivee = results[res].fields.retard_moyen_arrivee;
                            retard_moyen_depart = results[res].fields.retard_moyen_depart;
                            retard_moyen_tous_trains_arrivee = results[res].fields.retard_moyen_tous_trains_arrivee;
                            retard_moyen_tous_trains_depart = results[res].fields.retard_moyen_tous_trains_depart;
                            retard_moyen_trains_retard_sup15 = results[res].fields.retard_moyen_trains_retard_sup15;
                            tmp = date;
                        }
                    }
                    this.data4 = newTab;
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading4 = false)
        },
    }
</script>

<style lang="css" scoped>
    #Page2 {
        padding: 30px;
    }

    p {
        margin: 0;
    }
</style>
