

class PetitPlateau extends PlateauMorpion{

    constructor($tr){
        super();
        var $td = $("<td/>").appendTo($tr);
        var $div = $("<div/>").appendTo($td).addClass("case main");
        
        var $tab = $("<table/>").appendTo($div).addClass("morpion sub");
        var $tbody = $("<tbody/>").appendTo($tab);
        
        var $trN = $("<tr/>").appendTo($tbody);
        var $trC = $("<tr/>").appendTo($tbody);
        var $trS = $("<tr/>").appendTo($tbody);

        this.caseNO = new CaseClickable($trN);
        this.caseN = new CaseClickable($trN);
        this.caseNE = new CaseClickable($trN);
        this.caseO = new CaseClickable($trC);
        this.caseC = new CaseClickable($trC);
        this.caseE = new CaseClickable($trC);
        this.caseSO = new CaseClickable($trS);
        this.caseS = new CaseClickable($trS);
        this.caseSE = new CaseClickable($trS);
    }

}

