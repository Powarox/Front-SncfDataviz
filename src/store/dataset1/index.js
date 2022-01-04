
export default {
    state() {
        return {
            data: {},
        }
    },

    getters: {
        getData(state) {
            return state.data;
        },
    },

    actions: {
        updateData({commit}, list) {
            commit('UPDATEDATA', list);
        },
    },

    mutations: {
        UPDATEDATA(state, list) {
            state.data = list;
        },
    }
}
