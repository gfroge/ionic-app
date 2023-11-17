<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { WidgetHeader } from "~/widgets";
import { CardCenter } from "~/shared";
import { FeatureAuth } from "~/features";
</script>

<template>
  <ion-page>
    <widget-header :with-profile="false" />
    <ion-content>
      <div class="page-content-wrapper wrapper">
        <card-center title="Login">
          <feature-auth />
        </card-center>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss">

.wrapper {
  margin-top: 16px;
}
</style>
