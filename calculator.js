let numberBoard = document.getElementsByClassName("n-board")[0];
let nu = document.querySelectorAll(".numbers");


let clicker = (btn)=>{
    btn.addEventListener("click", () => {
       let out = btn.textContent;
       numberBoard.value += out;
    });
 };
 nu.forEach(clicker);
 
 let specialNum = (spl) => {
  var splno = spl;
   numberBoard.value += splno; 
 };
 let AllClear = () => {
    numberBoard.value = "";
 };
 let Deleat = () => {
   numberBoard.value = numberBoard.value.slice(0,-1);
 };
 let Calcu = () => {
let e = numberBoard.value;

numberBoard.value = eval(e);

 };


 
