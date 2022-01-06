<template>
    <div id="Page">
        <section class="left">
            <!-- <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Type To Search">
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div> -->

            <h2>Search _____________________ Q</h2>

            <img src="../assets/carte.png" alt="ici">
        </section>

        <section class="right">
            <h3>Description title</h3>

            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="list">
                <li>Une peu de text ici</li>
                <li>Une peu de text ici</li>
                <li>Une peu de text ici</li>

                <li>Une peu de text ici</li>
                <li>Une peu de text ici</li>
                <li>Une peu de text ici</li>
            </div>

            <div class="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="tab">
                <table>
                    <thead>
                       <tr>
                           <th colspan="2">The table header</th>
                       </tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>un test</td>
                            <td>deux test</td>
                        </tr>
                        <tr>
                            <td>un test</td>
                            <td>deux test</td>
                        </tr>
                        <tr>
                            <td>un test</td>
                            <td>deux test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Page',
    }
</script>

<style lang="css" scoped>
    #Page {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .left {
        padding: 15px;
    }

    .left img {
        width: 100%;
    }

    .right {
        padding: 15px;
        padding-top: 50px;
    }

    .right .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .right .text p {
        text-indent: 2em;
        text-align: justify;
    }

    .right .tab {
        /* padding-top: 30px; */
    }

    table {
        width: 100%;
        border: 1px solid #333;
    }

    td {
        width: 50%;
        height: 30px;
        border: 1px solid #333;
    }

    thead {
        background-color: #333;
        color: #fff;
    }


/* --- Search Box --- */
    .search-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(0%, -100%);
        background: #2f3640;
        height: 30px;
        border-radius: 40px;
        padding: 10px;
    }

    .search-box:hover > .search-txt {
        width: 240px;
        padding: 0 6px;
    }

    .search-box:hover > .search-btn {
        background: white;
    }

    .search-txt:focus {
        width: 240px;
    }

    .search-btn {
        color: #e84118;
        float: right;
        width: 40px;
        height: 30px;
        border-radius: 50%;
        background: #2f3640;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.6s;
    }

    .search-txt {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: white;
        font-size: 16px;
        transition: 0.4s;
        line-height: 30px;
        width: 0px;
        transition: 0.8s;
    }
</style>
