

var gigaMorpion;

class GigaMorpion{

    joueur1 = "blue";
    joueur2 = "green";
    joueurActif;
    plateau;

    constructor(){
        this.plateau = new GrandPlateau($("body"));
        this.changerJoueur();
    }


    changerJoueur(){
        // joueurActif = joueurActif == joueur1 ? joueur2 : joueur1;
        if (this.joueurActif == this.joueur1){
            this.joueurActif = this.joueur2;
        }
        else{
            this.joueurActif = this.joueur1;
        }
        $("body").css("background-color", 'light' + this.joueurActif);
    }

}

