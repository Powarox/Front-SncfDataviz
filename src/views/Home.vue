<template>
    <div id="home">
        <Feedback @click="delFeed()"/>

        <section class="title">
            <img src="../assets/logo.png" alt="">
            <h1>Dataviz SNCF</h1>
            <img src="../assets/logo.png" alt="">
        </section>

        <section class="block" id="light">
            <div class="content">
                <h3>Vuejs IHM</h3>
                <h1>Présentation du projet</h1>
                <p>Dans le cadre notre Master 2 d'informatique nous avons eu pour objectif de réaliser une application, dans laquel ne devions mettre en pratique toute nos connaissance acquise au cours du module d'IHM.</p>

                <h4>Réalisation</h4>
                <p>Pour réaliser cette application nous devions aussi utiliser des données fournies par une API quelconque, ainsi que le framework Vuejs pour la partie developpement.</p>

                <h4>Quelques précisions</h4>
                <p>L'application que nous devons créer devra contenir plusieurs interfaces de visualisation tels que des tableaux, des maps ou encore des graphs. Le but est d'obtenir une application consistente, ayant un obejctif et qui soit facilement utilisable et utiles.</p>
            </div>
            <div class="images">
                <img src="../assets/dashboard1.png" alt="">
            </div>
        </section>

        <section class="block">
            <div class="images">
                <img src="../assets/carte.png" alt="">
            </div>
            <div class="content">
                <h3>Vuejs IHM</h3>
                <h1>Developpement</h1>
                <p>Voici quelques informations utiles qui vous permettrons de mieux comprendre notre application, et donc de savourer votre expérience parmi nous. 😉</p>

                <h4>Interface</h4>
                <p>Notre application est constitué de plusieur page, nous retrevons tout d'abord la page Home. Ensuite nous avons la page Analytics qui regroupe plusieurs visualisation liée au retard des train. En troisième nous avons une page Map en cours de developpement où l'on peut retrouver une carte de la France. Pour finir nous avons aussi une page About </p>

                <h4>Données utilisées</h4>
                <p>Pour construire cette application nous avons choisi d'utiliser des données provenant de l'API de la SNCF. Les données que nous récupérons correspondent aux régularités mensuelles des trains.</p>
            </div>
        </section>

        <section class="block2" id="light">
            <div class="content2">
                <h3>Smart Stats</h3>
                <h1>Adances Insights</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>

            <div class="images">
                <img src="../assets/barChart.png" alt="">

                <div class="img">

                </div>
            </div>
        </section>

        <section class="price">
            <div class="card">
                <i class="fab fa-vuejs"></i>
                <h4>Stardard Plan</h4>
                <h1>$5.99</h1>
                <span>Per Month</span>
                <div class="content">
                    <p>1 Team Member</p>
                    <p>Advanced Analytics</p>
                    <p>AI Driven Site Insight</p>
                    <p>User Tracking</p>
                    <p>Behavior Recordings</p>
                    <p>Heatmaps</p>
                </div>
            </div>

            <div class="card" id="ultimate">
                <i class="fab fa-vuejs"></i>
                <h4>Ultimate Plan</h4>
                <h1>$12.99</h1>
                <span>Per Month</span>
                <div class="content">
                    <p>1 Team Member</p>
                    <p>Advanced Analytics</p>
                    <p>AI Driven Site Insight</p>
                    <p>User Tracking</p>
                    <p>Behavior Recordings</p>
                    <p>Heatmaps</p>
                </div>
            </div>

            <div class="card">
                <i class="fab fa-vuejs"></i>
                <h4>Premium Plan</h4>
                <h1>$9.99</h1>
                <span>Per Month</span>
                <div class="content">
                    <p>1 Team Member</p>
                    <p>Advanced Analytics</p>
                    <p>AI Driven Site Insight</p>
                    <p>User Tracking</p>
                    <p>Behavior Recordings</p>
                    <p>Heatmaps</p>
                </div>
            </div>
        </section>

        <section class="paiement">
            <button @click="addFeed()">
                <i class="fab fa-bitcoin"></i> Paiement <i class="fab fa-bitcoin"></i>
            </button>
        </section>

        <section class="block" id="light">
            <div class="images">
                <img src="../assets/dashboard2.png" alt="">
            </div>
            <div class="content">
                <h3>Vuejs IHM</h3>
                <h1>En Developpement</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Feedback from '../components/Feedback.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Home',
        components: {
            Feedback,
        },
        methods: {
            ...mapActions([
                'addFeedback', 'delFeedback',
            ]),
            ...mapGetters([
                'getFeedback',
            ]),
            addFeed(){
                this.addFeedback();
            },
            delFeed(){
                this.delFeedback();
            },
        }
    }

