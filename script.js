//class assignment

//QUESTION 1
//.Declare an empty array using JS literal notation to store student names in future.
// let students = [];
// console.log(students);

//QUESTION 2
//Declare and initialize a strings array.
// let months = ["jan","feb","march","april","may","june"];
// console.log(months);

//QUESTION 3
// Declare and initialize a numbers array.
// let numbers = [1,4,8,9,45,99];
// console.log(numbers);

//QUESTION 4
//Declare and initialize a boolean array.
// let booleanarrays = [ true, false, true]
// console.log(booleanarrays);

//QUESTION 5
// let mixedarrays = [34, 89, "apple",true, null]
// console.log(mixedarrays);

//QUESTION 6
let qualificationInPakistan = ["SSC", "HSC", "BSC","BS", "BCOM", "MS", "M.Phil", "PhD"] 
document.write("<h3>Educational Qualification of Pakistan</h3>")
document.write("<ol>")

for (let i = 0;i <= 7; i++){
    document.write("<li> <b>" + qualificationInPakistan[i] + "<b> </li>")
}
document.write("</ol>")



let qualificationsInPakistan = ["SSC", "HSC", "BSC","BS", "BCOM", "MS", "M.Phil", "PhD"] 
document.write("<h3>Educational Qualification of Pakistan</h3>")
document.write("<ol>")

for (let i = 0;i <= 0; i++){
    document.write("<li>" + qualificationsInPakistan[4] + "</li>")
}
document.write("</ol>")





let friutsInPakistan = ["Water Melon", "Apple", "Orange","Guava", "Mango", "Pineapple", "Kiwi", "Grapes"] 
document.write("<h3>Best fruits of Pakistan</h3>")
document.write("<ul>")

for (let i = 0;i <= 7; i++){
    document.write("<li> <b>" + friutsInPakistan[i] + "<b> </li>")
}
document.write("</ul>")

// let color = ["Red", "Blue", "Green", "Yellow", "Pink", "Silver"]
// document.write("Original Array is;" + color)
// let color_to_add= prompt("Enter the color")
// color.unshift(color_to_add)
// document.write("<br> <br>update array is;" + color)



// let color = ["Red", "Blue", "Green", "Yellow", "Pink", "Silver"]
// document.write("Original Array is;" + color)
// let color_to_add= prompt("Enter the color")
// color.pop(color_to_add)
// document.write("<br> <br>My unshift array is;" + color)

// let color = ["Red", "Blue", "Green", "Yellow", "Pink", "Silver"]
// document.write("Original Array is;" + color)
// let index_to_add = prompt("At which index will be add")
// let color_to_add= prompt("Enter the color")
// color.splice(index_to_add, 0, color_to_add)
// document.write("<br> <br>updated array is;" + color)




let color = ["Red", "Blue", "Green", "Yellow", "Pink", "Silver"]
document.write("Original Array is;" + color)
let index_to_delete = prompt("At which index will be add")
let color_to_delete= prompt("Enter the color")
color.splice(index_to_delete, 0, color_to_delete)
document.write("<br> <br>updated array is;" + color)



//QUESTION 7
// const studentName = ["Micheal", "John", "Tony"];
// const studentScore = [320, 230, 480];
// let total = 500;
// const percentage1 = (studentScore[0]/total) * 100;
// const percentage2 = (studentScore[1]/total) * 100;
// const percentage3 = (studentScore[2]/total) * 100;
// document.write("score of" + studentName[0] +   "is" + studentScore[0] +".percentage" +percentage1 + "%");
// document.write("<br>score of" + studentName[1] +"is" + studentScore[1] + ".percentage" +percentage2 + "%");
// document.write("<br>score of" + studentName[2]  +"is"+studentScore[2] +".percentage" +percentage3 + "%");



//for loops
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");
// console.log("HelloWorld");

// for(let i = 0;i < 10; i++){
//     console.log();("Hello World");
// }
// for(let i = 5; i < 51;i = i + 5){
  
//     console.log(i+ "\n");
// }

// for(let i = 14; i < 141;i = i + 14){
  
//     console.log(i+ "\n");
// }
// for(let i = 14; i < 141;i = i - 14){
  
//     console.log(i+ "\n");
// }
// for(let i = 0;i < 100; i++){
//     document.write("Hello World");
// }

// for(let i = 24; i < 241; i = i + 24){
//     console.log(i);
// }

// let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]
// let cityToCheck = "Great Falls"
// for (let i = 0; i <= 4; i++){
//     if (cityToCheck === cleanestCities[3]){
//         alert("It's one of the cleanest cities");
//     }
//     else{
//         alert("It's not one of the cleanest cities");
//     }
// }

// let months = ["January", "February", "March", "April", "May", "June"]
// let monthToCheck = "April"
// for (let i = 0; i <= 4; i++){
//     if (monthToCheck === months[3]){
//         alert("It's my birthday month")
//     }
//     else if(monthToCheck === months[2]){
//         alert("It's not my birthday month")
//     }

//     else{
//         alert("It's normal month")
//     }
// }