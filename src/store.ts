import Vue from "vue";
import Vuex from "vuex";

import { fruit } from "./fruits/store/fruit.store";

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    fruit
  }
});
