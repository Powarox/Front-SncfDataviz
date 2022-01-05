<script>
    import { mapGetters } from 'vuex';
    import { defineComponent } from 'vue';
    import { Line } from 'vue3-chart-v2';

    export default defineComponent({
        name: 'LineChart',
        extends: Line,
        // options: {
        //     plugins: {
        //         legend: {
        //             position: 'top',
        //           },
        //         title: {
        //             display: true,
        //             text: 'Chart.js Line Chart'
        //         },
        //     },
        // },

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
                months.push(i);
                dataset1.push(data[i]['nb_train_retard_sup_15']);
                dataset2.push(data[i]['nb_train_retard_sup_30']);
                dataset3.push(data[i]['nb_train_retard_sup_60']);
            }

            console.log(months);

            this.renderChart({
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
            })
        }
    })
</script>
