/**
 * Created by Александр on 21.03.2016.
*/

var cell = {
    EMPTY: 0,
    WALL: 1,
    START: 2,
    EXIT: 3,
    PASS: 4,
    IMPASSE: 5
}

var labirinth;

function Labirinth(field) {
    var parsedField = parseField(field);

    this.field = parsedField;
    this.width = parsedField[0].length;
    this.height = parsedField.length;

    function parseField(input) {
        var result = [];
        var strings = input.split('\n');
        for (var i = 0; i < strings.length; i++) {
            result[i] = stringToRow(strings[i]);
        }
        return result;
    }

    function stringToRow(str) {
        var result = [];
        var i = 0;
        for (var j = 0; j < str.length; j++) {
            switch (str[j]){
                case "0":
                    result[i] = cell.EMPTY;
                    break;
                case "1":
                    result[i] = cell.WALL;
                    break;
                case "2":
                    result[i] = cell.START;
                    break;
                case "3":
                    result[i] = cell.EXIT;
                    break;
                default:
                    i--;
                    break;
            }
            i++;
        }
        return result;
    }
}

var firstVarietyOfLabirinth = "" +
    "20111111111000000\n" +
    "10000000000011110\n" +
    "11010111111110000\n" +
    "11010000110110111\n" +
    "11011110110111101\n" +
    "11010000000000100\n" +
    "00011111101110110\n" +
    "11011000001010000\n" +
    "11011011111000110\n" +
    "11010000001111110\n" +
    "00011111100000011\n" +
    "01113000001110111\n" +
    "00011111111000000";

var secondVarietyOfLabirinth = "" +
    "1000000000001111\n" +
    "0101111101111101\n" +
    "0101100100010001\n" +
    "0100001131111011\n" +
    "0111101111010000\n" +
    "0000001000010111\n" +
    "0111111011110001\n" +
    "0100001010010111\n" +
    "0110111011010000\n" +
    "0000000000002111";

var thirdVarietyOfLabirinth = "" +
    "2000000000000000\n" +
    "0111111111111111\n" +
    "0000000000000010\n" +
    "0111111101111100\n" +
    "0100010000000110\n" +
    "0101010101111000\n" +
    "0101011101101011\n" +
    "0101010000001011\n" +
    "0101111111101011\n" +
    "0100000000000003";
