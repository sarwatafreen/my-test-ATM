#! /usr/bin/env node
import inquirer from "inquirer";


let pinAnswer = await inquirer.prompt(
 [ 
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]   

);
// 12345 === 123456- false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

   let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance", "fast cash"]
            }
        ]
    );
    console.log(operationAns);

    if(operationAns.operation === "withdraw") {
        
        let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"enter your amount",
                type:"number"
            }
        ]

        );
        myBalance -= amountAns.amount;

      console.log("your remaing balance is: "+ myBalance)

    } else if(operationAns.operation ==="check balance"){

        console.log("your balance is :" + myBalance )
    }
     else if(operationAns.operation ==="fast cash"){

        console.log(`your balance after fast cash withdrawl is: $ {withdraw}` );
     }
}
 
else{
     console.log("incorrect pin number");




}

 
//console.log("hello");
//console.log(pinAnswer.q1);
