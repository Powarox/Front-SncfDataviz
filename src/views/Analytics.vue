<template>
    <div id="analytics">
        <slidebar/>

        <section class="main">
            <section class="box item1">
                <div class="headerBox">
                    <h3>Train Total</h3>
                </div>
                <div class="content">
                    131 331 depuis 2018
                </div>
            </section>

            <section class="box item2">
                <div class="headerBox">
                    <h3>Train en Retards</h3>
                </div>
                <div class="content">
                    1 131 331 depuis 2018
                </div>
            </section>

            <section class="box item3">
                <div class="headerBox">
                    <h3>Statistics Card</h3>
                </div>
                <div class="content">
                    <div class="stats">
                        <p>Nombre de train retards par tranche de minutes</p>
                        <div class="stats2">
                            <div class="s1">
                                34343
                            </div>
                            <div class="s2">
                                54535
                            </div>
                            <div class="s3">
                                35353
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="box item4">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    <BarChart id="barChart" v-bind:chartData="state3.chartData"/>
                </div>
            </section>

            <section class="box item5">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content ">
                    <DoughnutChart id="doughnutChart" v-bind:chartData="state2.chartData"/>
                    <div class="dougStats">
                        <h4>explication</h4>
                        <div class="dougList">
                            <p>a: Train à l'heure</p>
                            <p>b: Train en retard au départ</p>
                            <p>c: Train en retard a l'arrviée</p>
                            <p>d: Train annulée</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="box item6">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    <LineChart id="lineChart" v-bind:chartData="state1.chartData"/>
                </div>
            </section>

            <section class="box item7">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    <div class="largeContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                    </div>
                </div>
            </section>

            <section class="box item8">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    1 131 331 depuis 2018
                </div>
            </section>

            <section class="box item9">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    1 131 331 depuis 2018
                </div>
            </section>

            <section class="box item10">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    <BarChart id="barChart" v-bind:chartData="state3.chartData"/>
                </div>
            </section>

            <section class="box item11">
                <div class="headerBox">
                    <h3>Title</h3>
                </div>
                <div class="content">
                    1 131 331 depuis 2018
                </div>
            </section>

            <!-- <DoughnutChart id="doughnutChart" v-bind:chartData="state2.chartData"/>
            <LineChart id="lineChart" v-bind:chartData="state1.chartData"/>
            <BarChart id="barChart" v-bind:chartData="state3.chartData"/> -->

            <!-- <li>Train : {{ this.data['global_train'].toLocaleString('fr-FR') }}</li>
            <li>Train annulé : {{ this.data['nb_tot_ann'].toLocaleString('fr-FR') }}</li>
            <li>Train en retard au depart : {{ this.data['nb_ret_dep'].toLocaleString('fr-FR') }}</li>
            <li>Train en retard à l'arrivée: {{ this.data['nb_ret_arr'].toLocaleString('fr-FR') }}</li>
            <li>Train avec un retard supérieur à 15min : {{ this.data['nb_ret_s15'].toLocaleString('fr-FR') }}</li>
            <li>Train avec un retard supérieur à 30min : {{ this.data['nb_ret_s30'].toLocaleString('fr-FR') }}</li>
            <li>Train avec un retard supérieur à 60min : {{ this.data['nb_ret_s60'].toLocaleString('fr-FR') }}</li> -->
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
        name: 'Analytics',
        components: {
            Slidebar, BarChart, LineChart, DoughnutChart
        },

        data() {
            return {
                data: {},
                state1: {
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
                state3: {
                    chartData: {},
                    chartOptions: {
                        responsive: true
                    }
                },
            }
        },

        beforeMount() {
            this.fillData1();
            this.fillData2();
            this.fillData3();
        },

        // updated() {
        //     this.fillData1();
        //     this.fillData2();
        //     this.fillData3();
        // },

        methods: {
            ...mapGetters([
                'getDatasets1', 'getDatasets2',
            ]),

            fillData1() {
                let data = this.getDatasets1();
                console.log(data);
                // let months = [];
                // let data1 = [];
                // let data2 = [];
                // let data3 = [];
                //
                // for(let i in data){
                //     months.push(i);
                //     data1.push(data[i]['nb_train_retard_sup_15']);
                //     data2.push(data[i]['nb_train_retard_sup_30']);
                //     data3.push(data[i]['nb_train_retard_sup_60']);
                // }

                this.state1.chartData = {
                    labels: ['monde', 'ergerg', 'eregr', 'monde', 'erdgerg', 'eregfr'],  //months.reverse(),
                    datasets: [
                        {
                              label: '60 min',
                              backgroundColor: '#499F68',
                              data: [1,4,2,9,6,4]
                              // data3.reverse()
                        },
                        {
                              label: '30 min',
                              backgroundColor: '#348AF4',
                              data: [1,4,2,9,6,4]
                              // data2.reverse()
                        },
                        {
                              label: '15 min',
                              backgroundColor: '#E56B6F',
                              data: [1,4,2,9,6,4]
                              // data1.reverse()
                        },
                    ]
                }
            },

            fillData2() {
                this.data = this.getDatasets2();
                console.log(this.data);
                this.state2.chartData = {
                    labels: ['a', 'b', 'c', 'd'],
                    // labels: ['A l\'heure', 'Annulés', 'Retard 15min', 'Retard 30min', 'Retard 60min'],
                    datasets: [
                        {
                            backgroundColor: ['#499F68', '#FFCF60', '#E56B6F', '#348AF4', '#900C3E'],
                            data: [1,4,2,9]
                            // [this.data['nb_in_time'], this.data['nb_tot_ann'], this.data['nb_ret_s15'], this.data['nb_ret_s30'], this.data['nb_ret_s60']]
                        },
                    ]
                }
            },

            fillData3() {
                // let data = this.getDatasets1();
                // let months = [];
                // let data1 = [];
                // let data2 = [];
                //
                // for(let i in data){
                //     if(data[i]['journees_perdues']){
                //         months.push(i);
                //         data1.push(data[i]['nb_train_retard_depart']);
                //         data2.push(data[i]['nb_train_retard_arrivee']);
                //     }
                //
                // }

                this.state3.chartData = {
                    labels: ['monde', 'ergerg', 'eregr', 'monde', 'erdgerg', 'eregfr'],   //months.reverse(),
                    datasets: [
                        {
                              label: 'Retards depart',
                              backgroundColor: '#499F68',
                              data: [1,4,2,9,6,4]
                              // data1.reverse()
                        },
                        {
                              label: 'Retards arrivée',
                              backgroundColor: '#348AF4',
                              data: [3,5,2,1,6,3]
                              // data2.reverse()
                        },
                    ]
                }
            },
        },
    }
