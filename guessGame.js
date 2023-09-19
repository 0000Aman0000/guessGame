
const prompt = require('prompt-sync')();

 function guessGame(){
    const limit =  getNumber('Enter the Range: ')//setting limit to the guess
    console.log(`Limit that you set is ${limit}`)
    const guessAvailable = possibleGuess(limit);
    console.log(`You've ${guessAvailable} Chances to Guess the Number`);
    const validTarget = secretNumber(limit);
    console.log(`Valid Target ${validTarget}`);
    const guess = getNumber('Enter Your Guess: ');
    const output = checkGuess(validTarget,guess,guessAvailable-1);
   console.log(output);
}
//1.  setLimit() to set the limit for comoputer to generate a number
function getNumber(message){
  return Number.parseInt(prompt(message));
}

//2. calGuess()  to to calculate the total guess possible 
function possibleGuess(limit){
    // return Math.floor(Math.log2(limit)+1);
    let i=0;
    let dummyLimit = 1;
    while(dummyLimit<limit){
        i+=1;
        dummyLimit=2**i;
        }
    return i+2;
}
//3. getTarget() to get the valid target
function secretNumber(limit){
    limit-=1;
    return Math.floor(Math.random()*limit+1);   
}
//4. getGuess() to get a valid from the user 
// function getGuess(){
//     return  Number.parseInt(prompt('Enter your Guess: '))
// }
//5. checkGuess() to check if the user win the game or lose!
function checkGuess(secret,guess,guessAvailable)
{       
        let res = "Sorry You Loose";
        let flag= false;
        if(guess ===secret && guessAvailable>=0){
            res = "Rock On";
            flag = true;
            return  res;
        }
        else if(flag ===false) {
            if (guess >secret)
                    console.log(`Number is Smaller than ${guess}, You've ${guessAvailable} Chances Left.`);
            else console.log(`Number is greater than ${guess}`)
            
            if(guessAvailable<=0){
                // readline.close();
            
                return res="Sorry You Loose";
            }
            else{
                guess = getNumber('Enter Your Guess: ');
                res =checkGuess(secret,guess,guessAvailable-1);
            }
        }
        return res;
}

guessGame();