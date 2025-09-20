// برسی تعداد اعداد زوج و فرد
let odd = 0;
let even = 0;
// گرفتن ورودی و برسی شرط ها
while(true){
    let numbers = +prompt("number");
    // برسی رشته یا عدد بودن
    if (!isNaN(numbers)){
        if (numbers !==-1){
            if (numbers % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        else{
            odd++;
            break
        }
    }
    else{
        alert("لطفا فقط عدد وارد کنید");
    }
}
alert(`تعداد اعداد زوج برابر است با ${even} \n و تعداد اعداد فرد برابر است با ${odd}`);
