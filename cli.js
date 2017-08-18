//Command Line Inteface Application via Node

var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var basicCardDeck = require('./basicCardDeck.json');
var clozeCardDeck = require('./clozeCardDeck.json');


var start = function() {

    inquirer.prompt(
        {
            type: "list",
            name: "selectType",
            message: "Select one of the options",
            paginated: true,
            choices: [
            new inquirer.Separator(), {
                name: 'Add a Basic Index Card'
            }, {
                name: 'Add a Cloze Index Card'
            },{
                name: 'Check all index Cards'
            }, {  
                name: 'Exit'
            }

        ],
    }).then(function(answer){
        console.log(answer);
        if(answer.selectType === "basicCard") {
            createBasicCard();
        } else if(answer.selectType === "clozeCard") {
            console.log("thank you for choosing a clozeCard");
            createClozeCard();
        } else {
            console.log("Let's start the quiz!")
        }
    });
}

var createBasicCard = function() {
    console.log("Let's create a new Basic Card!");
    console.log("=====================");
    
    inquirer.prompt([
    {
        type: "input",
        message: "What text is on the front of the card?",
        name: "front"

    },
    {
        type: "input",
        message: "What text is on the back of the card?",
        name: "back"
    }
    
    
    ]).then(function(answer) {
        
        var bCard = new BasicCard(answer.front, answer.back);
            console.log("Front of the Basic Card: " + bCard.front);
            console.log("Back of the Basic Card: " + bCard.back);
            basicFlashCardDeck.push(bCard);
    });
}

var createClozeCard = function() {
    console.log("Let's create a new Cloze Card!");
    console.log("=====================");

    inquirer.prompt([
    {
        type: "input",
        message: "What is the full text for the Cloze Card?",
        name: "full"       
    },
    {
        type: "input",
        message: "What is the Cloze Word?",
        name: "clozeWord"
    }
    ]).then(function(userInput) {
        var cCard = new ClozeCard(userInput.full, userInput.clozeWord);
        if(cCard.partText() == -1) {
            console.log("Provided cloze was invalid. Please try again.");
        } else {
            console.log("Full text of Cloze Card: " + cCard.fullText);
            console.log("Cloze word of the Cloze Card: " + cCard.cloze);
            console.log("Partial text of card: " + cCard.partText());
            clozeFlashCardDeck.push(cCard);
        }
    });
}

start();