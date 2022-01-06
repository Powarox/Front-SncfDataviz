<template>
    <div id="home">
        <section>
            <h1>Titre du projet ici </h1>
        </section>

        <section class="block" id="elem2">
            <div class="content">
                <h3>Powered by AI</h3>
                <h1>Advance Insides</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <img src="../assets/dashboard1.png" alt="">
        </section>

        <section class="block" id="elem1">
            <img src="../assets/dashboard2.png" alt="">
            <div class="content">
                <h3>Powered by AI</h3>
                <h1>Advance Insides</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </section>

        <section class="block" id="elem2">
            <div class="content">
                <h3>Powered by AI</h3>
                <h1>Advance Insides</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <h4>Un petit quelque chose</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <img src="../assets/carte.png" alt="">
        </section>

        <section class="block2" id="elem1">
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
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {

        },
    }

</script>

<style lang="css" scoped>
    #home {
        padding: 30px;
    }

    #elem1 {
        background: #EEE;
    }

    img {
        width: 400px;
    }

    .img {
        width: 400px;
        height: 250px;
        background: #FB565E;
    }

    .block {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
        padding: 20px 0;
    }

    .block .content {
        max-width: 450px;
        padding: 20px 50px;
    }

    .block .img {
        width: 300px;
        max-width: 400px;
        height: 300px;
        padding: 20px 50px;
        background: #FB565E;
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
    }

    .block2 .images img {
        width: 400px;
        height: 250px;
        margin: 10px 30px;
    }

    .price {
        max-width: 900px;
        margin: auto;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        box-shadow: 0 0 10px #6D6969;
    }

    .price .card {
        width: 100%;
        padding: 20px;
        display: grid;
        justify-items: center;
        align-items: center;
        background: #FFF;
    }

    .price .card h4 {
        font-size: 15px;
        text-transform: uppercase;
    }

    .price .card i {
        color: #FB565E;
        font-size: 50px;
    }

    .price .card h4 {
    }

    .price .card h1 {
        margin: 0;
        color: #FB565E;
        font-size: 50px;
    }

    .price .card span {
        margin: 15px;
        color: #6D6969;
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
        color: #FFFAF8;
        background: #FB565E;
    }

    #ultimate h1 {
        color: #FFFAF8;
    }

    #ultimate i {
        color: #FFFAF8;
    }

    #ultimate .card .content p {
        margin: 0 20px;
        padding: 20px 0;
        border-top: 1px solid rgba(255, 237, 232, 0.3);
    }

</style>
