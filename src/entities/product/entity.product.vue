<script setup lang="ts">
import { IonItem, IonLabel, IonThumbnail } from "@ionic/vue";

defineProps<{
  title?: string;
  description?: string;
  imagePath?: string;
}>();
</script>

<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <img
        v-if="imagePath"
        alt=""
        :src="imagePath"
      />
    </ion-thumbnail>
    <div class="label">
      <h2
        class="label__title"
        v-text="title"
      />
      <p
        class="label__description"
        v-text="description"
      />
    </div>
  </ion-item>
</template>

<style scoped lang="scss">
ion-thumbnail {
  --size: 60px;
  --border-radius: 14px;
}
ion-item {
  --border-style: none;
}
.label {
  &__title {
    @include h2;
    margin: 4px 0;
  }

  &__description {
    @include h4;
    margin: 4px 0;
  }
}
</style>
