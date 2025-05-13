var placingRoad = false;
var placingSettlement = false;
var placingCity = false;

placeRoad();

function placeRoad() {
    if (!placingRoad) {
        placingRoad = true;
        $(".roadSlot").addClass("selectable");
    } else {
        placingRoad = false;
        $(".roadSlot").removeClass("selectable");
    }
}

function placeSettlement() {
    if (!placingSettlement) {
        placingSettlement = true;
        $(".settlement").css("display", "block");
    } else {
        placingSettlement = false;
        $(".settlement").css("display", "none");
    }
}

function placeCity() {
    if (!placingCity) {
        placingCity = true;
        $(".city").css("display", "block");
    } else {
        placingCity = false;
        $(".city").css("display", "none");
    }
}