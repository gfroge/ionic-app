<script setup lang="ts">
import { CardCenter } from "~/shared";
import { FullProductInfo } from "./types/types.products";
import { IonChip, IonImg } from "@ionic/vue";
import { onMounted, reactive, ref } from "vue";

const textInfo = reactive({});

const productImages = ref<Array<string>>([]);

const props = defineProps<{
  product: FullProductInfo;
}>();

onMounted(() => {
  const { images, id, thumbnail, ..._textInfo } = props.product;
  Object.assign(textInfo, _textInfo);
  productImages.value = images;
});
</script>

<template>
  <card-center :title="product.title">
    <div
      v-for="key of Object.keys(textInfo)"
      :key="key"
      class="info"
    >
      <div>
        <ion-chip v-text="key" />
      </div>
      <p
        class="info__text"
        v-text="textInfo[key]"
      />
    </div>
    <div class="info__gallery">
      <div
        v-for="path of productImages"
        class="info__image"
      >
        <ion-img :src="path" />
      </div>
    </div>
  </card-center>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  &__text {
    @include h3;
  }
  &__gallery {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__image {
    max-width: 100%;
    width: 100%;
  }
}
</style>
