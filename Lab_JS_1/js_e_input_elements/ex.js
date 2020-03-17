function readNum(id){
    return parseInt(document.getElementById(id).value);
}

function add(){
    var inputNum1 = readNum("num1") ;
    var inputNum2 = readNum("num2");
    document.getElementById("answer").innerHTML = inputNum1 + inputNum2;
}
function subtract(){
    var inputNum1 = readNum("num1") ;
    var inputNum2 = readNum("num2");
    document.getElementById("answer").innerHTML = inputNum1 - inputNum2;
;}
function multiply(){ 
    var inputNum1 = readNum("num1") ;
    var inputNum2 = readNum("num2");
    document.getElementById("answer").innerHTML = inputNum1 * inputNum2;
;}
function divide(){
    var inputNum1 = readNum("num1") ;
    var inputNum2 = readNum("num2");
    document.getElementById("answer").innerHTML = inputNum1 / inputNum2;
    ;}