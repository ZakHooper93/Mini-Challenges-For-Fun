(function () {
    //IIFE used to ensure code is modular when/if plugged into a larger project and does not interfere.
    var Question = function (
        question,
        [option1, option2, option3],
        correctAnswer
    ) {
        this.question = question;
        this.potentialAnswersArray = [option1, option2, option3];
        this.correctAnswer = correctAnswer;
    };

    var question1 = new Question(
        "Question: How do you say hello in Polish?",
        ["0: OogaBooga", "1: Cheshch", "2: Ello, matey!"],
        "1"
    );
    var question2 = new Question(
        "Question: How likely is Zak to get this Junior Developer position?",
        ["0: 0%", "1: 50%", "2: 100%"],
        "2"
    );

    var question3 = new Question(
        "Question: How tired is Zak right now?",
        ["0: Very tired.", "1: Very very tired.", "2: Zzzzzzzz"],
        "2"
    );

    var questionsArray = [question1, question2, question3];

    function displayQuestion(questions) {
        function rng() {
            random = Math.floor(Math.random() * questions.length);
        }
        rng();

        console.log(questions[random].question);
        for (
            var i = 0;
            i < questions[random].potentialAnswersArray.length;
            i++
        ) {
            console.log(questions[random].potentialAnswersArray[i]);
        }
    }

    var playerScore = 0; //Important to place variable outside of the "playerInput" function avoid it being redefined as 0 each time the function is called.

    function playerInput(questions) {
        var playerResponse = prompt(
            questions[random].question + " (F12 for console, 'Exit' to quit.)"
        );
        if (playerResponse === questions[random].correctAnswer) {
            console.clear();
            playerScore += 1;
            console.log("CORRECT! 1 point for you! " + "Score: " + playerScore);
            displayQuestion(questionsArray);
            playerInput(questionsArray);
            return playerScore;
        } else if (playerResponse === "Exit") {
            console.clear();
            console.log("Game Closed.");
        } else {
            console.clear();
            console.log("WRONG! " + "Score: " + playerScore);
            displayQuestion(questionsArray);
            playerInput(questionsArray);
        }
    }

    displayQuestion(questionsArray);
    playerInput(questionsArray);
})();
