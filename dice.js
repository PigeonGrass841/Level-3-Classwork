function initialize() {
    diceTable = document.getElementById("dicetable");
    rollDice();
}

function rollDice() {
    var numRolls = getRandomInteger(25, 100);

    for (var i = 0; i < numRolls; i++) {
        var dieRoll = getRandomInteger(1, 6);

        var newRow = diceTable.innerRow();
        var newCell = newRow.innerCell();
        newCell.innerHTML = "Roll " + (i + 1);

        newCell = newRow.innerCell();
        newCell.innerHTML = dieRoll;
    }
}