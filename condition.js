var read = require('readline-sync')

var value =read.question('enter a number');

console.log(value)

var add = read.question('enter another number')

    console.log(add)


    if(value>add)
    {
        console.log("highest number is"+value);
    }

    else
    {
        console.log("highest number is"+add)
    }

num1=read.question('number enter');
num2=read.question('');

console.log(num1,num2);

 if(num1>num2)
 {
    console.log("1st is greater"+num1);
 }
 else if (num1===num2) {
    console.log("it is same")
    
 } else {

    console.log("the greatest is " + num2)
    
 }
