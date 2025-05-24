

class GrandPlateau extends PlateauMorpion{

    constructor($el){
        super();
        var $tab = $("<table/>").appendTo($el).addClass("morpion main");
        var $tbody = $("<tbody/>").appendTo($tab);
        
        var $trN = $("<tr/>").appendTo($tbody);
        var $trC = $("<tr/>").appendTo($tbody);
        var $trS = $("<tr/>").appendTo($tbody);
            
        this.caseNO = new PetitPlateau($trN);
        this.caseN = new PetitPlateau($trN);
        this.caseNE = new PetitPlateau($trN);
        this.caseO = new PetitPlateau($trC);
        this.caseC = new PetitPlateau($trC);
        this.caseE = new PetitPlateau($trC);
        this.caseSO = new PetitPlateau($trS);
        this.caseS = new PetitPlateau($trS);
        this.caseSE = new PetitPlateau($trS);
    }

}

