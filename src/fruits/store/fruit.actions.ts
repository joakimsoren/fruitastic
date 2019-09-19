import { ActionTree } from "vuex";
import { IFruitState } from "./fruit.store";
import { RootState } from "@/store";
import { getFruits } from "../services/fruit.service";
import {
  mutationSetFruits,
  mutationSetLoading,
  mutationSetLoaded
} from "./fruit.mutations";

export const loadFruits: string = "loadFruits";

export const actions: ActionTree<IFruitState, RootState> = {
  async [loadFruits]({ commit }) {
    commit(mutationSetLoading, true);
    const fruits = await getFruits();
    commit(mutationSetFruits, fruits);
    commit(mutationSetLoading, false);
    commit(mutationSetLoaded, true);
  }
};
