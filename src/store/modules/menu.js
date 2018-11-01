
const state = {
    visible: true,
    hasTabs: null,
    tabs: [],
    activeTab: null,
}

// getters
const getters = {
    hasTabs(state) {
        return state.tabs.length == 0
    }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}