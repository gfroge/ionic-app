<script setup lang="ts">
import { IonHeader, IonToolbar, IonIcon, IonButton } from "@ionic/vue";
import { logoIonic, chevronBack, personOutline } from "ionicons/icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter()

withDefaults(
  defineProps<{
    backButton: boolean;
    withProfile: boolean
  }>(),
  {
    backButton: false,
    withProfile: true
  }
);


const auth = () => {
  if(store.getters["StoreAccount/isLoggedIn"]) return 
  router.push('/auth')
}
</script>

<template>
  <ion-header class="header">
    <ion-toolbar>
      <div class="header__wrapper">
        <div class="header__slot">
          <div
            v-if="backButton"
            @click="$router.back()"
            class="header__icon-info"
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
          <div v-if="withProfile" class="header__icon-info" @click="auth">
            <ion-icon :icon="personOutline" />
            {{
              store.getters["StoreAccount/isLoggedIn"]
                ? store.state.StoreAccount.username
                : "Login"
            }}
          </div>
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
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__icon-info {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    cursor: pointer;
  }

  &__slot {
    @include h3;
    justify-self: center;
    align-self: center;
  }
}
</style>
