
let num= 75;
let loop=1;
// حلقه ای برای تکرار پرسش تا 5 بار
while (loop<=5){
    // گرقتن عدد از کاربر
    let guess= +prompt("enter your guess between 1 to 100: ")
    // برسی شرایط عدد کاربر نسبت به عدد انتخاب شده
    // در صورتی که عدد برابر با 75 بود
    if (guess==num){
        alert(`exactly it was ${num} . you had ${loop-1} wrong guesses`);
        loop--;
    }
    // در صورتی که عدد بزرگتر از 75 بود
    else if (guess>num){
        alert(`oops ! your gues was bigger than the number . you had ${loop} wrong guesses`);
    }
    // در صورتی که عدد کوچکتر از 75 بود
    else if (guess<num){
        alert(`oops ! your gues was smaller than the number . you had ${loop} wrong guesses`);
    }
    else{
        alert("invalid input");
    }
    // اگر کاربر 5 بار حدس اشتباه زد
    if (loop===5){
        alert("you lost 😩")
    }
    // اضافه کردن به مقدار 
    loop++;

}