const Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import { store } from './store/index';

import App from './views/App'

window.ui = new Vue({

    el: "#app",

    store,

    components: {
        App
    },

    render: h => h(App)

});