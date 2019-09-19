import { MutationTree } from "vuex";
import { IFruitState } from "./fruit.store";
import { IFruit } from "../types/fruit";

export const mutationSetFruits: string = "setFruits";
export const mutationSetLoading: string = "setLoading";
export const mutationSetLoaded: string = "setLoaded";

export const mutations: MutationTree<IFruitState> = {
  [mutationSetFruits](state: IFruitState, fruits: IFruit[]) {
    state.fruits = fruits;
  },
  [mutationSetLoading](state: IFruitState, loading: boolean) {
    state.loading = loading;
  },
  [mutationSetLoaded](state: IFruitState, loaded: boolean) {
    state.loaded = loaded;
  }
};
