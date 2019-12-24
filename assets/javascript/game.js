var winCount = 0;
    var lossCount = 0;
    var userScore = 0;
    // computer needs to generate a random number between 19 and 120 that is then assigned to a var
    var computerNumber = Math.floor(Math.random() * 102) + 19;
    // buttons on the page should be given a value between 1 and 12
    var buttonValue = Math.floor(Math.random() * 12) + 1;


    // value vars
    var computerNumberText = $("#computer-number-display");
    var lossCountText = $("#loss-count-display");
    var winCountText = $("#win-count-display");
    var userScoreText = $("#user-score-display");

    // code to update game values
    computerNumberText.text(computerNumber);
    lossCountText.text(lossCount);
    winCountText.text(winCount);
    userScoreText.text(userScore);

    // reset game function
    // when user wins or looses the user's score resets, the wins or losses counter increases, computer selects a new random number and the buttons get new values
    function resetGame() {
        computerNumber = Math.floor(Math.random() * 102) + 19;
        buttonValue = Math.floor(Math.random() * 12) + 1;
        computerNumberText.text(computerNumber);
        lossCountText.text(lossCount);
        winCountText.text(winCount);
        userScore = 0;
        userScoreText.text(userScore);
        

    }


$(document).ready(function () {



        // each of the 4 buttons on the page should be given a value between 1 and 12
        
        $(".crystal-btn").each(function(){
            var buttonValue = Math.floor(Math.random() * 12) + 1;
            $(this).attr('data-value', buttonValue);

        })
    // When user clicks on button the button's number value is added to their score
    $(".crystal-btn").on("click", function () {
        userScore = userScore + parseInt($(this).attr('data-value'));
        console.log($(this).attr('data-value'));
        // if user score is greater than the computer's number the user looses else if the user score is equal to the computer's number the user wins
        if (userScore === computerNumber) {
            winCount++;
            // update screen to show win
            userScoreText.text("Congratulations You Win!");
            // reset game
            resetGame();
        } else if (userScore > computerNumber) {
            lossCount++;
            // update screen to show loss
            userScoreText.text("Sorry, You Loose.");
            // reset game
            resetGame();
        }else{
            computerNumberText.text(computerNumber);
            lossCountText.text(lossCount);
            winCountText.text(winCount);
            userScoreText.text(userScore);
        }
    });
});