import CarsController from "./controllers/CarsController.js";


const form = document.querySelector("#car-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const controller = new CarsController(form as HTMLElement);
  controller.addCar();
})