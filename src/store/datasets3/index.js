
export default {
    state() {
        return {
            datasets3: {},
            datasets4: {},
        }
    },

    getters: {
        getDatasets3(state) {
            return state.datasets3;
        },
        getDatasets4(state) {
            return state.datasets4;
        },
    },

    actions: {
        updateDatasets3({commit}, list) {
            commit('UPDATEDATASETS3', list);
        },
        updateDatasets4({commit}, list) {
            commit('UPDATEDATASETS4', list);
        },
    },

    mutations: {
        UPDATEDATASETS3(state, list) {
            state.datasets3 = list;
        },
        UPDATEDATASETS4(state, list) {
            state.datasets4 = list;
        },
    }
}
