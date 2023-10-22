export default class CarsController {
  private inputName: HTMLInputElement;
  private inputPlateNumber: HTMLInputElement;
  private inputSaleValue: HTMLInputElement;
  private inputSaleDate: HTMLInputElement;

  constructor(form: HTMLElement) {
    this.inputName = form.querySelector("#name");
    this.inputPlateNumber = form.querySelector("#plate-number");
    this.inputSaleValue = form.querySelector("#sale-value");
    this.inputSaleDate = form.querySelector("#sale-date");
  }

  addCar() {
    console.log(this.inputName.value);
    console.log(this.inputPlateNumber.value);
    console.log(this.inputSaleValue.value);
    console.log(this.inputSaleDate.value);
  }
}