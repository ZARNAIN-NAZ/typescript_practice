//string TYpe-----------------------------------------
// let greetings : string = "heeloo"
// let myNum =6;
// greetings.toUpperCase()
// console.log(greetings)

//------------number----
// let userID :number = 3;
// userID.toFixed()
//------------boolean
// let LogIn:boolean = false;
// LogIn.valueOf;

//----------------------------inference
// let hero:string;
// function getHero(){
//     return("hello")
// }
// hero=getHero()
//------------------function
// function addTwo(num  :number):number{
//     return num+2;
//     return "sa"
// }

// function getUpper(val:string){
//     return val.toUpperCase()
// }
// addTwo(3)

//diff data in a single function
// function leet(name:string , age:number , isPaid:boolean){}
// leet("nan" , 3, true)

//arrow function
// let logIn = (name:string , age:number , ispaid:boolean=false)=>{

// }
// logIn("sds",3)
// / function getval(val: number){
    //     if(val>5){
    //         return true;
    //     }
    //     return  "200l"
    // }giver error

  //   let count = (s:string):string =>{
  // return "k"
  //   }

  // const heros = ["elon","ere","john"]
  // const heros = [3,5,43]
  // heros.map((z):string=>{
  //   return `hero is ${z}`
    // return 3;
  // })


  //void is return nothing A function with no parameter-------------
  // function consoleErr(error:string): void{
  //   console.log(error)
  // }
  //never appears when there's nothing left in union 
//   function handleErr(err:string):never{
// throw new Error(err)
//   }

//object-------------------------------------------------
// const user ={
//   name:"zarnain",
//   email:"abc@gmail.com",
//   isActive  :false
// } 
//  function createUser({name:string , isPaid: boolean}){}
//  createUser({name:"SA", isPaid: true});

//  function createCourse():{name:string , price:number}{
//   return{name:"dd" , price:99}
//  }

//aliases-----------------------------------------------------------
//type: use same type morethan once & refer to it by single name 
// type User = {
//   name:string;
//   email:string;
//   isActive:boolean
// }
// type myString =string

// function createUser (user:User):User{
//   return {name:"", email:"",isActive:true }
// }
// createUser({name:"", email:"",isActive:true })

// readonly adn optional that is used by "?"before colon-----------------------------
// type User = {
//   readonly _id:string //readonly wont be able to changes
//   name:string
//   email:string
//   isActive :boolean,
//   creditCardDetails?:number // this is not necessary to fill this value (optional)
// }
// let myUser:User={
//   _id: "343",
//   name:"d",
//   email: "a@gmail.com",
//   isActive:false,

// }
//  type cardNumber = {
//   cardNumber :string
//  }
//  type cardData = {
//   cardDate :string
//  }
//  type cardDetails = cardNumber & cardData &{
//   cvv:number 
//  }
// myUser.email = "z@gmail.com"
// myUser._id="ss" //it giver error cant reassign it or changed it 


//Array-----------------------------------------------------
// const superHeros: string[] = [ ]
// const heroPower : number [ ]=[]
// // const heroPower:Array<number>=[]

// type User={
//   name:string
//   isActive:boolean
// }
// const allUsers : User[]=[]

// superHeros.push("spider")
// heroPower.push(8)
// allUsers.push({name:"" , isActive:true})

// //2nd way
// const MLModels:number[][]=[
//   [243,342,342],
//   []
// ]

//-------Union Types in TS------------------------------------
// let score :number |string =43;
// score =44;
// score= "22"
// type User ={
//   name:string;
//   id:number; 
// }
// type Admin={
//   username:string;
//   id:number; 
// }
// let z:User | Admin ={name:"ss",id:22}
// z={username : "ada" , id:9}

// function getDbId(id:number |string){
//   console.log(`DB id is :${id} `)
// }
// getDbId(8)
// getDbId("9")
// function getDbId(id:number |string){
// if(typeof id === "string"){
// id.toLowerCase()
// }
// }
//Array
// const data:number[]=[1,2,3,23,2,"9"] //gives err0r
// const data3:(number|string)[] =[3,22,"s"] //now it can take many data types in single array by using in parameter.
// const data2:string[]=[1,2,3,23,2,"9"]// gives error 

// let pi :3.14 =3.14;
// pi=3.144//gives error

//  let seatAllotment:"aisle" | "middle"|"window"
//  seatAllotment ="aisle"
//  seatAllotment="crew" //gives error

//---------------------------TUPLES--------
// let user:(string | number)[]=["nh",9,]
// let user: [string , number , boolean]
// user =[ "j" ,9 , true] //run
// user=[9,"nj",false] //error, bcz order of array matters
// let rgba :[number , number , number]=[888,78,89]
// type User = [number ,string]
// const newUser : User =[34,"ds"]
// newUser[1]="n.nk"
// newUser.push(true)

//-----------ENUMS------------------
// enum seatChoice{
//   aisle=10 , //take values itself by sequence for eg start 1st property with 0 so automtically 2nd prop would be 1 and so on
//   middle=90 ,
//   window="nnn" ,
//   forth
// }
// const hcSeat  = seatChoice.aisle

// --------------------------INTERFACE---------------------
// interface User{
//   readonly dbID :number,
//   email :string,
//   userId:number
//   googleID?: string
  // startTrail:()=>string
//   startTrail():string
//   getCoupen(couponname:string , value:number):number
// }
// interface User{
//   gitHubToken : string
// }
// interface Admin extends User{
// role:"admin"  | "ere"| "wdw"
// }
// const h:Admin={ 
//   dbID :3 , 
//   email: "sd@gmail.com" 
//   ,userId:9,
// startTrail : ()=>{
//   return "sds"
// },
// getCoupen: (name:"asad" , off :89)=>{
// return 78;
// },
// gitHubToken:"w"
// }
// h.email ="sdd@gmail.com"
// export{}
