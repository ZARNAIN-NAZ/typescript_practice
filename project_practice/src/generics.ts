//generics are reusable components
const score:Array<number>=[];
const string :Array<string>=[]

function identitiyOne(value:boolean | number):boolean | number  {
    return value
} 
function identityTwo(value:any):any{
    return value
}
function identitiyThree<Type>(val:Type):Type{
    return val // we can use anyword on Type for our ease
}
identitiyThree("k")

function identitiyFour<T>(val:T):T{
    return val
}
//we can build our own datatype in it and use in 
interface Bootle
{
    brand:string,
    type:number
}
// identitiyFour<Bootle>({}) // we can used anywhere our generic type by this syntax
//generics in array and arrow functions
function getSearchProducts<T>(products:T[]):T{
    const myIndex=9
    return products[myIndex]
}

//arrow function of upper code
const getMoreSarchProduct=<T>(products:T[]):T=>{  //<T>() it is generic arrow function
    // const getMoreSarchProduct=(products:number[]):number=>{ // it is simple arrow funciton
    const myIndex=9;
    return products[myIndex]
}    

//generic classes
interface DataBase{
    connection:string,
    username:string,
    password:string
}

// function anotherFunction<T,U extends number>(val1:T, val2:U):object{ // ot only accept number in 2nd param
function anotherFunction<T,U extends DataBase>(val1:T, val2:U):object{ // ot only accept number in 2nd param

    return {
        val1,
        val2
    }

}
// anotherFunction(3,9) for numbers
// anotherFunction(3,{}) // for database

interface Quiz{
    name:string,
    type:string,

}
interface course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart: T[]=[]
    addToCart(products:T){
        this.cart.push(products)
    }
}