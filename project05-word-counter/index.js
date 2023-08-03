import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence "
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(` your sentence words length is ${words.length}`);
