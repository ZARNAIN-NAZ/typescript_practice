import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.45,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([{
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency"
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "enter amount"
    },
]);
const { From, To, amount } = answer;
if (From && To && amount) {
    let result = convertion[From][To] * amount;
    console.log("your conversion from", From + "TO", To + "is", result);
}
else {
    console.log("invalid input");
}
