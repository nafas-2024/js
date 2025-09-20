let num= 14;
let loop=1;
let num_of_g = 0;
while (loop){
    num_of_g++;
    let guess= +prompt("enter your guess : ")
    if (guess==num){
        alert(`exactly it was ${num} . you had ${num_of_g-1} wrong guesses`);
        loop--;
    }
    else if (guess>num){
        alert(`oops ! your gues was bigger than the number . you had ${num_of_g} wrong guesses`);
    }
    else if (guess<num){
        alert(`oops ! your gues was smaller than the number . you had ${num_of_g} wrong guesses`);
    }
    else{
        alert("invalid input");
    }


}