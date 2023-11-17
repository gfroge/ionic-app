<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { WidgetHeader } from "~/widgets";
import { CardCenter } from "~/shared";
import { EntityProduct } from "~/entities";
</script>

<template>
  <ion-page>
    <widget-header />
    <ion-content> 
      <CardCenter title="title"/>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
