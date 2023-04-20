class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse){
        this.marque = marque;
        this.modele = modele;
        this.longueur = longueur;
        this.nbPlace = nbPlace;
        this.reservoir = reservoir;
        this.vitesse = vitesse;
    }

    myAvion = new Avion("Boeing", "767", 80, 312, 924728, 193);
}
