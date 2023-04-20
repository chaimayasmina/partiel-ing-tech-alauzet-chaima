class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse){
        this.marque = marque;
        this.modele = modele;
        this.longueur = longueur;
        this.nbPlace = nbPlace;
        this.reservoir = reservoir;
        this.vitesse = vitesse;
    }

    // Getters

    getMarque(){
        return this.marque;
    }

    getModele(){
        return this.modele;
    }

    getLongueur(){
        return this.longueur;
    }

    getnbPlace(){
        return this.nbPlace;
    }

    getReservoir(){
        return this.reservoir;
    }

    getVitesse(){
        return this.vitesse;
    }

}
