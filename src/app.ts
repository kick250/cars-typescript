import CarsController from "./controllers/CarsController.js";


const form = document.querySelector("#car-form");
const carsTable = document.getElementById("list-of-cars");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const controller = new CarsController(
    form as HTMLElement,
    carsTable as HTMLElement
  );
  controller.addCar();
})