</script>

<style lang="css" scoped>
    #home {
        padding-top: 30px;
    }

    .title {
        margin-bottom: 30px;
        height: 50px;
        display: flex;
        justify-content: center;
        font-size: 25px;
    }

    .title h1 {
        margin: 0 10px;
    }

    #light {
        background: var(--main-white-color);
    }

    .img {
        width: 400px;
        height: 250px;
        background: var(--home-red-color);
    }

    .block {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        flex-wrap: nowrap;
        padding: 20px 0;
    }

    .block .content {
        max-width: 450px;
        padding: 20px 50px;
        text-align: justify;
    }

    .block .content p {
        text-indent: 2em;
    }

    .block .images  {
        padding: 20px;
    }

    .block .images img {
        width: 100%;
        max-width: 500px;
    }

    .block2 {
        padding: 30px 0;
    }

    .block2 .content2{
        max-width: 600px;
        margin: auto;
        text-align: center;
    }

    .block2 .images{
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .block2 .images img {
        width: 400px;
        height: 250px;
        margin: 10px 30px;
    }

    .price {
        max-width: 900px;
        margin: 40px auto;
        display: flex;
        justify-content: center;
        box-shadow: 0 0 20px var(--home-shadow-color);
    }

    .price .card {
        width: 100%;
        padding: 20px;
        display: grid;
        justify-items: center;
        align-items: center;
        background: var(--main-white-color);
    }

    .price .card h4 {
        font-size: 15px;
        text-transform: uppercase;
    }

    .price .card i {
        color: var(--home-red-color);
        font-size: 50px;
    }

    .price .card h4 {
    }

    .price .card h1 {
        margin: 0;
        color: var(--home-red-color);
        font-size: 50px;
    }

    .price .card span {
        margin: 15px;
        color: var(--home-grey-color);
    }

    .price .card .content {
        width: 100%;
        margin: 30px;
        text-align: center;
    }

    .price .card .content p {
        margin: 0 20px;
        padding: 20px 0;
        border-top: 1px solid rgba(200, 200, 200, 0.3);
    }

    #ultimate {
        color: var(--home-white-color);
        background: var(--home-red-color);
    }

    #ultimate h1 {
        color: var(--home-white-color);
    }

    #ultimate i {
        color: var(--home-white-color);
    }

    #ultimate .card .content p {
        margin: 0 20px;
        padding: 20px 0;
        border-top: 1px solid rgba(255, 237, 232, 0.3);
    }

    .paiement {
        display: flex;
        justify-content: center;
    }

    .paiement button {
        margin-bottom: 40px;
        padding: 20px;
        color: var(--main-white-color);
        background: var(--main-red-color);
        border: 2px solid var(--main-red-color);
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;
    }

    .paiement button:hover {
        color: var(--main-white-color);
        background: var(--main-green-color);
        border: 2px solid var(--main-green-color);
        box-shadow: 0 0 50px var(--main-red-color);
    }

    @media (max-width: 1100px){
        .block .content {
            padding: 20px 40px;
        }
    }

    @media (max-width: 1000px){
        .block .content {
            padding: 20px 30px;
        }
    }

    @media (max-width: 900px){
        .block {
            flex-wrap: wrap;
        }
    }

    @media (max-width: 700px){
        .price {
            margin: 40px 20%;
            display: grid;
            grid-template-columns: 1fr;
        }
    }

</style>
