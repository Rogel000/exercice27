import Voiture from "./classe/voiture.js";

const voiture1 = new Voiture("Bmw", "Serie 1", 80);
const voiture2 = new Voiture("Mercedes", "GLB", 100);

for (let i = 0; i < 3; i++) {
  voiture1.accelerer();
  console.log(voiture1.toString());
}

for (let i = 0; i < 2; i++) {
  voiture2.accelerer();
  console.log(voiture2.toString());
}

for (let i = 0; i < 2; i++) {
  voiture2.tourner();
  console.log(voiture2.toString());
}
