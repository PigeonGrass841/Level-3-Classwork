function initialize() {
    inputContainer = document.getElementById("inputform");
    greetingOutput = document.getElementById("greeting");

    firstName = "";
    lastName = "";
    eatsPizza = false;
    placeOfOrigin = "";
}

function recordData() {
    firstName = inputContainer.fname.value;
    lastName = inputContainer.lname.value;
    eatsPizza = inputContainer.pizza.checked;
    placeOfOrigin = inputContainer.origin.value;

    inputContainer.fname.value = "";
    inputContainer.lname.value = "";

    display();
}

function display() {
    greetingOutput.innerHTML = "hello " + firstName + " " + lastName + " from " + placeOfOrigin + "! Welcome to our page!<hr />";

    if (!eatsPizza) {
        greetingOutput.innerHTML += "It looks like you're not a fan of pizza.";
    }
    else {
        greetingOutput.innerHTML += "It looks like you're a fan of pizza.";
    }
}