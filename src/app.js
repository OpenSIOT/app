const Vue = require('vue');

import Light from './components/Light.vue'

window.ui = new Vue({

    el: "[openiot-app]",

    components: {
        'iot-light': Light
    },

});
