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
                <div id="graphs">
                    <p>un graph ici</p>
                </div>
            </section>

            <section class="elem" id="elem1">
                <h2>Un element Titre ici</h2>
                <h2>Un element Titre ici</h2>
            </section>

            <section class="elem" id="elem2">
                <div id="graphs">
                    <p>un graph ici</p>
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
                    <li>Train annulé : {{ this.global_annulation.toLocaleString('fr-FR') }}</li>
                    <li>Train en retard au depart : {{ this.nb_ret_dep.toLocaleString('fr-FR') }}</li>
                    <li>Train en retard à l'arrivée: {{ this.nb_ret_arr.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 15min : {{ this.nb_ret_s15.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 30min : {{ this.nb_ret_s30.toLocaleString('fr-FR') }}</li>
                    <li>Train avec un retard supérieur à 60min : {{ this.nb_ret_s60.toLocaleString('fr-FR') }}</li>
                </div>
                <div id="graphs">
                    <p>un graph ici</p>
                </div>
            </section>
        </section>
    </div>

    <script src="https://d3js.org/d3.v3.min.js"></script>
</template>

<script>
    import axios from "axios";
    import Slidebar from "../components/SlideBar.vue";
    import drawSecteurGraph from "../graph/sectors/DrawSectorGraph.js";

    export default {
        name: 'Home',
        components: {
            Slidebar
        },
        data() {
            return {
                info: null,
                errored: false,
                loading: true,
                data: [],

                global_train: 0,
                global_annulation: 0,
                nb_ret_dep: 0,
                nb_ret_arr: 0,
                nb_ret_s15: 0,
                nb_ret_s30: 0,
                nb_ret_s60: 0,
            }
        },
        methods: {
            GlobalTrainLate(){
                for(let res in this.data){
                    this.global_train += this.data[res]['nb_train_prevu'];
                    this.global_annulation += this.data[res]['nb_annulation'];
                    this.nb_ret_dep += this.data[res]['nb_train_retard_depart'];
                    this.nb_ret_arr += this.data[res]['nb_train_retard_arrivee'];
                    this.nb_ret_s15 += this.data[res]['nb_train_retard_sup_15'];
                    this.nb_ret_s30 += this.data[res]['nb_train_retard_sup_30'];
                    this.nb_ret_s60 += this.data[res]['nb_train_retard_sup_60'];
                }
            },
            test(){
                let name = ["A l'heure", "Annulé", "Retard 15 min", "Retard 30 min", "Retard 60 min"];
                let value = [3000, this.global_annulation, this.nb_ret_s15, this.nb_ret_s30, this.nb_ret_s60];
                let className = '.graphs';
                drawSecteurGraph(name, value, className);
            }
        },
        mounted() {
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
                    this.data = newTab;
                    this.GlobalTrainLate();
                    // console.log(newTab);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>

<style lang="css" scoped>
    #home {
        display: grid;
        grid-template-columns: 1fr 2fr;
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
