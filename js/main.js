import Voiture from "../classe/voiture.js";

const voiture1 = new Voiture("Bmw", "Serie 1", 80);
const voiture2 = new Voiture("Mercedes", "GLB", 100);

for (let i = 0; i < 3; i++) {
  voiture1.accelerer();
  console.log(
    `Vitesse de la ${voiture1.marque} ${voiture1.modele} : ${voiture1.vitesse} km/h`
  );
}

for (let i = 0; i < 2; i++) {
  voiture2.accelerer();
  console.log(
    `Vitesse de la ${voiture2.marque} ${voiture2.modele} : ${voiture2.vitesse} km/h`
  );
}

for (let i = 0; i < 2; i++) {
  voiture2.tourner();
  console.log(
    `Vitesse de la ${voiture2.marque} ${voiture2.modele} : ${voiture2.vitesse} km/h`
  );
}
