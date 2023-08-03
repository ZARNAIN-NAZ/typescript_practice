import inquirer from "inquirer";
let todos:string[]=[]
let loop=true;
while (loop){
    const answer:{
        todo:string,
        addmore:boolean
    }= await inquirer.prompt([
        {
            type:"input",
            name:"todo",
            message:"what do u want to add in todo"
        },
        {
           type:"confirm",
           name:"addmore",
           message:"do u want to add more todo" ,
           default: false
        }
    ])
    const {todo , addmore}=answer ;
    console.log(answer)
    loop = addmore
    if(todo){
todos.push(todo)
    }
    else{
     console.log("kindly add ")
    }
}
if(todos.length>0){
    console.log("your todo list:")
todos.forEach(todo => {
    console.log(todo)
});
}
else{
    console.log("no todos found!")
}
console.log(todos)