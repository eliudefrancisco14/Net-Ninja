<template>
  <div class="flex flex-col min-h-screen font-Embed-code bg-weather-primary">
    <SiteNavigation />
    <routerView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<style lang="scss" scoped></style>
