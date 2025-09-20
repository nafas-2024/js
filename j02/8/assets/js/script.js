let temp = +prompt("دمای آب را وارد کنید")

if (temp<0){
    alert("یخ زده ❄")
}
else if (temp<100){
    alert("مایع 🌊")
} 
else if (temp>100){
    alert("بخار 🌋")
} 