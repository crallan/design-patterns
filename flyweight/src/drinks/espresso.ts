import { DrinkFlyweight } from "../drink";

export class Espresso implements DrinkFlyweight {
  readonly name = "Espresso";

  private ingredients = ["Coffee Beans", "Hot Water"];

  serve(size: string): void {
    console.log(
      `- Serving ${size} ${this.name} with ${this.ingredients.join(", ")}`
    );
  }
}
