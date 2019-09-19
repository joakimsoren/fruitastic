<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-buttons slot="start">
          <ion-button @click="close">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ fruit.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      {{ fruit.name }}
      <p>
        <ion-button @click="playVideo">Play video</ion-button>
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as CapacitatorVPPlugin from "capacitor-video-player";
import { IFruit } from "../types/fruit";

@Component
export default class Fruit extends Vue {
  @Prop() fruit: IFruit;

  videoUrl: string = "assets/videos/";

  async close() {
    await this.$ionic.modalController.dismiss();
  }

  async playVideo() {
    await CapacitatorVPPlugin.CapacitorVideoPlayer.play({
      url: this.videoUrl + this.fruit.videoName
    });
  }

  mounted() {
    console.log(name);
  }
}
</script>

<style lang="scss" scoped>
</style>