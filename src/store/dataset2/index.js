
export default {
    state() {
        return {
            dataset3: {},
            dataset4: {},
        }
    },

    getters: {
        getDataset3(state) {
            return state.dataset3;
        },
        getDataset4(state) {
            return state.dataset4;
        },
    },

    actions: {
        updateDataset3({commit}, list) {
            commit('UPDATEDATASET3', list);
        },
        updateDataset4({commit}, list) {
            commit('UPDATEDATASET4', list);
        },
    },

    mutations: {
        UPDATEDATASET3(state, list) {
            state.dataset4 = list;
        },
        UPDATEDATASET4(state, list) {
            state.dataset4 = list;
        },
    }
}
