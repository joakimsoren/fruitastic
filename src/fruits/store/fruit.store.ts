import { IFruit } from "../types/fruit";
import { Module } from "vuex";
import { RootState } from "@/store";
import { actions } from "./fruit.actions";
import { mutations } from "./fruit.mutations";

export const namespace: string = "fruit";

export interface IFruitState {
  loading: boolean;
  loaded: boolean;
  fruits: IFruit[];
}

export const state: IFruitState = {
  loading: false,
  loaded: false,
  fruits: []
};

export const fruit: Module<IFruitState, RootState> = {
  state,
  mutations,
  actions,
  namespaced: true
};
