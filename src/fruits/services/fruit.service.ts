import { IFruit } from "../types/fruit";
import { EFruitColor } from "../types/enum/fruit-color";

export function getFruits(): Promise<IFruit[]> {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        res([
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
        ]),
      600
    )
  );
}
