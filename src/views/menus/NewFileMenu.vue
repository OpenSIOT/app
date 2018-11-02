<template>
    <div>
        <v-card>
            <v-layout>
                <v-btn @click="submit">Create New Project</v-btn>
            </v-layout>
        </v-card>
        <v-layout row>
            <v-subheader class="pl-5">Starter Templates</v-subheader>
        </v-layout>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex md3 sm4 v-for="i in 7" :key="i">
                    <project-card></project-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import ProjectCard from '../../components/ProjectCard';

export default {
  data() {
    return {
      panel: [false],
      name: '',
      theme: ''
    };
  },

  components: {
      ProjectCard
  }
};
</script>

<style>
</style>
