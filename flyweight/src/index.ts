import { DrinkFactory } from "./drink-factory";

const factory = new DrinkFactory();

const largeEspresso = factory.getDrink("Espresso");
largeEspresso.serve("Large");

const mediumSmoothie = factory.getDrink("BananaSmoothie");
mediumSmoothie.serve("Medium");

const smallEspresso = factory.getDrink("Espresso");
smallEspresso.serve("Small");

factory.listDrinks();

console.log("------ Unshared flyweight -----");

var sizes = ["Small", "Medium", "Large"];

sizes.forEach((size) => {
  const giveaway = factory.createGiveway();
  giveaway.serve(size);
});
