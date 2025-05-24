
$(function(){

    function init() {
        addMorpion($("body")).addClass("main").find(".case").addClass("main");
        $("div.case").each((i, el) => addMorpion($(el))).
            find(".morpion").addClass("sub").find(".case").addClass("sub");
        $(".sub .case")
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

    init();

});
