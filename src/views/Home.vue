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
                    <LineChart v-bind:chartData="state2.chartData"/>
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
    import { mapGetters } from 'vuex';
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
                },

                state2: {
                    chartData: {},
                    chartOptions: {
                        responsive: true
                    }
                },
            }
        },

        beforeMount() {
            this.fillData();
            this.fillData2();
        },

        // updated() {
        //     this.fillData();
        // },

        methods: {
            ...mapGetters([
                'getDataset1', 'getDataset2',
            ]),

            fillData() {
                let data = this.getDataset2();
                this.state.chartData = {
                    labels: ['A l\'heure', 'Annulés', 'Retard 15min', 'Retard 30min', 'Retard 60min'],
                    datasets: [
                        {
                            backgroundColor: ['#E56B6F', '#348AF4', "#FFCF60", "#900C3E", "#499F68"],
                            data: [data['nb_in_time'], data['nb_tot_ann'], data['nb_ret_s15'], data['nb_ret_s30'], data['nb_ret_s60']]
                        },
                    ]
                }
            },

            fillData2() {
                let data = this.getDataset1();
                let months = [];
                let dataset1 = [];
                let dataset2 = [];
                let dataset3 = [];

                for(let i in data){
                    months.push(i);
                    dataset1.push(data[i]['nb_train_retard_sup_15']);
                    dataset2.push(data[i]['nb_train_retard_sup_30']);
                    dataset3.push(data[i]['nb_train_retard_sup_60']);
                }

                this.state2.chartData = {
                    labels: months.reverse(),
                    datasets: [
                        {
                              label: '60 min',
                              backgroundColor: '#499F68',
                              data: dataset3.reverse()
                        },
                        {
                              label: '30 min',
                              backgroundColor: '#348AF4',
                              data: dataset2.reverse()
                        },
                        {
                              label: '15 min',
                              backgroundColor: '#E56B6F',
                              data: dataset1.reverse()
                        },
                    ]
                }
            },

        },
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
