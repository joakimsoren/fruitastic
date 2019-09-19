<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-icon name="arrow-back"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Learn</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          v-for="fruit of fruits"
          :key="fruit.id"
          :class="['color-' + fruit.color, 'fruit-item']"
          button
          @click="openFruit(fruit)"
        >{{ fruit.name}}</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IFruit } from "../fruits/types/fruit";
import { EFruitColor } from "../fruits/types/enum/fruit-color";
import Fruit from "../fruits/components/Fruit.vue";
import { CapacitorVideoPlayer } from "capacitor-video-player/dist/esm/web";

@Component
export default class Learn extends Vue {
  public fruits: IFruit[] = [
    {
      id: 1,
      name: "Banana",
      videoName: "Banana.mov",
      color: EFruitColor.Yellow
    },
    {
      id: 2,
      name: "Apple",
      videoName: "Apple.mov",
      color: EFruitColor.Green
    },
    {
      id: 3,
      name: "Watermelon",
      videoName: "Watermelon.mov",
      color: EFruitColor.Green
    },
    {
      id: 4,
      name: "Orange",
      videoName: "Orange.mp4",
      color: EFruitColor.Orange
    }
  ];

  async openFruit(fruit: IFruit) {
    const modal = await this.$ionic.modalController.create({
      component: Fruit,
      componentProps: {
        parent: this,
        propsData: {
          fruit
        },
      }
    });
    await modal.present();
  }

  goBack() {
    this.$router.back();
  }
}
</script>
<style lang="scss" scoped>
.fruit-item {
  &.color-YELLOW {
    color: yellow;
  }
  &.color-RED {
    color: red;
  }
  &.color-GREEN {
    color: green;
  }
  &.color-ORANGE {
    color: orange;
  }
}
</style>
