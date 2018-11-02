<template>
    <v-list two-line subheader>
          <v-subheader inset>General</v-subheader>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-subheader inset>Files</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { icon: 'create_new_folder', iconClass: 'white--text', title: 'New' },
          { icon: 'folder_open', iconClass: 'white--text', title: 'Open' },
          { icon: 'save', iconClass: 'white--text', title: 'Work' },
          { icon: 'import_export', iconClass: 'white--text', title: 'Import / Export' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        ]
      }
    }
}
</script>

<style>

</style>
