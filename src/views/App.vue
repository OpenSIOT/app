<template>
    <v-app dark>
        
      <title-bar></title-bar>

      <v-content>
        <empty-state icon="devices_other" title="Create an IOT project"
            caption="Creating project, you'll be able to upload your design and collaborate with people.">
            <v-btn>Create first project</v-btn>
        </empty-state>
        <popup-menu :menu="true"></popup-menu>
      </v-content>

      <v-footer></v-footer>
    </v-app>

</template>

<script>
import TitleBar from "../components/TitleBar.vue";
import EmptyState from '../components/EmptyState';
import PopupMenu from './PopupMenu';

export default {
  components: {
    TitleBar, EmptyState, PopupMenu
  }
};
</script>

<style>
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #444;
}

*::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
  background-color: #f90;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
</style>