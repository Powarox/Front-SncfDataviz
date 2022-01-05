
export default {
    state() {
        return {
            dataset1: {},
            dataset2: {},
        }
    },

    getters: {
        getDataset1(state) {
            return state.dataset1;
        },
        getDataset2(state) {
            return state.dataset2;
        },
    },

    actions: {
        updateDataset1({commit}, list) {
            commit('UPDATEDATASET1', list);
        },
        updateDataset2({commit}, list) {
            commit('UPDATEDATASET2', list);
        },
    },

    mutations: {
        UPDATEDATASET1(state, list) {
            state.dataset1 = list;
        },
        UPDATEDATASET2(state, list) {
            state.dataset2 = list;
        },
    }
}
