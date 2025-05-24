

class CaseClickable extends CaseMorpion{

    dejaCliquee = false;

    constructor($tr){
        super();
        var $td = $("<td/>").appendTo($tr);
        this.$case = $("<div/>").appendTo($td).addClass("case sub");

        var thisCase = this;
        this.$case.click(function(){
            thisCase.click();
        });
    }

    click(){
        if (this.dejaCliquee) return;
            
        this.dejaCliquee = true;
        this.joueurProprietaire = gigaMorpion.joueurActif;
        this.$case.css("background-color", gigaMorpion.joueurActif);

        gigaMorpion.changerJoueur();
    }

}

