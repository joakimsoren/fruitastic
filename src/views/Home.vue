<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="button-container">
        <ion-button color="primary" @click="goTo('learn')">Learn</ion-button>
        <ion-button color="secondary" @click="goTo('share')">Share</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  goTo(route: string) {
    this.$router.push(route);
  }
}
</script>
<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
}
</style>
