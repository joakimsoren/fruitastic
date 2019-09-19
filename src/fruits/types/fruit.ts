import { EFruitColor } from "./enum/fruit-color";

export interface IFruit {
  id: number;
  name: string;
  color: EFruitColor;
  videoName: string;
}
