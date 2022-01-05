<script>
    import { defineComponent } from 'vue'
    import { Bar } from 'vue3-chart-v2'

    export default defineComponent({
        name: 'BarChart',
        extends: Bar,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'GitHub',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10,]
                    },
                    {
                        label: 'Commits',
                        backgroundColor: '#348AF4',
                        data: [39, 80, 40, 20, 12]
                    }
                ]
            })
        }
    })
</script>
