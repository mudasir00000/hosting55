// Q:1
// Array=[]

// Q:2
// Array=[]

// Q:3
// var arr=["Humayoon","joyo","student"]

// Q:4
// var arr1 = [1,2,3,4,5]

// Q:5
// var arr = [true,false]

// Q:6
// var arr = ["smit", 1, true]

// Q:7
// const arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"];
// const l_arr = arr.length
// document.write("<b>Qualification</b>");
// document.write("<br>");
// document.write("<br>");
// for (let i = 0; i < l_arr; i++) {
//     document.write("<br>"+arr[i])
//   }

// Q:8
// const students_name = ["Micheal","John","Tony"];
// const marks = [320,430,480];
// var s1 = marks[0] / 500 
// var s2 = marks[1] / 500 
// var s3 = marks[2] / 500
// document.write("Score of Micheal is 320. Persantage :"+s1);
// document.write("<br>"); 
// document.write("Score of John is 430. Persantage :"+s2); 
// document.write("<br>");
// document.write("Score of Tony is 480. Persantage :"+s3); 

// Q:9
// var colour = ["wight", "green", "blue"];
// colour.unshift(prompt("enter big_1"));
// console.log(colour);
// colour.unshift(prompt("enter big_2"),prompt("enter big_3"));   
// console.log(colour);
// colour.push(prompt("Enter for end_1"));
// console.log(colour)
// colour.push(prompt("Enter for end_2"),prompt("Enter for end_3"));
// console.log(colour)
// colour.pop("for delete_1")
// console.log(colour)
// colour.pop(prompt("for delete_1"),prompt("Enter for delete_2"))
// console.log(colour)
// for(var i = 0; i < colour.length; i++){
//     document.write("<p>" + colour[i] + "</p>");
// }

// Q:10
// const Score = [230,320,480,120];
// Score.sort();
// document.write("score of students :"+Score);
// document.write("<br>");
// document.write("orderd score : "+Score);

// Q:11
// const cities_list = ["karachi","islamabad","lahore","Quetta"];
// document.write(cities_list);
// document.write("<br>");
// document.write("cities : "+cities_list[0,1,2]);

// Q:12
// var arr = ["This", "is", "my", "cat"]; 
// arr.join();
// document.write(arr);

// Q:13
// const devices = ["keyboard","mouse","moniter","CPU"]
// devices.sort();
// document.write("Out: "+devices[0])
// document.write("<br>");
// document.write("Out: "+devices[1])
// document.write("<br>");
// document.write("Out: "+devices[2])
// document.write("<br>");
// document.write("Out: "+devices[3])

// Q:14
// const devices = ["keyboard","mouse","moniter","CPU"]
// devices.reverse();
// document.write("Out:<br> "+devices[3])
// document.write("<br>");
// document.write("Out:<br> "+devices[2])
// document.write("<br>");
// document.write("Out:<br> "+devices[1])
// document.write("<br>");
// document.write("Out:<br> "+devices[0])

// Q:15
function selOpt() {
    selEl = document.querySelector('#s1');
    op = selEl.value;
    document.querySelector('.op').textContent = op;
 }