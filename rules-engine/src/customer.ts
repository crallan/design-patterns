export class Customer {
  dateOfFirstPurchase?: Date;
  dateOfBirth: Date;
  isVeteran: boolean;

  constructor(
    dateOfBirth: Date,
    isVeteran: boolean,
    dateOfFirstPurchase?: Date
  ) {
    this.dateOfBirth = dateOfBirth;
    this.isVeteran = isVeteran;
    this.dateOfFirstPurchase = dateOfFirstPurchase;
  }
}
