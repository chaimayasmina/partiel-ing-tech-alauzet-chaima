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

    // Setters 

    setMarque(new_marque){
        this.marque = new_marque;
    }

    setModele(new_modele){
        this.modele = new_modele;
    }

    setLongueur(new_longueur){
        this.longueur = new_longueur;
    }

    setnbPlace(new_nbPlace){
        this.nbPlace = new_nbPlace;
    }

    setReservoir(new_reservoir){
        this.reservoir = new_reservoir;
    }

    setVitesse(new_vitesse){
        this.vitesse = new_vitesse
    }
}
