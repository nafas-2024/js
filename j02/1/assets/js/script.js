let num = +prompt("enter a number :")

if (isNaN(num)){
    alert("invalid")
}
else{
        
    if (num==0){
        alert("your number is zero")
    }
    else if (num % 2 == 0){
        alert("your number is even")
    }
    else{
        alert("your number is odd")
    }

}