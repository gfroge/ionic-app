<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { WidgetHeader } from "~/widgets";
import { EntityProductInfo, getProduct, FullProductInfo } from "~/entities";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const product = reactive<FullProductInfo>({} as FullProductInfo);

onMounted(async () => {
  const { data } = await getProduct(route.params.productId as string);
  Object.assign(product, data);
});
</script>

<template>
  <ion-page>
    <widget-header back-button/>
    <ion-content>
      <div class="wrapper">
        <entity-product-info
          v-if="Object.keys(product).length"
          :product="product"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss">
.wrapper{
  margin-top: 16px;
}
</style>
