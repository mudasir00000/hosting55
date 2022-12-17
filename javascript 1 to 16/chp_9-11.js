// Q:1
// var city_name = prompt("Enter City name");
// var city= "karachi"
// if(city_name = city){
//     document.write("welcome to city of Lights")
// }

// Q:2
// var inp = prompt("Enter gander");
// if(inp=="male"){
//     document.write("Good Morning Sir")
// }
// else if(inp=="female"){
//     document.write("Good Morning ma`am");
// }

// Q:3
// var color = prompt("Enter color")
// if(color=="red"){
//     document.write("Must Stop")
// }
// else if(color=="yellow"){
//     document.write("ready to move")
// }
// else if(color=="green"){
//     document.write("Move Now")
// }

// Q:4
// var fuel = prompt("Enter remainig fuel")
// if(fuel<0.25){
//     document.write("Please refill fuel")
// }

// Q:5
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
// if (true){ alert("True"); } 
// if (false){ alert("False"); } 
// if("car" < "cat"){ alert("car is smaller than cat"); }  

// Q:6
// var sub_1 = prompt("Enter 1st subject marks")
// var sub_2 = prompt("Enter 2nd subject marks")
// var sub_3 = prompt("Enter 3rd subject marks")
// var total_marks = prompt("Enter total marks")
// obtain_marks = (sub_1 + sub_2 + sub_3)
// per = obtain_marks / total_marks * 100
// if(per >= 80){
//     document.write("<b>Mark Sheet</b>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Total marks : "+total_marks);
//     document.write("<br>");
//     document.write("Obtain marks : "+obtain_marks);
//     document.write("<br>");
//     document.write("Persantage : "+per);
//     document.write("<br>");
//     document.write("Grade : A-one");
//     document.write("<br>");
//     document.write("Remarks : Excellent")
// }
// else if(per >= 70){
//     document.write("<b>Mark Sheet</b>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Total marks : "+total_marks);
//     document.write("<br>");
//     document.write("Obtain marks : "+obtain_marks);
//     document.write("<br>");
//     document.write("Persantage : "+per);
//     document.write("<br>");
//     document.write("Grade : A");
//     document.write("<br>");
//     document.write("Remarks : Good")
// }
// else if(per >= 60){
//     document.write("<b>Mark Sheet</b>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Total marks : "+total_marks);
//     document.write("<br>");
//     document.write("Obtain marks : "+obtain_marks);
//     document.write("<br>");
//     document.write("Persantage : "+per);
//     document.write("<br>");
//     document.write("Grade : B");
//     document.write("<br>");
//     document.write("Remarks : You need to improve")
// }
// else if(per >= 60){
//     document.write("<b>Mark Sheet</b>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("Total marks : "+total_marks);
//     document.write("<br>");
//     document.write("Obtain marks : "+obtain_marks);
//     document.write("<br>");
//     document.write("Persantage : "+per);
//     document.write("<br>");
//     document.write("Grade : Fail");
//     document.write("<br>");
//     document.write("Remarks : Soory")
// }

// Q:7
// var inp = prompt("Enter number");
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// if(inp==getRandomInt){
//     document.write("Bingo!")
// }
// else if(inp<getRandomInt){
//     document.write("You are near to answer")
// }

// Q:8
// var number = prompt("Enter number");
// divided_num = (number % 3);
// if(divided_num==0){
//     document.write("yes your number is divided by 3")
// }
// else if(divided_num!=0){
//     document.write("Your given number is not divided by 3")
// }

// Q:9
// const number = prompt("Enter a number: ");
// if(number % 2 == 0) {
//     document.write("The number is even.");
// }
// else {
//     document.write("The number is odd.");
// }

// Q:10
// var temperature = prompt("Enter temperature");
// if(temperature>=40){
//     document.write("It is too hot outside")
// }
// else if(temperature>=30){
//     document.write("The Weather today is Normal")
// }
// else if(temperature>=20){
//     document.write("Today’s Weather is cool")
// }
// else if(temperature>=10){
//     document.write("OMG! Today’s weather is so Cool")
// }

// Q:11
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// document.write("Operator : "+operator);
// document.write("<br>");
// document.write("Number 1 : "+number1);
// document.write("<br>");
// document.write("Number 2 : "+number2);
// document.write("<br>");
// document.write(`Total : ${number1} ${operator} ${number2} = ${result}`);
 