<script setup lang="ts">
import { IonList, IonItem, IonInput, IonButton, IonToast } from "@ionic/vue";
import { reactive, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { createProduct } from "~/entities";

const store = useStore();
const router = useRouter();

const formData = reactive({
  title: "",
  description: "",
  thumbnail: "",
  price: "",
  "discount percentage": "",
  rating: "",
  stock: "",
  brand: "",
  category: "",
  image: "",
});

const isErrorOpen = ref<boolean>(false);

const setIsErrorOpen = (val: boolean) => {
  isErrorOpen.value = val;
};

const addProduct = async () => {
  try {
    const productData = {
      ...formData,
      discountPercentage: formData["discount percentage"],
      images: [formData.image],
    };
    const { data } = await createProduct(productData);
    // const {data} = await login({ username, password });
    store.commit("StoreProducts/addUserProduct", data);
    router.push("/products/list");
  } catch (error) {
    setIsErrorOpen(true);
  }
};
</script>

<template>
  <keep-alive>
    <form>
      <ion-list lines="full">
        <ion-item v-for="key of Object.keys(formData)">
          <ion-input
            class="input"
            v-model="formData[key]"
            :placeholder="key"
          ></ion-input>
        </ion-item>
      </ion-list>
      <div class="button">
        <ion-button @click="addProduct"> Add </ion-button>
      </div>
    </form>
  </keep-alive>

  <ion-toast
    :is-open="isErrorOpen"
    message="Error"
    :duration="3000"
    position="top"
    color="danger"
    @didDismiss="setIsErrorOpen(false)"
  ></ion-toast>
</template>

<style scoped lang="scss">
.input {
  @include h3;
}

.button {
  text-align: center;
  margin-top: 8px;
  @include h3;
}
</style>
