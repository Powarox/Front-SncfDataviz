<template lang="html">
    <div id="footer">
        <footer>
            <section class="content">
                <div class="navigation">
                    <h3>Nagivation</h3>
                    <div class="line"></div>
                    <div>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Overview</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Pricing</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">News</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">About Us</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">FAQ</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Carrers</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Press</a>
                        <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank">Documentation</a>
                    </div>
                </div>

                <div class="contact">
                    <h3>Contact information</h3>
                    <div class="line"></div>
                    <p><i class="fas fa-map-marker-alt"></i> Unicaen Campus 2 Côte de nacre. Boulevard Maréchal Juin 14032 Caen Cedex 5</p>
                    <p><i class="far fa-envelope"></i> <a href="https://mail.google.com/" target="_blank">21711412@etu.unicaen.fr</a></p>

                    <p><i class="far fa-envelope"></i> <a href="https://mail.google.com/" target="_blank">21606393@etu.unicaen.fr</a></p>
                </div>

                <div class="newsletter">
                    <h3>Newsletter</h3>
                    <div class="line"></div>
                    <div class="form">
                        <input type="text" name="" placeholder="Your email">
                        <button type="submit" name="button">Subscribe</button>
                    </div>
                    <p>Connect : </p>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-instagram"></i></a>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-linkedin"></i></a>
                    <a href="https://github.com/Powarox2159/Dataviz-Sncf" target="_blank"><i class="ball fab fa-github"></i></a>
                </div>
            </section>
            <section class="bottom">
                <p>© Copyright 2020-2022. All Rights Reserverd</p>
            </section>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="css" scoped>
    #footer {
        color: #FFF;
        background: #333;
    }

    a {
        color: #E56B6F;
        text-decoration: none;
    }

    li {
         list-style-type: none;
    }

    footer .content {
        margin: 0 5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .line {
        width: 70px;
        height: 5px;
        background: #E56B6F;
        margin-bottom: 30px;
    }

    .navigation {
        padding: 20px;
    }

    .navigation div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .navigation a {
        margin: 5px 10px;
    }

    .contact {
        padding: 20px;
    }

    .newsletter {
        padding: 20px;
    }

    .newsletter .form {
        display: grid;
        grid-template-columns: 4fr 2fr;
    }

    .newsletter input {
        height: 30px;
        border: 0.5px solid #DDD;
        border-radius: 5px;
    }

    .newsletter button {
        height: 35px;
        margin: 0 10px;
        border: 1px solid #E56B6F;
        border-radius: 5px;
        color: #EEE;
        background: #E56B6F;
        font-weight: bold;
        cursor: pointer;
    }

    .newsletter i {
        margin: 0 5px;
        padding: 10px;
        border: 2px solid #E56B6F;
        border-radius: 50%;
        color: #FFF;
        background: #E56B6F;
        font-weight: bold;
        font-size: 25px;
    }


    footer .bottom {
        margin-top: 20px;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #CCC;
    }

    .bottom p {
        margin: 0;
    }

    @media (max-width: 925px){
        footer .content {
            margin: 0 1%;
        }
    }

    @media (max-width: 850px){
        .navigation, .contact, .newsletter{
            padding: 20px 10px;
        }
    }

    @media (max-width: 785px){
        footer .content {
            margin: 0 15%;
            grid-template-columns: 1fr;
        }

        .contact {
            margin: 20px 0;
        }
    }

    @media (max-width: 470px){
        footer .content {
            margin: 0 10%;
        }
    }

    @media (max-width: 370px){
        footer .content {
            margin: 0 5%;
        }
    }
</style>
