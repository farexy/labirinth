/**
 * Created by Александр on 23.03.2016.
 */
function setFirstLabirinth() {
    highlightVariant('var1');
    labirinth = new Labirinth(firstVarietyOfLabirinth);
    draw(labirinth);
}

function setSecondLabirinth() {
    highlightVariant('var2');
    labirinth = new Labirinth(secondVarietyOfLabirinth);
    draw(labirinth);
}

function setThirdLabirinth() {
    highlightVariant('var3');
    labirinth = new Labirinth(thirdVarietyOfLabirinth);
    draw(labirinth);
}

function solve() {
    findExit(labirinth);
    draw(labirinth);
}

function setOwnLabirinth() {
    highlightVariant('own');
    setVisible('redactor');
    labirinth = null;
    draw();
}

function readLabirinth() {
    var input = document.getElementById("inputLabirinth").value;
    labirinth = new Labirinth(input);
    draw(labirinth);
}

window.onload = setFirstLabirinth;