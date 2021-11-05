import { DrinkFlyweight } from "./drink";
import { BananaSmoothie } from "./drinks/banana-smoothie";
import { Espresso } from "./drinks/espresso";
import { Giveaway } from "./giveaway";

export class DrinkFactory {
  private drinkCache: Record<string, DrinkFlyweight> = {};
  objectsCreated = 0;

  getDrink(drinkKey: string): DrinkFlyweight {
    if (this.drinkCache[drinkKey]) {
      console.log("Reusing existing flyweight object");
      return this.drinkCache[drinkKey];
    } else {
      console.log("Creating new flyweight object");

      let drink: DrinkFlyweight;

      switch (drinkKey) {
        case "Espresso":
          drink = new Espresso();
          break;
        case "BananaSmoothie":
          drink = new BananaSmoothie();
          break;
        default:
          throw new Error("Not a valid flyweight drink ");
      }

      this.drinkCache[drinkKey] = drink;
      this.objectsCreated++;

      return drink;
    }
  }

  createGiveway(): DrinkFlyweight {
    return new Giveaway();
  }

  listDrinks(): void {
    console.log(
      `Factory has  created ${this.objectsCreated} objects and cache has: ${
        Object.keys(this.drinkCache).length
      } objects (${Object.keys(this.drinkCache).join(", ")})`
    );
  }
}
