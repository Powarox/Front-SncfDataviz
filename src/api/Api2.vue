<script>
    import axios from "axios";
    import { mapActions } from 'vuex';
    console.log('Requests Api 2 Loading...');

    export default {
        name: 'Api',
        data() {
            return {
                info: null,
                errored: false,
                loading: true,
                datasets3: [],
                datasets4: [],
            }
        },

        methods: {
            ...mapActions([
                'updateDatasets3', 'updateDatasets4',
            ]),

            upgradDatabase(){
                this.updateDatasets3(this.datasets3);
                this.updateDatasets4(this.datasets4);
                console.log('Requests Api 2 Finished !');
            },

        },

        mounted() {
            // Get Worksit List
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-chantiers&q=&rows=10')
                .then(response => {
                    let results = response.data.records;

                    for(let res in results){
                        this.datasets3 .push({
                            'gare': results[res].fields.gare,
                            'libelle': results[res].fields.libelle,
                            'lattitude': results[res].fields.geo_point_2d[0],
                            'longitude': results[res].fields.geo_point_2d[1],
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

            // Get Train Station List
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=&rows=10')
                .then(response => {
                    let results = response.data.records;

                    for(let res in results){
                        this.datasets4.push({
                            'gare': results[res].fields.libelle,
                            'commune': results[res].fields.commune,
                            'departement': results[res].fields.departemen,
                            'lattitude': results[res].fields.geo_point_2d[0],
                            'longitude': results[res].fields.geo_point_2d[1],
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
</script>
