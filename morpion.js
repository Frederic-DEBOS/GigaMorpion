
$(function(){

    var joueur1 = "blue";
    var joueur2 = "green";
    var joueurActif;

    function init() {
        addMorpion($("body")).addClass("main").find(".case").addClass("main");
        $("div.case").each((i, el) => addMorpion($(el))).
            find(".morpion").addClass("sub").find(".case").addClass("sub");


        $(".sub .case").click(function(){
            var $caseCliquee = $(this);
            var dejaCliquee = $caseCliquee.data("estCliquee");
            if (!dejaCliquee){
                $caseCliquee.data("estCliquee", true).data("joueur", joueurActif).css("background-color", joueurActif);
                changeJoueur();
            }
        });
        changeJoueur();
    }

    function addMorpion($el) {
        var $tab = $("<table/>").appendTo($el).addClass("morpion");
        var $tbody = $("<tbody/>").appendTo($tab);
        for (var lig = 1; lig <= 3; lig++) {
            var $tr = $("<tr/>").appendTo($tbody);
            for (var col = 1; col <= 3; col++) {
                var $td = $("<td/>").appendTo($tr);//.text(`[${lig};${col}]`);
                $("<div/>").appendTo($td).addClass("case");
            }
        }
        return $tab;
    }

    function changeJoueur(){
        // joueurActif = joueurActif == joueur1 ? joueur2 : joueur1;
        if (joueurActif == joueur1){
            joueurActif = joueur2;
        }
        else{
            joueurActif = joueur1;
        }
        $("body").css("background-color", 'light'+joueurActif);
    }

    init();

});

