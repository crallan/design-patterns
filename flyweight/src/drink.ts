export interface DrinkFlyweight {
  //Intrinsict state - shared/readonly
  readonly name: string;

  //Extrinsic state
  serve(size: string): void;
}
