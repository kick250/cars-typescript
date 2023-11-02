export default class Car {
  private _name: string;
  private _plateNumber: string;
  private _saleValue: number;
  private _saleDate: Date;

  constructor(name: string, plateNumber: string, saleValue: number, saleDate: Date) {
    this._name = name;
    this._plateNumber = plateNumber;
    this._saleValue = saleValue;
    this._saleDate = saleDate;
  }

  get name(): string {
    return this._name;
  }

  get plateNumber(): string {
    return this._plateNumber;
  }

  get saleValue(): number {
    return this._saleValue
  }

  get saleValueFormatted(): string {
    return `R$ ${this._saleValue}`;
  }

  get saleDateFormatted(): string {
    return this._saleDate.toLocaleDateString();
  }
}