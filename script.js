let word =prompt("hi")
let len=0;
let rev = [];
while(word[len]!=undefined)len++

for (let i = len-1 ; i>=0; i--) rev.push(word[i])
alert(rev)


let m = String(rev);
let mLen=0;

while(m[mLen]!=undefined)mLen++

for (let j = 0 ; j<=mLen;j++ ){
    if (m[j]==="i"){
        m[j].replace("");
    }
}
alert(m)
