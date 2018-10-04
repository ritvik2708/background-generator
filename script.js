var h3=document.querySelector("h3");
var class1=document.querySelector(".color1");
var class2=document.querySelector(".color2");
var body=document.querySelector("body");
var button=document.querySelector("button");
class1.addEventListener("input",changeGradient);
class2.addEventListener("input",changeGradient);
button.addEventListener("click",setRandomColors);
changeGradient();
function changeGradient(){
    body.style.background="linear-gradient(to right, "+class1.value+", "+class2.value+")";
    h3.textContent=body.style.background;
}
function setRandomColors(){
    class1.value="#"+generateRandomColorNumber()+generateRandomColorNumber()+generateRandomColorNumber();
    class2.value="#"+generateRandomColorNumber()+generateRandomColorNumber()+generateRandomColorNumber();
    changeGradient();
}
function generateRandomColorNumber(){
    return Math.floor(Math.random()*240+16).toString(16);
}