let score1 = +prompt("enter the first score")
let score2 = +prompt("enter the second score")
let score3 = +prompt("enter the third score")
let score4 = +prompt("enter the fourth score")

let avg = (score1+score2+score3+score4)/4

if (score1<=20 || score1>=0){
    if (score2<=20 || score2>=0){
        if (score3<=20 || score3>=0){
            if (score4<=20 || score4>=0){
                if (avg>=18){
                    alert("A"+avg)
                }
                else if (avg>=16){
                    alert("B"+avg)
                }
                
                else if (avg>=14){
                    alert("C"+avg)
                }
                
                else if (avg>=10){
                    alert("D"+avg)
                }
                else if (avg<10){
                    alert("Feiled"+avg)
                }
                else{
                    alert("invalid score")
                }
            }
            else{
                alert("invalid in the fourth score")
            }
        }
        else{
            alert("invalid in the third score")
        }
    }
    else{
        alert("invalid in the second score")
    }
}
else{
    alert("invalid in the first score")
}