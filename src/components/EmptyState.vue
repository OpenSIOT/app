<template>
    <v-layout row justify-center class="text-md-center">
        <v-layout column class="empty-container" align-center justify-center>
            <v-icon :size="160">{{icon}}</v-icon>
            <div class="display-1 pa-2">{{title}}</div>
            <div class="body-2 pa-3">{{caption}}</div>
            <slot></slot>
        </v-layout>
    </v-layout>
</template>

<script>
export default {
    props: ["title", "caption", "icon"]
}
</script>

<style scoped>
    .empty-container {
        border-radius: 50%;
        background-color: #444;
        width: 500px;
        max-width: 500px;
        height: 500px;
    }
    .v-icon {
        width: 160px;
        height: 160px;
    }
</style>
