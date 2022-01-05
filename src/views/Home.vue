<template>
    <div id="home">
        <slidebar/>

        <section class="content">
            <section class="elem" id="elem1">
                <h2>Un element Titre ici</h2>
                <h2>Un element Titre ici</h2>
            </section>

            <section class="elem" id="elem2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .</p>

                <div id="lineChart">
                    <!-- <h3>Nombre de train en retard</h3> -->
                    <LineChart/>
                </div>
            </section>

            <section class="elem" id="elem1">
                <h2>Un element Titre ici</h2>
                <h2>Un element Titre ici</h2>
            </section>

            <section class="elem" id="elem2">
                <div id="DoughnutChart">
                    <DoughnutChart v-bind:chartData="state.chartData"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            </section>

            <section class="elem" id="elem1">
                <h2>Un element Titre ici</h2>
                <h2>Un element Titre ici</h2>
            </section>

            <section class="elem" id="elem3">
                <div class="">
                    <h4>Nombre total des retards depuis 2018</h4>
                    <li>Train : {{ this.global_train.toLocaleString('fr-FR') }}</li>
                    <li>Train annulé : {{ this.nb_tot_ann.toLocaleString('fr-FR') }}</li>
                    <li>Train en retard au depart : {{ this.nb_ret_dep.toLocaleString('fr-FR') }}</li>
                    <li>Train en retard à l'arrivée: {{ this.nb_ret_arr.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 15min : {{ this.nb_ret_s15.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 30min : {{ this.nb_ret_s30.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 60min : {{ this.nb_ret_s60.toLocaleString('fr-FR') }}</li>
                </div>
                <div id="barChart">
                    <BarChart/>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapActions } from 'vuex';
    import Slidebar from "../components/SlideBar.vue";
    import BarChart from '../components/BarChart.vue';
    import LineChart from '../components/LineChart.vue';
    import DoughnutChart from '../components/DoughnutChart.vue';

    export default {
        name: 'Home',
        components: {
            Slidebar, BarChart, LineChart, DoughnutChart
        },

        data() {
            return {
                info: null,
                errored: false,
                loading: true,
                dataset1: {},
                dataset2: {},

                global_train: 0,
                nb_in_time: 0,
                nb_tot_ann: 0,
                nb_ret_dep: 0,
                nb_ret_arr: 0,
                nb_ret_s15: 0,
                nb_ret_s30: 0,
                nb_ret_s60: 0,

                state: {
                    chartData: {},
                    chartOptions: {
                        responsive: true
                    }
                }
            }
        },

        beforeMount () {
            this.fillData();
        },

        updated() {
            this.fillData();
        },

        methods: {
            ...mapActions([
                'updateDataset1',
            ]),

            fillData() {
                this.state.chartData = {
                    labels: ['A l\'heure', 'Annulés', 'Retard 15min', 'Retard 30min', 'Retard 60min'],
                    datasets: [
                        {
                            backgroundColor: ['#E56B6F', '#348AF4', "#FFCF60", "#900C3E", "#499F68"],
                            data: [this.nb_in_time, this.nb_tot_ann, this.nb_ret_s15, this.nb_ret_s30, this.nb_ret_s60]
                        },
                    ]
                }
            },

            GlobalTrainLate(){
                for(let res in this.dataset1){
                    this.global_train += this.dataset1[res]['nb_train_prevu'];
                    this.nb_tot_ann += this.dataset1[res]['nb_annulation'];
                    this.nb_ret_dep += this.dataset1[res]['nb_train_retard_depart'];
                    this.nb_ret_arr += this.dataset1[res]['nb_train_retard_arrivee'];
                    this.nb_ret_s15 += this.dataset1[res]['nb_train_retard_sup_15'];
                    this.nb_ret_s30 += this.dataset1[res]['nb_train_retard_sup_30'];
                    this.nb_ret_s60 += this.dataset1[res]['nb_train_retard_sup_60'];
                }
                this.nb_in_time = this.global_train - this.nb_ret_arr - this.nb_tot_ann;
            },

            addDataFromOtherAPI(){
                for(let date in this.dataset1){
                    for(let key in this.dataset2[date]){
                        this.dataset1[date][key] = this.dataset2[date][key]
                    }
                }
                console.log(this.dataset1);
            },

            upgradDatabase(){
                console.log('-- Upgrade Data --');
                this.updateDataset1(this.dataset1);
            },

        },
        mounted() {
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
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
                                this.dataset1[tmp] = {
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
                    this.GlobalTrainLate();
                    this.addDataFromOtherAPI();
                    this.upgradDatabase();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=mouvements-sociaux-depuis-1994&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let stop = false;

                    for(let res in results){
                        if(!stop){
                            if(results[res].fields['date'] === '2018-02'){
                                this.dataset2[results[res].fields['date']] = {
                                    'journees_perdues': results[res].fields['journees_perdues']
                                }
                                stop = true;
                            }
                            else {
                                this.dataset2[results[res].fields['date']] = {
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
        }
    }
</script>

<style lang="css" scoped>
    #home {
        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-gap: 10px;
        padding: 5px;
    }

    p {
        margin: 0;
        text-indent: 2em;
        text-align: justify;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }

    .elem {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3%;
        align-items: center;
        justify-items: center;
        padding: 0 2%;
    }

    #barChart, #lineChart, #DoughnutChart{
        width: 300px;
    }

    /* .chartjs-render-monitor {
        width: 400px;
        height: 300px;
    } */

    #graphs {
        width: 100%;
        height: 175px;
        text-align: center;
        border-radius: 20px;
        background: #FFF;
    }

    section div {
        margin: 5px;
    }
</style>
