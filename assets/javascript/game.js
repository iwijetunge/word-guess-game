

        imageIndex = "assets/images/" + "chess" +".jpg"
        document.getElementById("imgID").src = imageIndex; 
     
        var chessPlayers = ["ALEXANDER_ALEKHINE","ANATOLY_KARPOV","ARON_NIMZOWITSCH","BOBBY_FISCHER","BORIS_SPASSKY","EMANUEL_LASKER","HIKARU_NAKAMURA","JOSE_CAPABLANCA","JUDITH_POLGAR","MAGNUS_CARLSEN","MIKHAIL_BOTVINNIK","PAUL_MORPHY","SIEGBERT_TARRASCH","VASSILY_IVANCHUK" ];
        const maxLettersInName = 21;
        var numberOfGuesses = 13;
        var losses = 0;
        var wins = 0;
        var currentName ="";
        var playerHasWon = false;

        function clearPlayerName() {
            for (i=0;i<maxLettersInName;i++)  {
                     document.getElementById("c"+i).textContent= '\xa0';
            }                         
        }

        function playerHasWonF(){
            var temp = true;
            for (i=0;i<currentName.length;i++)  {
                //console.log(document.getElementById("c"+i).textContent)
                //console.log(currentName[i]);
                if (document.getElementById("c"+i).textContent ==  "_" ) {
                     temp=false;
                }               
            }
            playerHasWon = temp;
            //console.log(playerHasWon);
        }
       
        function initializeGuess() {      
            //console.log("initializeGuess");  
            
        var elementNumber = (Math.floor(Math.random() * 14));
                currentName = chessPlayers[elementNumber];
                for (i=0;i<chessPlayers[elementNumber].length;i++)  {
                    if (chessPlayers[elementNumber][i] ==  "_" ) {
                         document.getElementById("c"+i).textContent= '\xa0';
                    }
                    else {
                        document.getElementById("c"+i).textContent="_";
                    }
                }   
        console.log(currentName);             
        }

        function updateInputVariable(a) {
            //console.log("Update Input Variable");
            var aUpper=a.toUpperCase();
            
            if ((input.textContent.length)==0) {
                document.getElementById("imgID").src = "assets/images/chess.jpg"; 
                input.textContent = aUpper;
            }
            else {
                //console.log(input.textContent.includes(a));

                if (!input.textContent.includes(aUpper)){
                    numberOfGuesses-=1;
                    input.textContent = input.textContent+", " + aUpper;
                }

            }                 
        }
    
        function updateCurrentName(a){    
            //console.log("updateCurrentName");  
            //console.log(currentName);      
             var currentLeterInIpperCase = a.toUpperCase();                       
             for (i=0;i<currentName.length;i++)  {
                if (currentName[i] ==  currentLeterInIpperCase ) {
                     document.getElementById("c"+i).textContent= currentLeterInIpperCase;
                }               
            }  
            playerHasWonF();        
        }

        function resetAfterWin() {
/*            // console.log(currentName);  
            
            document.getElementById("myAudio").src = "assets/sounds/" + currentName +".m4a"; 
            var x = document.getElementById("myAudio");
            //console.log(x);
            x.play();
 */
            document.getElementById("imgID").src = "assets/images/" + currentName +".jpg";   
        
            playerHasWon=false;
            clearPlayerName();
            initializeGuess();
            wins+=1;
            wins_1.textContent = wins;
            numberOfGuesses = 13;
            score.textContent = numberOfGuesses;
            input.textContent = "";
        }

        function resetAfterLoss() {
            clearPlayerName();
            initializeGuess();
            losses+=1;
            losses_1.textContent = losses;
            numberOfGuesses = 13;
            score.textContent = numberOfGuesses ;
            input.textContent = "";
            
            document.getElementById("imgID").src = "assets/images/chess.jpg"; 
        }
                
        initializeGuess() ;
     
                  document.onkeyup = function(event) {
            updateCurrentName(event.key);
            //updateInputVariable(event.key)
            if (numberOfGuesses==0) {
                  resetAfterLoss();                 
            }
            else {
                if (playerHasWon) {
                    resetAfterWin();
                }
                else {         
                updateCurrentName(event.key);
                updateInputVariable(event.key);
                
                score.textContent = numberOfGuesses;
            }                               
        }
    }
     // }