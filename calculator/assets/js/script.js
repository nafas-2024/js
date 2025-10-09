const numbers = document.getElementsByClassName("numbers");
const ops = document.getElementsByClassName("op");
const result = document.getElementById("input");
result.value = ""
let num = 0
for(let i = 0 ; i<numbers.length ; i++){
    numbers[i].addEventListener("click" , ()=>{
        result.value += numbers[i].textContent.trim()
    })
}
for(let i = 0 ; i<ops.length ; i++){
    ops[i].addEventListener("click" , ()=>{
        const op = ops[i].textContent.trim() ;
        if (op=="+") result.value+="+"
        else if (op=="-") result.value +="-"
        else if (op=="×") result.value +="*"
        else if (op=="÷") result.value +="/"
        else if (op==".") result.value +="."
        else if (op=="C") result.value =""
        else if (op=="⬅") result.value = result.value.slice(0, -1);
    else if(op=="=") result.value = eval(result.value)
        // else if (op=="%") result.value = result.value/100
        
        
    
    })


}

