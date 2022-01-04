<script>
    import { defineComponent } from 'vue'
    import { Line } from 'vue3-chart-v2'

    export default defineComponent({
        name: 'LineChart',
        extends: Line,
        mounted () {
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May'],
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                },
                datasets: [
                    {
                          label: 'GitHub Commits',
                          backgroundColor: '#f87979',
                          data: [40, 20, 12, 39, 10]
                    },
                    {
                          label: 'GitHub',
                          backgroundColor: '#348AF4',
                          data: [40, 39, 50, 40, 20]
                    },
                    {
                          label: 'Commits',
                          backgroundColor: 'green',
                          data: [23, 35, 24, 50, 5]
                    }
                ]
            })
        }
    })
</script>
