const TWIX = 0, EGG = 1, TWIZZLER = 2, AIRHEAD = 3, RINGPOP = 4;

function initialize() {
    numTwixOutput = document.getElementById("numtwix");
    numScreamEggsOutput = document.getElementById("numeggs");
    numTwizzlersOutput = document.getElementById("numtwizzlers");
    numAirheadsOutput = document.getElementById("numairheads");
    numRingPopsOutput = document.getElementById("numringpops");
    candyLogOutput = document.getElementById("candylog");

    numTwix = parseInt (Math.random() * 11);
    numScreamEggs = parseInt(Math.random() * 11);
    numTwizzlers = parseInt(Math.random() * 11);
    numAirheads = parseInt(Math.random() * 11);
    numRingPops = parseInt(Math.random() * 11);

    candyLog = "";

    display();
}

function display() {
    numTwixOutput.innerHTML = numTwix;
    numScreamEggsOutput.innerHTML = numScreamEggs;
    numTwizzlersOutput.innerHTML = numTwizzlers;
    numAirheadsOutput.innerHTML = numAirheads;
    numRingPopsOutput.innerHTML = numRingPops;

    candyLogOutput.innerHTML = candyLog;
}

function giveCandy() {
    if (numTwix + numScreamEggs + numTwizzlers + numAirheads + numRingPops == 0) {
        candyLog = "You are all out of candy.<br />" + candyLog;
    }
    else {
        var badSelection = true;

        while (badSelection)
        {
            var selectedCandy = parseInt(Math.random() * 5);
        
            if (selectedCandy == TWIX) {
                if (numTwix > 0) {
                    numTwix--;
                    candyLog = "You gave out a Twix.<br />" + candyLog;
                    badSelection = false;
                }
                else {
                    candyLog = "You tried to give out a Twix, but you have none left.<br />" + candyLog;
                }
            }
            else {
                if (selectedCandy == EGG) {
                    if (numScreamEggs > 0) {
                        numScreamEggs--;
                        candyLog = "You gave out a Scream Egg.<br />" + candyLog;
                        badSelection = false;
                    }
                    else {
                        candyLog = "You tried to give out a Scream Egg, but you have none left.<br />" + candyLog;
                    }
                }
                else {
                    if (selectedCandy == TWIZZLER) {
                        if (numTwizzlers > 0) {
                            numTwizzlers--;
                            candyLog = "You gave out a Twizzler.<br />" + candyLog;
                            badSelection = false;
                        }
                        else {
                            candyLog = "You tried to give out a Twizzler, but you have none left.<br />" + candyLog;
                        }
                    }
                    else {
                        if (selectedCandy == AIRHEAD) {
                            if (numAirheads > 0) {
                                numAirheads--;
                                candyLog = "You gave out an Airhead.<br />" + candyLog;
                                badSelection = false;
                            }
                            else {
                                candyLog = "You tried to give out an Airhead, but you have none left.<br />" + candyLog;
                            }
                        }
                        else {
                            if (numRingPops > 0) {
                                numRingPops--;
                                candyLog = "You gave out a Ring Pop.<br />" + candyLog;
                                badSelection = false;
                            }
                            else {
                                candyLog = "You tried to give out a Ring Pop, but you have none left.<br />" + candyLog;
                            }
                        }
                    }
                }
            }
        }
    }


    display();
}