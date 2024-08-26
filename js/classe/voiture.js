export default class Voiture {
  constructor(marque, modele, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.vitesse = vitesse;
  }

  accelerer() {
    this.vitesse += 10;
  }

  tourner() {
    this.vitesse -= 5;
  }

  toString() {
    return `Voiture : ${this.marque}, ${this.modele} roule à ${this.vitesse} km/h`;
  }
}
