<template>
    <v-dialog v-model="menu" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <title-bar></title-bar>
        <v-layout>
          <v-flex md3 sm4 class="sidebar lighten-2 primary">
            <v-layout>
              <v-btn icon><v-icon>navigate_before</v-icon></v-btn>
            </v-layout>
            <double-list></double-list>
          </v-flex>
          <v-divider class="mx-0" inset vertical></v-divider>
          <v-flex>
            <v-list three-line subheader>
              <v-subheader>User Controls</v-subheader>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Content filtering</v-list-tile-title>
                  <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Password</v-list-tile-title>
                  <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>General</v-subheader>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Notifications</v-list-tile-title>
                  <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Sound</v-list-tile-title>
                  <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                  <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
</template>

<script>
import TitleBar from "../components/TitleBar";
import DoubleList from "../components/DoubleList";
import { mapState } from "vuex";

export default {
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  computed: {
    ...mapState({
      menu: state => state.menu.visible
    })
  },

  components: {
    TitleBar, DoubleList
  }
};
</script>

<style scoped>
  .sidebar {
    
  }
</style>
