/**
 * Created by Александр on 22.03.2016.
 */
"use strict";
function findExit(labirinth) {
    setImpasse(labirinth);
    setPass(labirinth);
}

function setImpasse(labirinth) {
    for(var i = 0; i < labirinth.height; i++)
        for(var j = 0; j < labirinth.width; j++)
            testEmptyCell(labirinth.field, i, j);
}

function testEmptyCell(field, i, j) {
    if(field[i][j] != cell.EMPTY) return;
    var k = 0;

    if(field[i][j] == cell.EMPTY){
        if(i == 0 || field[i-1][j] == cell.WALL ||  field[i-1][j] == cell.IMPASSE )  k++;
        if(j == 0 || field[i][j-1] == cell.WALL || field[i][j-1] == cell.IMPASSE) k++;
        if(i == field.length - 1 || field[i+1][j] == cell.WALL ||  field[i+1][j] == cell.IMPASSE ) k++;
        if(j == field[0].length - 1 || field[i][j+1] == cell.WALL || field[i][j+1] == cell.IMPASSE) k++;
    }
    if(k == 4) field[i][j] = cell.IMPASSE;
    if(k == 3) {
        field[i][j] = cell.IMPASSE;
        if (i != 0 && field[i - 1][j] == cell.EMPTY) testEmptyCell(field, i - 1, j);
        if (j != 0 && field[i][j - 1] == cell.EMPTY) testEmptyCell(field, i, j - 1);
        if (i != field.length - 1 && field[i + 1][j] == cell.EMPTY) testEmptyCell(field, i + 1, j);
        if (j != field[0].length - 1 && field[i][j + 1] == cell.EMPTY) testEmptyCell(field, i, j + 1);
    }
}

function setPass(labirinth) {
    var isPassExist = false;
    for(var i = 0; i < labirinth.height; i++)
        for(var j = 0; j < labirinth.width; j++)
            if (labirinth.field[i][j] == cell.EMPTY) {
                isPassExist = true;
                labirinth.field[i][j] = cell.PASS;
            }
    if(!isPassExist)
        alert("No pass!");
}





