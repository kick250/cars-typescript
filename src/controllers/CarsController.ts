import Car from "../domain/Car.js";
import CarsView from "../view/CarsView.js";

export default class CarsController {
  private inputName: HTMLInputElement;
  private inputPlateNumber: HTMLInputElement;
  private inputSaleValue: HTMLInputElement;
  private inputSaleDate: HTMLInputElement;
  private carsView: CarsView;

  constructor(form: HTMLElement, carsTable: HTMLElement) {
    this.inputName = form.querySelector("#name");
    this.inputPlateNumber = form.querySelector("#plate-number");
    this.inputSaleValue = form.querySelector("#sale-value");
    this.inputSaleDate = form.querySelector("#sale-date");
    this.carsView = new CarsView(carsTable);
  }

  addCar() {
    const car = this.buildCar();
    this.carsView.add(car);

    this.inputName.value = "";
    this.inputPlateNumber.value = "";
    this.inputSaleValue.value = "";
    this.inputSaleDate.value = "";
  }

  private buildCar(): Car {
    const saleDate = new Date(this.inputSaleDate.value);

    return new Car(
      this.inputName.value,
      this.inputPlateNumber.value,
      parseFloat(this.inputSaleValue.value),
      saleDate
    );
  }
}