<template>
    <v-toolbar class="elevation-0" dense>

        <v-btn icon class="logo">
            <v-icon>devices_other</v-icon>
        </v-btn>

        <v-toolbar-items>
            <v-btn flat>File</v-btn>
            <v-btn flat>Edit</v-btn>
            <v-btn flat>Preferences</v-btn>
            <v-btn flat>Help</v-btn>
            <v-btn flat>Window</v-btn>
        </v-toolbar-items>

        <!--v-toolbar-title class="v-sub-title">OpenIOT</v-toolbar-title-->

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>minimize</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>{{fullscreen ? 'fullscreen-screen' : 'fullscreen'}}</v-icon>
        </v-btn>

        <v-btn class="v-icon-button">
            <v-icon>close</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            fullscreen: false
        }
    },

    methods: {

    }
};
</script>

<style scoped>
    .v-toolbar {
        padding: 0;
        min-height: auto;
    }
    .v-btn {
        padding: 0 5px;
        min-width: auto;
    }
    .v-icon-button {
        width: 30px;
        height: 30px;
    }
    .logo {
        margin-right: 10px;
    }
    .v-sub-title {
        margin: 0;
        text-align: center;
    }
</style>
