class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse){
        this.marque = marque;
        this.modele = modele;
        this.longueur = longueur;
        this.nbPlace = nbPlace;
        this.reservoir = reservoir;
        this.vitesse = vitesse;
    }
}
const firstAvion = new Avion("Boeing", "767", 80, 312, 924728, 193);
const secondAvion = new Avion ("Airbus", "A380", 73, 853, 3200000, 1020);
const thirdAvion = new Avion ("Britten-Norman", "B1O3", 87, 229, 2973298, 1938);
const fourthAvion = new Avion ("Antonov", "A918", 98, 287, 123, 8374204);
const fifthAvion = new Avion ("Cessna", "172 Skyhawk", 8, 4, 189, 123);

const avionsArray = [firstAvion, secondAvion, thirdAvion, fourthAvion, fifthAvion];

avionsArray.forEach((avion) => {
    console.log(avion.marque)
}
)