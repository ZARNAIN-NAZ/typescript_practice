function detetTypes(val:number| string ){
    if(typeof val ==="string"){
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id:string | null){
    if(!id){
        console.log("please provide id")
        return

    }
    id.toLowerCase()
}

function xyz(val :string | string[] | null){
    if(val){
        if(typeof val ==="object"){
            for(const a of val){
                console.log(a)
            }
        }
        else if(typeof val ==="string"){
            console.log(val)
        }
    }
}
// in operator in narrowing
interface User{
    name:string
    ,email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdminAccount(account:User | Admin){
if("isAdmin" in account){
    return account.isAdmin
}
}

//instance and type predicates
function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
else{
    console.log(x.toUpperCase())
}}

//predicate
type Fish={swim:()=>void}
type Bird={fly:()=>void}
function isFish(pet:Fish   | Bird):pet is Fish{
    return (pet as Fish).swim !==undefined

}
function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return'fish food'
    }
    else{
        pet
        return "bird food"
    }
}

//discriminated union and exhaustiveness checking
interface circle{
    kind:"circle",
    radius:number
}
interface square{
    kind:"square",
    side:number
}
interface rectangle{
    kind:"rectangle",
    length:number,
    width:number
}
type Shape =circle|square
function getShape(shape:Shape){
  if(shape.kind==="circle"){
    return Math.PI * shape.radius**2
  }  
  return shape.side*shape.side
}

function getArea(shape:Shape){
    switch(shape.kind){
case "circle":
    return Math.PI * shape.radius**2
    case "square":
        shape.side*shape.side 
    //   case "rectangle":
    //     return shape.length * shape.width   
        default:
            // const  anyname:never =shape;
            // return  anyname
    }}