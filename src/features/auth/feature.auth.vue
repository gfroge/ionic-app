<script setup lang="ts">
import { IonList, IonItem, IonInput, IonButton, IonToast } from "@ionic/vue";
import { login } from "./api/api.auth";
import { reactive,ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter()

const formData = reactive({
  username: "",
  password: "",
});

const isErrorOpen = ref<boolean>(false)

const setIsErrorOpen = (val: boolean) => {
  isErrorOpen.value = val
}

const auth = async () => {
  const { username, password } = formData;
  try {
    const {data} = await login({ username, password });

    store.commit("StoreAccount/assignUserData", { token: data.token, username });
    router.push('/products/list')
  } catch (error) {
    setIsErrorOpen(true)
  }
};
</script>

<template>
  <keep-alive>
    <form>
      <ion-list lines="full">
        <ion-item>
          <ion-input
            class="input"
            v-model="formData.username"
            placeholder="Username"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            class="input"
            v-model="formData.password"
            type="password"
            placeholder="Password"
          ></ion-input>
        </ion-item>
      </ion-list>
      <div class="button">
        <ion-button @click="auth"> Login </ion-button>
      </div>
    </form>
  </keep-alive>

  <ion-toast
    :is-open="isErrorOpen"
    message="Auth error"
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
