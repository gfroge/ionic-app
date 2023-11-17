<script setup lang="ts">
import { IonHeader, IonToolbar, IonIcon, IonButton } from "@ionic/vue";
import { logoIonic, chevronBack } from "ionicons/icons";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const isLoggedIn = computed(() =>
  Boolean(store.state.StoreAccount.login && store.state.StoreAccount.username)
);

withDefaults(
  defineProps<{
    backButton: boolean;
  }>(),
  {
    backButton: false,
  }
);
</script>

<template>
  <ion-header class="header">
    <ion-toolbar>
      <div class="header__wrapper">
        <div class="header__slot">
          <div
            v-if="backButton"
            @click="$router.back()"
            class="header__back"
          >
            <ion-icon :icon="chevronBack" />
            Back
          </div>
        </div>
        <div class="header__slot header__logo">
          <ion-icon
            :icon="logoIonic"
            size="large"
            color="primary"
          />
        </div>
        <div class="header__slot">
          <ion-icon :icon="chevronBack" />
          {{  isLoggedIn ? store.state.StoreAccount.username : "Login" }}
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped lang="scss">
ion-button {
  --padding-start: 18px;
  --padding-end: 18px;
  --padding-top: 0px;
  --padding-bottom: 0px;
  height: 16px !important;
}
.header {
  &__wrapper {
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  &__back {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    cursor: pointer;
  }
}
</style>
