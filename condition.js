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


