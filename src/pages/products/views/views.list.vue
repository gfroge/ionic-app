<script setup lang="ts">
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { WidgetProductsList, WidgetHeader } from "~/widgets";
</script>

<template>
  <ion-page>
    <widget-header />
    <ion-content>
      <div class="page-content-wrapper">
        <widget-products-list />
        <div class="button">
          <router-link to="/products/create">
            <ion-button>add product</ion-button>
          </router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss">
.button {
  text-align: center;
}
</style>
