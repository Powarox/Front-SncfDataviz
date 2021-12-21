<template>
    <div id="Page">
        <section class="left">
            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Type To Search">
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </section>

        <section class="right">

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
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    #Page {

    }

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
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
