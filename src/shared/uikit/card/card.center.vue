<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

defineProps<{
  title?: string;
}>();
</script>

<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-title
        class="card__title"
        v-text="title"
      />
    </ion-card-header>

    <ion-card-content>
      <slot />
    </ion-card-content>
  </ion-card>
</template>

<style scoped lang="scss">
.card {
  margin: 0 auto;
  max-width: 400px;
  width: 100%;

  &__title {
    @include h1
  }

}
</style>
