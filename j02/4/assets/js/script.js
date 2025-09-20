let user1 = prompt("chose one of (rock or paper or scissors)");
let user2 = prompt("chose one of (rock or paper or scissors)");


if (user1=="rock" || user1=="paper" || user1=="scissors"){
    if (user2=="rock" || user2=="paper" || user2=="scissors"){
        if (user1==user2){
            alert("equal ");
        }
        else if (user1=="rock"){
            if (user2=="paper"){
                alert("user2 win");
            }
            else{
                alert("user2 win");
            }
        }
        else if (user1=="paper"){
            if (user2=="rock"){
                alert("user1 win");
            }
            else{
                alert("user2 win");
            }
        }
        else if (user1=="scissors"){
            if (user2=="paper"){
                alert("user1 win");
            }
            else{
                alert("user2 win");
            }
        }
    }
    else{
        alert("invalid in user 2")
    }
}
else{
    alert("invalid in user 1")
}