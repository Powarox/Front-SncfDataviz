<script>
    import axios from "axios";
    import { mapActions } from 'vuex';
    console.log('Requests Api Loading...');

    export default {
        name: 'Api',
        data() {
            return {
                info: null,
                errored: false,
                loading: true,
                dataset1: {},
                dataset2: {},
                dataTmp: {},
            }
        },

        methods: {
            ...mapActions([
                'updateDataset1', 'updateDataset2',
            ]),

            GlobalTrainLate(){
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
                let val4 = 0;
                let val5 = 0;
                let val6 = 0;
                let val7 = 0;
                for(let res in this.dataset1){
                    val1 += this.dataset1[res]['nb_train_prevu'];
                    val2 += this.dataset1[res]['nb_annulation'];
                    val3 += this.dataset1[res]['nb_train_retard_depart'];
                    val4 += this.dataset1[res]['nb_train_retard_arrivee'];
                    val5 += this.dataset1[res]['nb_train_retard_sup_15'];
                    val6 += this.dataset1[res]['nb_train_retard_sup_30'];
                    val7 += this.dataset1[res]['nb_train_retard_sup_60'];
                }
                this.dataset2['global_train'] = val1;
                this.dataset2['nb_tot_ann'] = val2;
                this.dataset2['nb_ret_dep'] = val3;
                this.dataset2['nb_ret_arr'] = val4;
                this.dataset2['nb_ret_s15'] = val5;
                this.dataset2['nb_ret_s30'] = val6;
                this.dataset2['nb_ret_s60'] = val7;
                this.dataset2['nb_in_time'] = val1 - val2 - val4;
            },

            addDataFromOtherAPI(){
                for(let date in this.dataset1){
                    for(let key in this.dataTmp[date]){
                        this.dataset1[date][key] = this.dataTmp[date][key]
                    }
                }
            },

            upgradDatabase(){
                this.updateDataset1(this.dataset1);
                this.updateDataset2(this.dataset2);
                console.log('Requests Api Finished !');
            },

        },

        mounted() {
            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let tmp = '';

                    let duree_moyenne = 0;
                    let nb_annulation = 0;
                    let nb_train_prevu = 0;

                    let nb_train_retard_depart = 0;
                    let nb_train_retard_arrivee = 0;
                    let nb_train_retard_sup_15 = 0;
                    let nb_train_retard_sup_30 = 0;
                    let nb_train_retard_sup_60 = 0;

                    let retard_moyen_arrivee = 0;
                    let retard_moyen_depart = 0;
                    let retard_moyen_tous_trains_arrivee = 0;
                    let retard_moyen_tous_trains_depart = 0;
                    let retard_moyen_trains_retard_sup15 = 0;

                    for(let res in results){
                        let date = results[res].fields.date;
                        if(tmp === date){
                            duree_moyenne += results[res].fields.duree_moyenne;
                            nb_annulation += results[res].fields.nb_annulation;
                            nb_train_prevu += results[res].fields.nb_train_prevu;

                            nb_train_retard_depart += results[res].fields.nb_train_depart_retard;
                            nb_train_retard_arrivee += results[res].fields.nb_train_retard_arrivee;
                            nb_train_retard_sup_15 += results[res].fields.nb_train_retard_sup_15;
                            nb_train_retard_sup_30 += results[res].fields.nb_train_retard_sup_30;
                            nb_train_retard_sup_60 += results[res].fields.nb_train_retard_sup_60;

                            retard_moyen_arrivee += results[res].fields.retard_moyen_arrivee;
                            retard_moyen_depart += results[res].fields.retard_moyen_depart;
                            retard_moyen_tous_trains_arrivee += results[res].fields.retard_moyen_tous_trains_arrivee;
                            retard_moyen_tous_trains_depart += results[res].fields.retard_moyen_tous_trains_depart;
                            retard_moyen_trains_retard_sup15 += results[res].fields.retard_moyen_trains_retard_sup15;
                        }
                        else {
                            if(tmp !== ''){
                                this.dataset1[tmp] = {
                                    'duree_moyenne' : duree_moyenne,
                                    'nb_annulation' : nb_annulation,
                                    'nb_train_prevu' : nb_train_prevu,
                                    'nb_train_retard_depart' : nb_train_retard_depart,
                                    'nb_train_retard_arrivee' : nb_train_retard_arrivee,
                                    'nb_train_retard_sup_15' : nb_train_retard_sup_15,
                                    'nb_train_retard_sup_30' : nb_train_retard_sup_30,
                                    'nb_train_retard_sup_60' : nb_train_retard_sup_60,
                                    'retard_moyen_arrivee' : retard_moyen_arrivee,
                                    'retard_moyen_depart' : retard_moyen_depart,
                                    'retard_moyen_tous_trains_arrivee' : retard_moyen_tous_trains_arrivee,
                                    'retard_moyen_tous_trains_depart' : retard_moyen_tous_trains_depart,
                                    'retard_moyen_trains_retard_sup15' : retard_moyen_trains_retard_sup15,
                                }
                            }
                            duree_moyenne = results[res].fields.duree_moyenne;
                            nb_annulation = results[res].fields.nb_annulation;
                            nb_train_prevu = results[res].fields.nb_train_prevu;

                            nb_train_retard_depart = results[res].fields.nb_train_depart_retard;
                            nb_train_retard_arrivee = results[res].fields.nb_train_retard_arrivee;
                            nb_train_retard_sup_15 = results[res].fields.nb_train_retard_sup_15;
                            nb_train_retard_sup_30 = results[res].fields.nb_train_retard_sup_30;
                            nb_train_retard_sup_60 = results[res].fields.nb_train_retard_sup_60;

                            retard_moyen_arrivee = results[res].fields.retard_moyen_arrivee;
                            retard_moyen_depart = results[res].fields.retard_moyen_depart;
                            retard_moyen_tous_trains_arrivee = results[res].fields.retard_moyen_tous_trains_arrivee;
                            retard_moyen_tous_trains_depart = results[res].fields.retard_moyen_tous_trains_depart;
                            retard_moyen_trains_retard_sup15 = results[res].fields.retard_moyen_trains_retard_sup15;
                            tmp = date;
                        }
                    }
                    this.GlobalTrainLate();
                    this.addDataFromOtherAPI();
                    this.upgradDatabase();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)

            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=mouvements-sociaux-depuis-1994&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let stop = false;

                    for(let res in results){
                        if(!stop){
                            if(results[res].fields['date'] === '2018-02'){
                                this.dataTmp[results[res].fields['date']] = {
                                    'journees_perdues': results[res].fields['journees_perdues']
                                }
                                stop = true;
                            }
                            else {
                                this.dataTmp[results[res].fields['date']] = {
                                    'journees_perdues': results[res].fields['journees_perdues']
                                }
                            }
                        }
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
