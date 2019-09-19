<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-icon name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Share</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>WE ARE SHARING</ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Share extends Vue {
  goBack() {
    this.$router.back();
  }
}
</script>
<style lang="scss" scoped>
</style>
