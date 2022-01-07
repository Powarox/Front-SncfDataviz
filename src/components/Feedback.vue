<template lang="html">
    <div id="feedback">
        <div class="feedback">
            <transition name="fade">
                <p v-if="change"><i class="fas fa-times"></i> Fonction en developpement</p>
            </transition>
        </div>
        <div v-if="change">
            {{ check() }}
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Feedback",
        methods: {
            ...mapActions([
                'addFeedback', 'delFeedback',
            ]),

            del(){
                this.delFeedback;
            },

            check() {
                setTimeout(() => {
                    this.delFeedback();
                }, 3500);
            }
        },
        computed: {
            ...mapGetters([
                'getFeedback',
            ]),

            change(){
                return this.getFeedback;
            }
        }
    }
</script>

<style lang="css" scoped>
    .feedback {
        width: fit-content;
        padding: 0 10px;
        position: fixed;
        top: 12%;
        right: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--main-white-color);
        background: var(--main-dark-blue-color);
        border-radius: 10px;
        font-weight: bold;
        font-family: sans-serif;
        cursor: pointer;
    }

    .feedback i {
        color: var(--main-red-color);
        padding: 0 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
