import inquirer  from "inquirer";
interface anyType{
    userId:string,
    userPin:number
,accountType:string,
transactionType:string,
amount:number
}
const answer = await inquirer.prompt(
    [
    {
 type:"input",
 name:"userId",
 message : "enter your ID"
},
{
    type:"number",
    name:"userPin",
    message : "enter your Pin"
   },
   {
    type:"list",
    name:"accountType"
    ,choices:['current ' ,'saving']
    ,message:"select your account type:"
    
   },
   {
    type:"list",
    name:"transactionType"
    ,choices:['FastCash ' ,'withdraw']
    ,message:"select your transaction"
    , when(answer){
        return answer.accountType
    }
   }
   ,
   {
    type:"list",
    name:"amount"
    ,choices:[ 1000,2000,10000 , 20000]
    ,message:"select your amount"
    , when(answer){
        return answer.transactionType =="FastCash"
    },
   }
   , {
    type:"number",
    name:"amount"
    ,message:"enter your amount"
    , when(answer){
        return answer.transactionType =="withdraw"
    }
   }
])
if(answer.userId && answer.userPin){
    const balance= Math.floor(Math.random()*10000)
    console.log(balance)
const enteredAmount = answer.amount;
if(balance>=enteredAmount){
const remain=balance -enteredAmount;
console.log("your remaining balance is " , remain)
}else{
    console.log("insufficient balance" )
}
}


// console.log(answer