<script setup lang="ts">
import { IonRouterOutlet, IonApp } from "@ionic/vue";
</script>

<template>
  <ion-app mode="ios">
    <ion-router-outlet />
  </ion-app>
</template>


<style lang="scss">
.page-content-wrapper{
  padding-bottom: calc($safe_area_bottom + 10px);
}
</style>