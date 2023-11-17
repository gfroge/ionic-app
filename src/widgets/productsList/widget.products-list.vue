<script setup lang="ts">
import { onMounted, computed } from "vue";
import { EntityProduct } from "~/entities";
import { getProducts } from "~/entities";
import { Products } from "~/entities";
import { useStore } from "vuex";
import { IonSpinner } from "@ionic/vue";

const store = useStore();

const products = computed<Products>(() => {
  return [
    ...store.state.StoreProducts.userProducts,
    ...store.state.StoreProducts.products,
  ];
});

onMounted(async () => {
  const savedProducts = store.state.StoreProducts.products;
  if (!savedProducts.length) {
    const { data } = await getProducts(5);
    store.state.StoreProducts.products = data.products;
  }
});
</script>

<template>
  <section class="list">
    <h1 class="list__title">Products</h1>
    <ion-spinner
      v-if="!products.length"
      class="list__loading"
    />
    <router-link
      v-else
      v-for="product of products"
      :key="product.id"
      class="list__link"
      :to="`/products/${product.id}`"
    >
      <entity-product
        :title="product.title"
        :description="product.description"
        :image-path="product.thumbnail"
      />
    </router-link>
  </section>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  &__loading {
    margin: 0 auto;
  }
  &__title {
    @include h1;
    text-align: center;
  }
  &__link {
    text-decoration: none !important;
  }
}
</style>
../../entities/product/types/types.products
