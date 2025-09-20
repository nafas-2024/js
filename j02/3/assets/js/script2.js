let lesson1= + prompt("lesson 1 : ")
let lesson2= + prompt("lesson 2 : ")
let lesson3= + prompt("lesson 3 : ")
let lesson4= + prompt("lesson 4 : ")
let avg = (lesson1+lesson2+lesson3)/3
alert("avg : "+ +avg)

if (lesson1>20 || lesson1<0){
    alert("invalid 1")
    if (lesson2>20 || lesson2<0){
        alert("invalid 2")
        if (lesson3>20 || lesson3<0){
            alert("invalid 3")
            if (lesson4>20 || lesson4<0){
                alert("invalid 4")
            }   
        }
    }
}

else{
    if (avg>=18){
        alert("A")
    } 
    else if (avg>=16){
        alert("B")
    } 
    else if (avg>=14){
        alert("C")
    } 
    else if (avg>=10){
        alert("D")
    } 
    else if (avg<10){
        alert("Failed")
    } 
}