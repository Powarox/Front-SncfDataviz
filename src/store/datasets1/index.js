
export default {
    state() {
        return {
            datasets1: {},
            datasets2: {},
        }
    },

    getters: {
        getDatasets1(state) {
            return state.datasets1;
        },
        getDatasets2(state) {
            return state.datasets2;
        },
    },

    actions: {
        updateDatasets1({commit}, list) {
            commit('UPDATEDATASETS1', list);
        },
        updateDatasets2({commit}, list) {
            commit('UPDATEDATASETS2', list);
        },
    },

    mutations: {
        UPDATEDATASETS1(state, list) {
            state.datasets1 = list;
        },
        UPDATEDATASETS2(state, list) {
            state.datasets2 = list;
        },
    }
}
