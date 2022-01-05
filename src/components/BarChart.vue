<script>
    import { mapGetters } from 'vuex';
    import { defineComponent } from 'vue'
    import { Bar } from 'vue3-chart-v2'

    export default defineComponent({
        name: 'BarChart',
        extends: Bar,

        data() {
            return {
                data: [],
            }
        },

        methods: {
            ...mapGetters([
                'getData',
            ]),

            updateData(){
                return this.getData();
            }
        },

        mounted () {
            let data = this.updateData();
            let months = [];
            let dataset1 = [];
            let dataset2 = [];
            let dataset3 = [];

            for(let i in data){
                let count = 0;
                if(data[i]['journees_perdues']){
                    months.push(i);
                    dataset1.push(data[i]['journees_perdues']);
                    dataset2.push(data[i]['nb_train_prevu']);
                    count = data[i]['nb_train_retard_depart'] + data[i]['nb_train_retard_arrivee'];
                    dataset3.push(count);
                }
            }

            console.log(months);

            this.renderChart({
                labels: months.reverse(),
                datasets: [
                    {
                          label: 'Train retards',
                          backgroundColor: '#499F68',
                          data: dataset1.reverse()
                    },
                    // {
                    //       label: 'Train total',
                    //       backgroundColor: '#348AF4',
                    //       data: dataset2.reverse()
                    // },
                    // {
                    //       label: 'Train annulé',
                    //       backgroundColor: '#E56B6F',
                    //       data: dataset3.reverse()
                    // },

                ]
            })

            // this.renderChart({
            //     labels: ['January', 'February', 'March', 'April', 'May'],
            //     datasets: [
            //         {
            //             label: 'GitHub',
            //             backgroundColor: '#f87979',
            //             data: [40, 20, 12, 39, 10,]
            //         },
            //         {
            //             label: 'Commits',
            //             backgroundColor: '#348AF4',
            //             data: [39, 80, 40, 20, 12]
            //         }
            //     ]
            // })
        }
    })
</script>
