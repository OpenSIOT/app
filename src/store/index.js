import Vuex from "vuex";
import Vue from 'vue';

import menu from './modules/menu';

Vue.use(Vuex)

export const store = new Vuex.Store({

    modules: {
        menu
    },

})