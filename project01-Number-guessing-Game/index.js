import inquirer from 'inquirer';
const systemGenerateNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: 'number',
        name: 'userGuess',
        message: "write your guess"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "user", systemGenerateNo, "sys");
if (userGuess === systemGenerateNo) {
    console.log("corrct");
}
else {
    console.log("try again");
}
console.log(answers.userGuess);
