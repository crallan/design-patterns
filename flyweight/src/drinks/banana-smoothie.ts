import { DrinkFlyweight } from "../drink";

export class BananaSmoothie implements DrinkFlyweight {
  readonly name = "Banana Smoothie";

  private ingredients = ["Banana", "Hot Milk", "Vainilla Extract"];

  serve(size: string): void {
    console.log(
      `- Serving ${size} ${this.name} with ${this.ingredients.join(", ")}`
    );
  }
}
