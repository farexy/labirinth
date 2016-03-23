/**
 * Created by Александр on 21.03.2016.
 */

function draw(labirinth) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    var sizeX = canvas.clientWidth / labirinth.width;
    var sizeY = canvas.clientHeight / labirinth.height;

    for(var i = 0; i < labirinth.width; i++)
        for(var j = 0; j < labirinth.height; j++){
            ctx.fillStyle = colorOfCell(labirinth.field[j][i]);
            ctx.fillRect(i * sizeX, j * sizeY, sizeX, sizeY);
        }
}

function colorOfCell(inputCell) {
    var result;
    switch (inputCell) {
        case cell.EMPTY:
            result = 'white';
            break;
        case cell.WALL:
            result = 'black';
            break;
        case cell.START:
            result = 'green';
            break;
        case cell.EXIT:
            result = 'red';
            break;
        case cell.PASS:
            result = 'yellow';
            break;
        case cell.IMPASSE:
            result = 'white'
            break;
    }
    return result;
}

function highlightVariant(variant){
    setHidden('redactor');
    var tds =  document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].style.backgroundColor = 'white';
        tds[i].style.color = 'black';
    }
    document.getElementById(variant).style.backgroundColor = 'darkblue';
    document.getElementById(variant).style.color = 'white';
}

function setVisible(id) {
    document.getElementById(id).style.visibility = 'visible';
}

function setHidden(id) {
    document.getElementById(id).style.visibility = 'hidden';
}