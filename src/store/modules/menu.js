
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
    toggle(state) {
        state.visible = !state.visible
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}