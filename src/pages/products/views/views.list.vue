<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { WidgetProductsList, WidgetHeader } from "~/widgets";
</script>

<template>
  <ion-page>
    <widget-header />
    <ion-content>
      <widget-products-list />
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
