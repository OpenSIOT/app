<template>
    <v-card color="cyan darken-2" class="white--text">
      <v-layout row>
        <v-flex xs5 class="py-0 pr-0">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            height="125px" contain></v-img>
        </v-flex>
        <v-flex xs7 class="py-0 pl-0">
          <v-card-title primary-title>
            <div>
              <div class="body-4">Supermodel</div>
              <div>Foster the People</div>
              <div>(2014)</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-expansion-panel v-model="panel">
            <v-expansion-panel-content>
                <v-btn slot="header">Read More</v-btn>
                <v-card>
                    <v-card-text class="grey lighten-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {};
</script>

<style>
.v-expansion-panel__header {
  padding: 0 ;
  min-height: auto;
}
</style>
