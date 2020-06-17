var pieces = document.getElementsByClassName("mobile");

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, , 134, 163];

for (var i = 0; i < pieces.length; i++) {
    pieces[i].setAttribute("width", tamWidth[i]);
    pieces[i].setAttribute("height", tamHeight[i]);
    pieces[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
    pieces[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
    pieces[i].setAttribute("onmousedown", "elementSelection(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosx = 0;
var currentPosy = 0;

function elementSelection(evt){
    elementSelect = evt.target;
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove","moveElement(evt)");
}

function moveElement(evt){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    elementSelect.setAttribute("x", currentPosx);
    elementSelect.setAttribute("y", currentPosy);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout","deSelectElement(evt)");
    elementSelect.setAttribute("onmouseup","deSelectElement(evt)");
}

function deSelectElement(evt){

    if(elementSelect != 0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }

}
