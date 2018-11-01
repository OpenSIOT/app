const Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from './views/App'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

window.ui = new Vue({

    el: "#app",

    components: {
        App
    },

});