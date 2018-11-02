<template>
    <v-dialog v-model="menu" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <title-bar></title-bar>
        <v-layout>
          <v-flex md3 sm4 class="sidebar lighten-2 primary">
            <v-layout>
              <v-btn icon @click="toggle">
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-layout>
            <double-list></double-list>
          </v-flex>
          <v-divider class="mx-0" inset vertical></v-divider>
          <v-flex>
            <new-file-menu></new-file-menu>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
</template>

<script>
import TitleBar from "../components/TitleBar";
import DoubleList from "../components/DoubleList";
import NewFileMenu from './menus/NewFileMenu';

import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  methods: {
    ...mapMutations({
        toggle: "menu/toggle"
    })
  },

  computed: {
    ...mapState({
      menu: state => state.menu.visible
    })
  },

  components: {
    TitleBar, DoubleList, NewFileMenu
  }
};
</script>

<style scoped>
  .sidebar {
    
  }
</style>
