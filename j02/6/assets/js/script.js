let num = +prompt("enter a number")

if (isNaN(num)){
    alert ("please only enter a number")
}
else if (num%3==0){
    if (num%5==0){
        alert("fizzzzbazzzz")
    }   
    else {
        alert("fizzzz")
    }
}
else if (num%5==0){
    alert("bazzzz")
}
else{
    alert(num)
}