//calculater

// let number1=10;
// let number2=20;

// let operator="%";

// switch(operator){
//     case "+" :

//         console.log(number1+number2);
//         break;
//     case "-" :
//         console.log(number1-number2);
//         break;
//     case "*":
//         console.log(number1*number2);
//         break;
//     case "/":
//         if (number2!==0){
//             console.log(number1/number2)
//             break;
//         }
//     case "%":
//         if (number2!==0){
//             console.log(number1%number2)
//             break;
//         }
//     default:
//         console.log("irrevelant Operator")
// }

//marks
let marks =100 ;
let bonus = 10;
let grade = "";
let Remarks = "";
let Result = "";

marks+=bonus;
console.log(marks)

if (marks >= 90 && marks <= 100) {
  grade = "A";
  console.log(grade);
} else if (marks >= 70 && marks <= 89) {
  grade = "B";
  console.log(grade);
} else if (marks >= 50 && marks <= 69) {
  grade = "C";
  console.log(grade);
} else if (marks < 50) {
  grade = "F";
  console.log(grade);
}
Result = marks >= 50 ? "pass" : "fail";
console.log(Result);
switch (grade) {
  case "A":
    Remarks = "Excellent";
    console.log(Remarks);
    break;
  case "B":
    Remarks = "Good";
    console.log(Remarks);
    break;
  case "C":
    Remarks = "Average";
    console.log(Remarks);
    break;
  case "F":
    Remarks = "Need Improvement";
    console.log(Remarks);
    break;
  default:
    console.log("invalid");
}
let message = (marks > 90 && bonus > 0) ? "Great! Bonus helped boost high score" : "";
console.log(message)

