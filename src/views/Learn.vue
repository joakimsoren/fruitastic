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
import { State, Action } from "vuex-class";
import { IFruit } from "../fruits/types/fruit";
import { EFruitColor } from "../fruits/types/enum/fruit-color";
import Fruit from "../fruits/components/Fruit.vue";
import { namespace } from "../fruits/store/fruit.store";

@Component
export default class Learn extends Vue {
  @State("fruits", { namespace }) fruits: IFruit[];
  @Action("loadFruits", { namespace }) loadFruits: any;

  async openFruit(fruit: IFruit) {
    const modal = await this.$ionic.modalController.create({
      component: Fruit,
      componentProps: {
        parent: this,
        propsData: {
          fruit
        }
      }
    });
    await modal.present();
  }

  goBack() {
    this.$router.back();
  }

  mounted() {
    this.loadFruits();
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
