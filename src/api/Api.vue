<script>
    import axios from "axios";
    import { mapActions } from 'vuex';
    console.log('Requests Api 1 Loading...');

    export default {
        name: 'Api',
        data() {
            return {
                info: null,
                errored: false,
                loading: true,
                datasets1: {},
                datasets2: {},
                dataTmp: {},
            }
        },

        methods: {
            ...mapActions([
                'updateDatasets1', 'updateDatasets2', 'addMessage', 'addFeedback', 'addLoading', 'delLoading'
            ]),

            GlobalTrainLate(){
                let count = 0;
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
                let val4 = 0;
                let val5 = 0;
                let val6 = 0;
                let val7 = 0;
                let moy1 = 0;
                let moy2 = 0;
                let moy3 = 0;
                let moy4 = 0;
                let moy5 = 0;
                let moy6 = 0;
                for(let res in this.datasets1){
                    count += 1;
                    val1 += this.datasets1[res]['nb_train_prevu'];
                    val2 += this.datasets1[res]['nb_annulation'];
                    val3 += this.datasets1[res]['nb_train_retard_depart'];
                    val4 += this.datasets1[res]['nb_train_retard_arrivee'];
                    val5 += this.datasets1[res]['nb_train_retard_sup_15'];
                    val6 += this.datasets1[res]['nb_train_retard_sup_30'];
                    val7 += this.datasets1[res]['nb_train_retard_sup_60'];
                    moy1 =+ this.datasets1[res]['duree_moyenne'];
                    moy2 =+ this.datasets1[res]['retard_moyen_arrivee'];
                    moy3 =+ this.datasets1[res]['retard_moyen_depart'];
                    moy4 =+ this.datasets1[res]['retard_moyen_tous_trains_arrivee'];
                    moy5 =+ this.datasets1[res]['retard_moyen_tous_trains_depart'];
                    moy6 =+ this.datasets1[res]['retard_moyen_trains_retard_sup15'];
                }
                this.datasets2['global_train'] = val1;
                this.datasets2['nb_tot_ann'] = val2;
                this.datasets2['nb_ret_dep'] = val3;
                this.datasets2['nb_ret_arr'] = val4;
                this.datasets2['nb_ret_s15'] = val5;
                this.datasets2['nb_ret_s30'] = val6;
                this.datasets2['nb_ret_s60'] = val7;
                this.datasets2['nb_in_time'] = val1 - val2 - val4;
                this.datasets2['dur_moy_tra'] = moy1 / count;
                this.datasets2['ret_moy_arr'] = moy2 / count;
                this.datasets2['ret_moy_dep'] = moy3 / count;
                this.datasets2['ret_moy_s15'] = moy6 / count;
                this.datasets2['ret_moy_all_arr'] = moy4 / count;
                this.datasets2['ret_moy_all_dep'] = moy5 / count;
            },

            addDataFromOtherAPI(){
                for(let date in this.datasets1){
                    for(let key in this.dataTmp[date]){
                        this.datasets1[date][key] = this.dataTmp[date][key]
                    }
                }
            },

            upgradDatabase(){
                this.delLoading();
                this.addMessage('Load Success ✔');
                this.addFeedback();
                this.updateDatasets1(this.datasets1);
                this.updateDatasets2(this.datasets2);
                console.log('Requests Api 1 Finished !');
            },

        },

        mounted() {
            this.addLoading();
            this.addMessage('Loading data...');
            this.addFeedback();

            axios
                .get('https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=-1&sort=date')
                .then(response => {
                    let results = response.data.records;
                    let count = 0;
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
                            count += 1;
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
                                this.datasets1[tmp] = {
                                    'duree_moyenne' : duree_moyenne / count,
                                    'nb_annulation' : nb_annulation,
                                    'nb_train_prevu' : nb_train_prevu,
                                    'nb_train_retard_depart' : nb_train_retard_depart,
                                    'nb_train_retard_arrivee' : nb_train_retard_arrivee,
                                    'nb_train_retard_sup_15' : nb_train_retard_sup_15,
                                    'nb_train_retard_sup_30' : nb_train_retard_sup_30,
                                    'nb_train_retard_sup_60' : nb_train_retard_sup_60,
                                    'retard_moyen_arrivee' : retard_moyen_arrivee / count,
                                    'retard_moyen_depart' : retard_moyen_depart / count,
                                    'retard_moyen_tous_trains_arrivee' : retard_moyen_tous_trains_arrivee / count,
                                    'retard_moyen_tous_trains_depart' : retard_moyen_tous_trains_depart / count,
                                    'retard_moyen_trains_retard_sup15' : retard_moyen_trains_retard_sup15 / count,
                                }
                            }
                            count = 1;
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
