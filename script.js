function initialize() {
    numberOutput = document.getElementById("numoutput");
    modifier = 0;
    number = 0;

}

function modifyNumber(modifier) {
    number += modifier;
    display();
}

function display() {
    numberOutput.innerHTML = number;
}