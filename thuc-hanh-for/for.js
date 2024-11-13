let i;
let text= "";
for(i = 0; i <= 5; i++){
    text += "the number is" + i + "<br>";
}
document.getElementById("text").innerHTML = text;
///
let n= +prompt("nhập vào một số bất kỳ")
let sum = 0;
for (let j = 0; j < n; j++) {
    sum += j;
}
alert(sum);