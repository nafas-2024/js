// گرفتن تعداد دست ها
let time = +prompt("sets of your game :");
let teme_copy=time;
// شمارنده ی برد های کاربران
let count_win1 = 0;
let count_win2 = 0;

while (teme_copy >0){
    let user1 = prompt(`please chose one of "rock" or "paper" or "scissors"`);
    let user2 = prompt(`please chose one of "rock" or "paper" or "scissors"`);
    // اگر کاربر دوم مقدار اشتباهی را وارد کرد
    if (!(user2=="rock" || user2=="paper" || user2=="scissors")){ 
        alert("user2 has invalid input")
    }
    // اگر هر دو کاربر مقدار دهی درست انجام دادن
    if (user1=="rock" || user1=="paper" || user1=="scissors"){
        if (user2=="rock" || user2=="paper" || user2=="scissors"){
            // در صورتی که مقدار ها برابر باشن
            if (user1==user2){
                alert("tie")
            }
            else if (user1=="rock"){
                if (user2=="paper"){
                    alert("winner : user2")
                    count_win2++;
                }
                else{
                    alert("winner : user1")
                    count_win1++;
                }
            }
            else if (user1=="paper"){
                if (user2=="scissors"){
                    alert("winner : user2")
                    count_win2++;
                }
                else{
                    alert("winner : user1")
                    count_win1++;
                }
            }
            else if (user1=="scissors"){
                if (user2=="paper"){
                    alert("winner : user2")
                    count_win2++;
                }
                else{
                    alert("winner : user1")
                    count_win1++;
                }
            }
        }
    }
    // اگر کاربر اول مقدار اشتباه وارد کرد
    else{
        alert("user1 has invalid input")
    }
    teme_copy--;
}
alert(`user1 : ${count_win1} win \n user2 : ${count_win2} win \n tie : ${count_win1===0&&count_win2===0?0:time-(count_win1+count_win2)} \n Game winner : ${count_win1>count_win2?"user1":"user2"&& count_win1<count_win2?"user2":"non"}
`)