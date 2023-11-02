import Car from "../domain/Car.js";


export default class CarsView {
  private carsTable: HTMLElement;
  private carsBody: HTMLElement;

  constructor(carsTable: HTMLElement) {
    this.carsTable = carsTable;
    this.carsBody = carsTable.getElementsByTagName("tbody")[0];
  }

  add(car: Car) {
    const row = this.createRow(car)

    this.carsBody.appendChild(row);
  }

  createRow(car: Car) : Node {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const plateNumber = document.createElement("td");
    const saleValue = document.createElement("td");
    const saleDate = document.createElement("td");

    name.textContent = car.name;
    plateNumber.textContent = car.plateNumber;
    saleValue.textContent = `${car.saleValueFormatted}`;
    saleDate.textContent = car.saleDateFormatted;

    tr.appendChild(name);
    tr.appendChild(plateNumber);
    tr.appendChild(saleValue);
    tr.appendChild(saleDate);

    return tr
  }
}