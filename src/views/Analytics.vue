<template>
    <div id="analytics">
        <slidebar/>

        <section class="main">
            <section class="box item1">
                <div class="headerBox">
                    <h3>Total des Trains</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['global_train'].toLocaleString('fr-FR') }} <span>(2018 - 2021)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item2">
                <div class="headerBox">
                    <h3>Train en Retards</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['nb_ret_dep'].toLocaleString('fr-FR') }} <span>(2018 - 2021)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item3">
                <div class="headerBox">
                    <h3>Statistics Card <span>(retards)</span></h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="stats">
                        <div class="stats2">
                            <div class="item">
                                <i class="fas fa-train"></i>
                                <div class="it">
                                    <span>15 min</span>
                                    <h3>{{ this.data['nb_ret_s15'].toLocaleString('fr-FR') }}</h3>
                                </div>
                            </div>
                            <div class="item">
                                <i class="fas fa-train"></i>
                                <div class="it">
                                    <span>30 min</span>
                                    <h3>{{ this.data['nb_ret_s30'].toLocaleString('fr-FR') }}</h3>
                                </div>
                            </div>
                            <div class="item">
                                <i class="fas fa-train"></i>
                                <div class="it">
                                    <span>60 min</span>
                                    <h3>{{ this.data['nb_ret_s60'].toLocaleString('fr-FR') }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="box item4">
                <div class="headerBox">
                    <h3>Retards <span>(2019)</span></h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <BarChart id="barChart" v-bind:chartData="state3.chartData"/>
                </div>
            </section>

            <section class="box item5">
                <div class="headerBox">
                    <h3>Train Overview</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="dougCard">
                        <DoughnutChart id="doughnutChart" v-bind:chartData="state2.chartData"/>
                        <div class="dougStats">
                            <h4>Description</h4>
                            <div class="dougList">
                                <div class="item">
                                    <span><i class="fas fa-square" id="green_box"></i> : A l'heure</span>
                                    <h3>{{ this.data['nb_in_time'].toLocaleString('fr-FR') }}</h3>
                                </div>
                                <div class="item">
                                    <span><i class="fas fa-square" id="red_box"></i> : Annulée</span>
                                    <h3>{{ this.data['nb_tot_ann'].toLocaleString('fr-FR') }}</h3>
                                </div>
                                <div class="item">
                                    <span><i class="fas fa-square" id="blue_box"></i> : Retard au départ</span>
                                    <h3>{{ this.data['nb_ret_dep'].toLocaleString('fr-FR') }}</h3>
                                </div>
                                <div class="item">
                                    <span><i class="fas fa-square" id="yellow_box"></i> : Retard a l'arrviée</span>
                                    <h3>{{ this.data['nb_ret_arr'].toLocaleString('fr-FR') }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="box item6">
                <div class="headerBox">
                    <h3>Retards des trains <span>(2019)</span> </h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <LineChart id="lineChart" v-bind:chartData="state1.chartData"/>
                </div>
            </section>

            <section class="box item7">
                <div class="headerBox">
                    <h3>Title</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
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
                    <h3>Retard Moyen <span>(2019 - minutes)</span></h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <BarChart id="barChart" v-bind:chartData="state4.chartData"/>
                </div>
            </section>

            <section class="box item9">
                <div class="headerBox">
                    <h3>Durée Moyenne Trajet </h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['dur_moy_tra'].toLocaleString('fr-FR') }} <span>(Minutes)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item10">
                <div class="headerBox">
                    <h3>Total Train Annulée</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['nb_tot_ann'].toLocaleString('fr-FR') }} <span>(2018 - 2021)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item11">
                <div class="headerBox">
                    <h3>Retards Moyen Départ</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['ret_moy_dep'].toLocaleString('fr-FR') }} <span>(Minutes)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item12">
                <div class="headerBox">
                    <h3>Retards Moyen Arrivée</h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <div class="minibox">
                        <h2>{{ this.data['ret_moy_arr'].toLocaleString('fr-FR') }} <span>(Minutes)</span>  </h2>
                    </div>
                </div>
            </section>

            <section class="box item13">
                <div class="headerBox">
                    <h3>Retard Moyen <span>(2018 - 2021)</span></h3>
                    <a><i class="fas fa-ellipsis-v"></i></a>
                </div>
                <div class="content">
                    <LineChart id="lineChart" v-bind:chartData="state5.chartData"/>
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
        name: 'Analytics',
        components: {
            Slidebar, BarChart, LineChart, DoughnutChart
        },

        data() {
            return {
                data: {},
                data2: {},
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
                state4: {
                    chartData: {},
                    chartOptions: {
                        responsive: true
                    }
                },
                state5: {
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
            this.fillData4();
            this.fillData5();
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
                this.data2 = this.getDatasets1();
                let data1 = [];
                let data2 = [];
                let data3 = [];

                for(let i in this.data2){
                    let spl = i.split('-');
                    if(spl[0] === '2019'){
                        data1.push(this.data2[i]['nb_train_retard_sup_15']);
                        data2.push(this.data2[i]['nb_train_retard_sup_30']);
                        data3.push(this.data2[i]['nb_train_retard_sup_60']);
                    }
                }

                this.state1.chartData = {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                              label: '60 min',
                              backgroundColor: '#499F68',
                              data: data3.reverse()
                        },
                        {
                              label: '30 min',
                              backgroundColor: '#348AF4',
                              data: data2.reverse()
                        },
                        {
                              label: '15 min',
                              backgroundColor: '#E56B6F',
                              data: data1.reverse()
                        },
                    ]
                }
            },

            fillData2() {
                this.data = this.getDatasets2();
                this.state2.chartData = {
                    datasets: [
                        {
                            backgroundColor: ['#499F68', '#348AF4', '#FFCF60', '#E56B6F', '#900C3E'],
                            data: [this.data['nb_in_time'], this.data['nb_ret_dep'], this.data['nb_ret_arr'], this.data['nb_tot_ann']]
                        },
                    ]
                }
            },

            fillData3() {
                let months = [];
                let data1 = [];
                let data2 = [];

                for(let i in this.data2){
                    let spl = i.split('-');
                    if(spl[0] === '2019'){
                        months.push(i);
                        data1.push(this.data2[i]['nb_train_retard_depart']);
                        data2.push(this.data2[i]['nb_train_retard_arrivee']);
                    }

                }

                this.state3.chartData = {
                    labels: months.reverse(),
                    datasets: [
                        {
                              label: 'Départ',
                              backgroundColor: '#499F68',
                              data: data1.reverse()
                        },
                        {
                              label: 'Arrivée',
                              backgroundColor: '#348AF4',
                              data: data2.reverse()
                        },
                    ]
                }
            },

            fillData4() {
                let months = [];
                let data1 = [];
                let data2 = [];
                for(let i in this.data2){
                    let spl = i.split('-');
                    if(spl[0] === '2019'){
                        months.push(i);
                        data1.push(this.data2[i]['retard_moyen_arrivee']);
                        data2.push(this.data2[i]['retard_moyen_depart']);
                    }
                }

                this.state4.chartData = {
                    labels: months.reverse(),
                    datasets: [
                        {
                              label: 'Départ',
                              backgroundColor: '#E56B6F',
                              data: data1.reverse()
                        },
                        {
                              label: 'Arrivée',
                              backgroundColor: '#348AF4',
                              data: data2.reverse()
                        },
                    ]
                }
            },

            fillData5() {
                let months = [];
                let data1 = [];
                let data2 = [];

                for(let i in this.data2){
                    months.push(i);
                    data1.push(this.data2[i]['retard_moyen_arrivee']);
                    data2.push(this.data2[i]['retard_moyen_depart']);
                }

                this.state5.chartData = {
                    labels: months.reverse(),
                    datasets: [
                        {
                              label: 'Départ',
                              backgroundColor: '#FFCF60',
                              data: data2.reverse()
                        },
                        {
                              label: 'Arrviée',
                              backgroundColor: '#348AF4',
                              data: data1.reverse()
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

    span {
        color: var(--home-grey-color);
        font-size: 12px;
        font-weight: bold;
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
    .item12 { grid-area: box9; }
    .item13 { grid-area: box10; }

    .main {
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-areas:
            'box1 box1 box1 box2 box2 box2 lin1 lin1 lin1 lin1 lin1 lin1'
            'box3 box3 box3 lin2 lin2 lin2 lin2 lin2 lin2 box4 box4 box4'
            'larg larg larg larg larg larg box5 box5 box5 box6 box6 box6'
            'larg larg larg larg larg larg box5 box5 box5 box7 box7 box7'
            'larg larg larg larg larg larg box8 box8 box8 box10 box10 box10'
            'larg larg larg larg larg larg box9 box9 box9 box10 box10 box10';
        grid-gap: 20px;
        background: var(--main-white-color);
    }

    .main .box {
        padding: 10px;
        background: var(--main-body-color);
        border: 2px solid var(--main-body-color);
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
    }

    .main .box .headerBox a {
        padding: 0 5px;
        color: var(--main-dark-blue-color);
        cursor: pointer;
        transition: 0.4s;
    }

    .main .box .headerBox a:hover {
        color: var(--home-red-color);
    }

    .main .box .content {
        display: flex;
        align-items: center;
        justify-items: center;
    }

    .main .box .content .minibox h2 {
        align-items: center;
    }

    .main .box .content .stats {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .main .box .content .stats .stats2 {
        display: flex;
        justify-content: space-between;
    }

    .main .box .content .stats .stats2 .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main .box .content .stats .stats2 .item i {
        margin-right: 10px;
        padding: 10px 15px;
        color: var(--main-white-color);
        background: var(--main-red-color);
        border-radius: 10px;
        font-size: 25px;
    }

    .main .box .content .stats .stats2 .item .it {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .main .box .content .dougCard {
        width: 100%;
        display: flex;
    }

    .main .box .content .dougCard .dougStats {
        width: 100%;
        margin-right: 10px;
    }

    .main .box .content .dougCard .dougStats h4 {
        margin: 0;
        padding: 20px 0;
        border-bottom: 1px solid black;
    }

    .main .box .content .dougCard .dougStats .dougList {
        padding: 20px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .main .box .content .dougCard .dougStats .dougList .item {
        padding: 10px;
    }

    .main .box .content .largeContent p {
        padding: 20px 0;
        text-align: justify;
        text-indent: 2em;
    }

    #green_box { color: var(--main-green-color); }
    #red_box { color: var(--main-red-color); }
    #blue_box { color: var(--main-blue-color); }
    #yellow_box { color: var(--main-yellow-color); }
    #barChart, #lineChart, #doughnutChart {
        width: 260px;
    }

    @media (max-width: 1500px){
        #barChart, #lineChart, #doughnutChart {
            width: 240px;
        }
    }

    @media (max-width: 1400px){
        #barChart, #lineChart, #doughnutChart {
            width: 220px;
        }
    }

    @media (max-width: 1300px){
        #barChart, #lineChart, #doughnutChart {
            width: 200px;
        }
    }

    @media (max-width: 1250px){
        .main {
            grid-template-columns: repeat(9, 1fr);
            grid-template-areas:
                'box3 box3 box3 lin1 lin1 lin1 lin1 lin1 lin1'
                'lin2 lin2 lin2 lin2 lin2 lin2 box4 box4 box4'
                'box1 box1 box1 box5 box5 box5 box6 box6 box6'
                'box2 box2 box2 box5 box5 box5 box7 box7 box7'
                'larg larg larg larg larg larg box10 box10 box10'
                'larg larg larg larg larg larg box8 box8 box8'
                'larg larg larg larg larg larg box9 box9 box9';
        }
    }

    @media (max-width: 1100px){
        .main {
            grid-template-columns: repeat(6, 1fr);
            grid-template-areas:
                'lin1 lin1 lin1 lin1 lin1 lin1'
                'box3 box3 box3 box4 box4 box4'
                'lin2 lin2 lin2 lin2 lin2 lin2'
                'box1 box1 box1 box2 box2 box2'
                'box6 box6 box6 box7 box7 box7'
                'box5 box5 box5 box8 box8 box8'
                'box5 box5 box5 box8 box8 box8'
                'box9 box9 box9 box10 box10 box10'
                'larg larg larg larg larg larg'
                'larg larg larg larg larg larg'
                'larg larg larg larg larg larg';
        }
    }

    @media (max-width: 850px){
        #analytics {
            grid-template-columns: 1fr;
        }
        #slide_bar {
            display: none;
        }
    }

    @media (max-width: 540px){
        .main {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 490px){
        .main .box .content .stats .stats2{
            flex-direction: column;
            flex-wrap: wrap;
        }
        .main .box .content .dougCard {
            flex-wrap: wrap;
        }
    }
</style>
