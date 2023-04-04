
        let playerWins = 0;
        let roundWinner = "unknown";

        /* commenting out tournament style!
        for(i=0;i<3;){
            let roundWinner = playRound();
            alert("Single Game Winner: "+roundWinner.toUpperCase());
            if(roundWinner == "Player"){
                playerWins++;
                i++
            }
            else if(roundWinner=="Computer"){
                i++
            }
        }

        alert("Player wins "+playerWins+" out of 3.")*/

        //This is start of single player mode, comment this out if you uncomment the above
        document.getElementById("rock").addEventListener("click",function () {
            document.getElementById("results").innerHTML = "Gentleman chooses... rock";
            roundWinner = playRound("rock");
            //alert("Single game Winner: "+roundWinner.toUpperCase());
        });
        document.getElementById("paper").addEventListener("click",function () {
            document.getElementById("results").innerHTML = "Player choice paper";
            roundWinner = playRound("paper");
            //alert("Single game Winner: "+roundWinner.toUpperCase());
        });
        document.getElementById("scissors").addEventListener("click",function () {
            document.getElementById("results").innerHTML = "Player grabs the scissors!";
            roundWinner = playRound("scissors");
            //alert("Single game Winner: "+roundWinner.toUpperCase());
        });
        //let roundWinner = playRound();
        //alert("Single game Winner: "+roundWinner.toUpperCase());



        function computerSelect(){
           let randomNumber = Math.random();
           if(randomNumber < .5){
                return("rock")
           }
           else if(randomNumber < .75){
                return("scissors")
           }
           else{
                return("paper")
           }
        }

        function playRound(playerSelection){
            //below is commented out manual/alert/pureHTML mode
            //let playerSelection = prompt("Choose Rock Paper or Scissors:").toLowerCase();
            let computerSelection = computerSelect();

            if(playerSelection=="rock"){
                if(computerSelection=="rock"){
                    document.getElementById("results").innerHTML += ", Computer choice rock, tie.";
                    return("tie");
                }
                else if(computerSelection=="paper"){
                    document.getElementById("results").innerHTML += ", Computer choice paper, Computer Wins.";
                    return("Computer")
                }
                else{
                    document.getElementById("results").innerHTML += ", Computer choice scissors, Player Wins.";
                    return("Player");
                }
            }
            else if(playerSelection=="scissors"){
                if(computerSelection=="rock"){
                    document.getElementById("results").innerHTML += ", Computer choice rock, computer wins.";
                    return("Computer");
                }
                else if(computerSelection=="paper"){
                    document.getElementById("results").innerHTML += ", Computer choice paper, HUMAN wins.";
                    return("Player")
                }
                else{
                    document.getElementById("results").innerHTML += ", Computer choice scissors, tie.";
                    return("tie");
                }
            }
            else if(playerSelection=="paper"){
                if(computerSelection=="paper"){
                    document.getElementById("results").innerHTML += ", Computer choice paper, tie.";
                    return("tie");
                }
                else if(computerSelection=="rock"){
                    document.getElementById("results").innerHTML += ", Computer choice rock, paper covers rock.";
                    return("Player")
                }
                else{
                    document.getElementById("results").innerHTML += ", Computer choice scissors, human wins again.";
                    return("Computer");
                }
            }
            else{
                alert("player is an idiot and loses one game");
                return("Computer")
            }
        }
    