</script>

<style lang="css" scoped>
    #analytics {
        display: grid;
        grid-template-columns: 230px 1fr;
        grid-gap: 10px;
        background: #FFF;
    }

    p {
        /* text-align: justify;
        text-indent: 2em; */
    }

    .item1 { grid-area: box1; }
    .item2 { grid-area: box2; }
    .item3 { grid-area: lin1; }
    .item4 { grid-area: box3; }
    .item5 { grid-area: lin2; }
    .item6 { grid-area: box4; }
    .item7 { grid-area: larg; }
    .item8 { grid-area: box5; }
    .item9 { grid-area: box6; }
    .item10 { grid-area: box7; }
    .item11 { grid-area: box8; }

    .main {
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-areas:
            'box1 box1 box1 box2 box2 box2 lin1 lin1 lin1 lin1 lin1 lin1'
            'box3 box3 box3 lin2 lin2 lin2 lin2 lin2 lin2 box4 box4 box4'
            'larg larg larg larg larg larg box5 box5 box5 box6 box6 box6'
            'larg larg larg larg larg larg box7 box7 box7 box8 box8 box8';
        grid-gap: 20px;
        background: #FFF;
    }

    .main .box {
        padding: 10px;
        /* display: grid; */
        /* align-items: center; */
        /* justify-items: center; */
        background: #FAE2E3;
        border: 2px solid #FAE2E3;
        border-radius: 10px;
        box-shadow: 0 0 10px #AAA;
    }

    .main .box h3 {
        margin: 5px 0;
    }

    .main .box p {
        margin: 0;
    }

    .main .box .headerBox {

    }

    .main .box .content {
        display: flex;
        align-items: center;
        justify-items: center;
    }

    .main .box .content .stats {
        display: flex;
        flex-direction: column;
    }

    .main .box .content .stats .stats2 {
        display: flex;
        justify-content: space-between;
    }

    .main .box .content .dougStats {
        margin-right: 10px;
    }

    .main .box .content .dougStats h4 {
        margin: 0;
        padding: 20px 0;
        border-bottom: 1px solid black;
    }

    .main .box .content .dougStats .dougList {
        padding: 20px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .main .box .content .dougStats .dougList li {
        padding: 10px 0;
    }

    .main .box .content .largeContent p {
        padding: 20px 0;
        text-align: justify;
        text-indent: 2em;
    }









    #barChart {
        width: 250px;
    }

    #lineChart {
        width: 250px;
    }

    #doughnutChart {
        width: 250px;
    }
</style>
