
export default {
    state() {
        return {
            data: {},
        }
    },

    getters: {
        getFilter(state) {
            return state.filter;
        },
    },

    actions: {
        updateGrid({commit}, list) {
            commit('UPDATEGRID', list);
        },
    },

    mutations: {
        UPDATEGRID(state, list) {
            state.data = list;
        },
    }
}
