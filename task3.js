let action="+"
while(action=="+" || action=="-" || action=="*" || action=="/"){
  let num1=prompt("1-sonni kiriting")*1
  action=prompt("+, -, *, / shu 4ta amaldan birini kiriting")
 let num2=prompt("2-sonni kiriting")*1
 if(action=="+") {
  console.log(num1+num2);
 }
 else if(action=="-") {
  console.log(num1-num2);
 }
 else if(action=="/") {
  console.log(num1/num2);
 }
 else if(action=="*") {
  console.log(num1*num2);
 }
 else{
  document.write("Sizga ham mazzada farosatiz ham yo'q!!!")
 }
}