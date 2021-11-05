import { DrinkFlyweight } from "./drink";
import { BananaSmoothie } from "./drinks/banana-smoothie";
import { Espresso } from "./drinks/espresso";

//Unshared concrete flyweight

export class Giveaway implements DrinkFlyweight {
  private eligibleDrinks: Array<DrinkFlyweight> = [
    new Espresso(),
    new BananaSmoothie(),
  ];

  private randomDrink: DrinkFlyweight;
  private size!: string;

  public get name() {
    return this.randomDrink.name;
  }

  constructor() {
    const randomIndex = Math.floor(Math.random());
    this.randomDrink = this.eligibleDrinks[randomIndex];
  }

  serve(size: string): void {
    this.size = size;
    console.log(`Free giveaway! - Serving ${size} ${this.name}`);
  }
}
